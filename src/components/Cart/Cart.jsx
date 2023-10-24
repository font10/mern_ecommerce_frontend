import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { route } from "../../models/route.model"
import { BsFillTrashFill, CiCircleRemove } from '../../utils/icons'
import { emptyCart, removeProduct, toggleShowCart } from "../../redux/slices/cartSlice"

export const Cart = () => {
  const { products } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  let total = 0
  products?.length > 0 && products.map(product => total += (Number(product.quantity) * Number(product.price)))

  const removeFromCart = (id) => {
    dispatch(removeProduct(id))
  }

  const handleCloseCart = () => {
    dispatch(toggleShowCart())
  }

  const resetCart = () => {
    dispatch(emptyCart())
  }

  const getItemPriceQuantity = (quantity, price) => {
    return quantity * price
  }

  return (
    <div className="absolute bg-gray-50 shadow-2xl top-[66px] bottom-0 right-0 w-1/5 z-5">
      <div className="w-full px-6 py-5 h-full overflow-y-auto sticky">
        
        <CiCircleRemove onClick={handleCloseCart} className="absolute top-5 right-5 cursor-pointer" size={24} />
        
        { total > 0 && <h2 className="flex justify-center text-2xl font-medium">Cart Items</h2>}
        <div className="flex flex-col gap-3 mt-10 w-full">
          {
            products?.length === 0 
              ? ( <h1 className="noProducts">No products yet in the cart</h1>)
              : (
                products?.map(product => (
                  <div key={product.id} className="flex gap-4 relative w-full">
                    <Link to={`${route.product.productDetail.path}/${product.id}`}>
                      <img 
                        src={`http://localhost:5000/images/` + product?.mainImg.split('___').splice(1)}
                        className="rounded-sm w-52" 
                      />
                    </Link>
                    <div className="flex flex-col w-full">
                      <div className="flex flex-row justify-between items-center mt-1">
                        <span className="text-xl font-medium">Title</span>
                        <BsFillTrashFill size={20} className="text-red-600 hover:text-red-500 cursor-pointer" onClick={() => removeFromCart(product.id)} />
                      </div>

                      <div className="flex flex-row justify-between gap-3 w-full mt-1">
                        <span className="flex flex-row text-md mt-1">{product.quantity} x {product.price} €</span>
                        <span className="flex flex-row text-lg">{getItemPriceQuantity(product.quantity, product.price)} €</span>
                      </div>
                    </div>
                  </div>
                ))
              )
          }
        </div>
        { total > 0 && 
          <>
            <div className="flex flex-row justify-between mt-4 text-lg font-medium">
              <span>Subtotal</span>
              <span>{Number(total).toFixed(2)} €</span>
            </div> 
            <Link to={route.address.path} onClick={handleCloseCart} className="flex justify-center font-medium text-white px-4 py-2 rounded-md bg-cyan-600 my-5">Proceed to checkout</Link>
          </>
        }
        { total > 0 && (
          <div onClick={resetCart} className="resetCart">
            Reset Cart
          </div>
        )}
      </div>
    </div>
  )
}
