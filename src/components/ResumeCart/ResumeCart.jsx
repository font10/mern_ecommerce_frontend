import { useDispatch, useSelector } from "react-redux"
import { CiCircleRemove } from '../../utils/icons'
import { toggleShowCart } from "../../redux/slices/cartSlice"
import { ResumeCartItem } from "./ResumeCartItem"
import { addProducts, addUserId } from "../../redux/slices/ordersSlice"
import { useCreateOrderMutation } from "../../services/ordersApi"

export const ResumeCart = () => {
  const dispatch = useDispatch()
  const { products, total } = useSelector(state => state.cart)
  const { user, token } = useSelector(state => state.auth)
  const { orderToAdd } = useSelector(state => state.orders)
  const [createOrder] = useCreateOrderMutation()

  const handleCloseCart = () => dispatch(toggleShowCart())

  const handleCheckout = () => {
    dispatch(addProducts(products))
    dispatch(addUserId(user._id))
    console.log(orderToAdd)

    createOrder({token, orderToAdd})
  }

  return (
    <aside>
      <section className="w-full px-6 py-5 h-full overflow-y-auto">
        
        <CiCircleRemove onClick={handleCloseCart} className="absolute top-5 right-5 cursor-pointer" size={24} />
        
        <header>
          <h2 className="flex justify-center text-2xl font-medium">Cart Items</h2>
        </header>
        <section className="flex flex-col gap-3 mt-10 w-full">
          {
            products?.length === 0 
              ? ( <h1 className="font-medium text-lg">No products yet in the cart</h1>)
              : (
                products?.map(product => (
                  <ResumeCartItem key={crypto.randomUUID()} product={product} />
                ))
              )
          }
        </section>
        
        <section>
          <div className="flex flex-row justify-between mt-4 text-lg font-medium">
            <h3>Total</h3>
            <p>{Number(total).toFixed(2)} €</p>
          </div> 
          <button onClick={handleCheckout} className="flex justify-center font-medium text-white px-4 py-2 rounded-md bg-cyan-600 my-5">Proceed to checkout</button>
        </section>      
        
      </section>
    </aside>
  )
}
