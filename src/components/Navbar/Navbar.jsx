import { route } from "../../models/route.model";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
//import { logout } from '../../redux/slices/authSlice'
import { toggleShowCart } from '../../redux/slices/cartSlice'
import { Cart } from '../index'
import logo from '../../assets/images/nike_logo.png'
import { UserNavMenu } from "./UserNavMenu";

export const Navbar = () => {
  const { showCart, products } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  //const navigate = useNavigate()

  /*const handleLogout = () => {
    dispatch(logout())
    navigate(route.root.path)
  }*/

  const handleToggleCart = () => {
    dispatch(toggleShowCart())
  }
  
  return (
    <div className="px-0.5 py-1 h-20 w-full shadow-md">
      <div className="flex items-center justify-between w-full xl:w-10/12 mx-auto h-full">
        <Link to={route.root.path} className="classes.left">
          <img src={logo} width={70} alt="profile pic" className="ml-5 xl:ml-0" />
        </Link>
        <div className="flex items-center gap-4">
          <Link to={route.product.create.path} className="classes.createBtn font-medium">
            Create
          </Link>

          <div className="relative flex flex-row gap-2 px-4 py-1.5 mr-2 cursor-pointer bg-gray-200 rounded-full font-roboto font-medium text-gray-800" onClick={handleToggleCart}>
            <AiOutlineShoppingCart size={20} /> Items
            <span className="absolute flex items-center justify-center left-6 -top-1 w-5 h-5 rounded-full bg-blue-400 text-white font-semibold  text-sm">{products.length}</span>
          </div>
          <span className="text-gray-300">|</span>
          <UserNavMenu />
        </div>
          
        { showCart && <Cart /> }
      </div>
    </div>
  );
};
