import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { route } from "../../models/route.model"
import { CiCircleRemove } from '../../utils/icons'
import { calculateTotal, emptyCart, editProduct, removeProduct, toggleShowCart } from "../../redux/slices/cartSlice"

import { BsFillTrashFill } from '../../utils/icons'
import { quantityOptions } from "../../utils/constants";

export const Cart = () => {
  const { products, total } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleCloseCart = () => {
    dispatch(toggleShowCart())
  }

  const resetCart = () => {    
    dispatch(emptyCart())
  }

  const getItemPriceQuantity = (quantity, price) => {
    return (quantity * price).toFixed(2)
  }

  const updProduct = (quantity, price, id) => {
    dispatch(editProduct({ quantity, id }))
    dispatch(calculateTotal())
  }

  const removeFromCart = (id) => {
    dispatch(removeProduct(id))
    dispatch(calculateTotal())
  }

  return (
    <div className="absolute bg-gray-50 shadow-2xl top-[81px] bottom-0 right-0 w-8/12 md:w-5/12 xl:w-3/12 z-5">
      <div className="w-full px-6 py-5 h-full overflow-y-auto sticky">
        
        <CiCircleRemove onClick={handleCloseCart} className="absolute top-5 right-5 cursor-pointer" size={24} />
        
        <h2 className="flex justify-center text-2xl font-medium">Cart Items</h2>
        <div className="flex flex-col gap-3 mt-10 w-full">
          {
            products?.length === 0 
              ? ( <h1 className="font-medium text-lg">No products yet in the cart</h1>)
              : (
                products?.map(product => (
                  <div key={crypto.randomUUID()} className="flex gap-4 relative w-full">
                    <Link to={`${route.product.productDetail.path}/${product.id}`}>
                      <img 
                        src={`http://localhost:5000/images/` + product?.mainImg.split('___').splice(1)}
                        className="rounded-sm object-cover w-32" 
                      />
                    </Link>
                    <div className="flex flex-col w-full">
                      <div className="flex flex-row justify-between items-center mt-1">
                        <span className="text-xl font-medium">{product.title}</span>
                        <BsFillTrashFill size={20} className="text-gray-400 hover:text-gray-300 cursor-pointer" onClick={() => removeFromCart(product?.secretId)} />
                      </div>

                      <div className="flex flex-wrap justify-between gap-2 font-roboto font-medium text-gray-400 text-[13px] mt-1">
                        <span>{product?.category} - {product?.gender}</span>
                        <span>{product?.size}</span>
                      </div>

                      <div className="flex flex-row justify-between gap-3 w-full mt-5">
                        <select 
                          name='gender' 
                          value={product?.quantity}
                          className='px-3 py-1.5 border-2 border-gray-200 rounded-md font-medium font-roboto focus:outline-none'
                          onChange={(e) => updProduct(e.target.value, product.price, product.secretId)}
                        >
                          {
                            quantityOptions.map((quantity) => (
                              <option key={crypto.randomUUID()} value={quantity}>{quantity}</option>
                            ))
                          }
                        </select>          
                        <span className="flex flex-row text-lg font-medium fonr-torobot">{getItemPriceQuantity(product?.quantity, product.price)} €</span>
                      </div>
                    </div>
                  </div>
                ))
              )
          }
        </div>
        
          <>
            <div className="flex flex-row justify-between mt-4 text-lg font-medium">
              <span>Subtotal</span>
              <span>{Number(total).toFixed(2)} €</span>
            </div> 
            <Link to={route.address.path} onClick={handleCloseCart} className="flex justify-center font-medium text-white px-4 py-2 rounded-md bg-cyan-600 my-5">Proceed to checkout</Link>
          </>
        
        
          <div onClick={resetCart} className="resetCart">
            Reset Cart
          </div>
        
      </div>
    </div>
  )
}
