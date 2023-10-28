import PropTypes from "prop-types";
import { route } from "../../models/route.model";
import { BsFillTrashFill } from '../../utils/icons'
import { useDispatch } from "react-redux";
import { calculateTotal, removeProduct } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { quantityOptions } from "../../utils/constants";

export const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity)
  const dispatch = useDispatch()
  
  const getItemPriceQuantity = (quantity, price) => {
    dispatch(calculateTotal())
    return (quantity * price).toFixed(2)
  }

  const removeFromCart = (id) => {
    dispatch(calculateTotal())
    dispatch(removeProduct(id))
  }

  return (
    <div className="flex gap-4 relative w-full">
      <Link to={`${route.product.productDetail.path}/${product.id}`}>
        <img 
          src={`http://localhost:5000/images/` + product?.mainImg.split('___').splice(1)}
          className="rounded-sm object-cover w-32" 
        />
      </Link>
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center mt-1">
          <span className="text-xl font-medium">{product.title}</span>
          <BsFillTrashFill size={20} className="text-gray-400 hover:text-gray-300 cursor-pointer" onClick={() => removeFromCart(product.id)} />
        </div>

        <div className="flex flex-wrap justify-between gap-2 font-roboto font-medium text-gray-400 text-[13px] mt-1">
          <span>{product?.category} - {product?.gender}</span>
          <span>{product?.size}</span>
        </div>

        <div className="flex flex-row justify-between gap-3 w-full mt-5">
          <select 
            name='gender' 
            value={quantity}
            className='px-3 py-1.5 border-2 border-gray-200 rounded-md font-medium font-roboto focus:outline-none'
            onChange={(e) => setQuantity(e.target.value)}
          >
            {
              quantityOptions.map((quantity) => (
                <option key={crypto.randomUUID()} value={quantity}>{quantity}</option>
              ))
            }
          </select>          
          <span className="flex flex-row text-lg font-medium fonr-torobot">{getItemPriceQuantity(quantity, product.price)} €</span>
        </div>
      </div>
    </div>
  )
}


CartItem.propTypes = {
  product: PropTypes.object.isRequired,
};

