import { route } from "../../models/route.model";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowCart } from '../../redux/slices/cartSlice'
import { Cart, UserNavMenu } from '../index'
import logo from '../../assets/images/nike_logo.png'
import { AiOutlineMenu } from '../../utils/icons'
import { useState } from "react";
import { profile } from "../../assets/images";
import { menuModalUser } from "../../utils/constants";
import { logout } from "../../redux/slices/authSlice";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useSelector((state) => state.auth);
  const { showCart, products } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleToggleCart = () => {
    dispatch(toggleShowCart())
  }

  const handleLogout = () => {
    dispatch(logout())
  }
  
  return (
    <header className="px-0.5 py-1 h-20 w-full shadow-md">
      <nav className="flex items-center justify-between w-full lg:w-10/12 mx-auto h-full">
        <Link to={route.root.path} className="classes.left">
          <img src={logo} width={70} alt="profile pic" className="ml-5 xl:ml-0" />
        </Link>
        <section className="hidden lg:flex items-center gap-4">
          <div className="relative flex flex-row gap-2 px-4 py-1.5 mr-2 cursor-pointer bg-gray-200 rounded-full font-roboto font-medium text-gray-800" onClick={handleToggleCart}>
            <AiOutlineShoppingCart size={20} /> Items
            <span className="absolute flex items-center justify-center left-6 -top-1 w-5 h-5 rounded-full bg-blue-400 text-white font-semibold text-sm">{products.length}</span>
          </div>
          <span className="text-gray-300">|</span>
          <UserNavMenu className='hidden lg:flex' />          
        </section>
        <AiOutlineMenu size={20} className="mr-5 text-black flex lg:hidden" onClick={() => setIsOpen(!isOpen)} />

        { 
          isOpen && <section className="flex lg:hidden absolute top-20 w-full">
            <section className={`bg-white shadow-md ${ user ? 'h-60' : 'h-36' } w-full p-5`}>
              <div className="relative flex w-[120px] flex-row gap-2 px-4 py-1.5 mr-2 cursor-pointer bg-gray-200 rounded-full font-roboto font-medium text-gray-800" onClick={handleToggleCart}>
                <AiOutlineShoppingCart size={20} /> Items
                <span className="absolute flex items-center justify-center left-6 -top-1 w-5 h-5 rounded-full bg-blue-400 text-white font-semibold text-sm">{products.length}</span>
              </div>
              <section className="h-24 rounded-md ">
                {user ? (
                  <section className="flex flex-col gap-3 ml-2">
                    <figure className="flex flex-wrap items-center gap-3 mt-4">
                      <img src={profile} width={30} alt="profile pic" />
                      <figcaption className="text-sm font-medium">
                        {user && user.username}
                      </figcaption>
                    </figure>
                    <div>
                    {menuModalUser.map((item) => (
                      <Link
                        to={item.path}
                        key={crypto.randomUUID()}
                        className="flex flex-row gap-3 items-center py-2 hover:bg-slate-200 cursor-pointer w-full mt-1"
                        onClick={ item.name === 'Logout' && handleLogout }
                      >
                        {item.icon}
                        <span className="text-md font-regular">{item.name}</span>
                      </Link>
                    ))}
                    </div>
                  </section>
                ) : (
                  <Link
                    to={route.login.path}
                    className="px-4 py-2 absolute mt-5 bg-cyan-500 font-medium rounded-md  text-white cursor-pointer"
                  >
                    Login
                  </Link>
                )}
                
              </section>
            </section>
          </section>
        }
          
      </nav>
      { showCart && <Cart /> }
    </header>
  );
};
