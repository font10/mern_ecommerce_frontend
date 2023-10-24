import { route } from "../../models/route.model";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/slices/authSlice'
import { toggleShowCart } from '../../redux/slices/cartSlice'
import { Cart } from '../index'

export const Navbar = () => {
  const { showCart, products } = useSelector(state => state.cart)
  //const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate(route.root.path)
  }

  const handleToggleCart = () => {
    dispatch(toggleShowCart())
  }

  return (
    <div className="px-0.5 py-1 h-16 w-full shadow-md">
      <div className="flex items-center justify-between w-full xl:w-10/12 mx-auto h-full">
        <Link to={route.root.path} className="classes.left">
          <h1 className="classes.title">Ecommerce</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link to={route.product.create.path} className="classes.createBtn font-medium">
            Create
          </Link>

          <span className="classes.username font-medium">John</span>
          <span className="px-4 py-2 bg-blue-300 font-medium rounded-md" onClick={handleLogout}>Logout</span>
          <div className="relative mr-8 cursor-pointer" onClick={handleToggleCart}>
            <AiOutlineShoppingCart size={20} />
            <span className="absolute flex items-center justify-center left-2 -top-3 w-5 h-5 rounded-full bg-blue-400 text-white font-semibold  text-sm">{products.length}</span>
          </div>
        </div>
        { showCart && <Cart /> }
      </div>
    </div>
  );
};
