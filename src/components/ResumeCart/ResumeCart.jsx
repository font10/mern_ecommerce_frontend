import { useDispatch, useSelector } from "react-redux"
import { ResumeCartItem } from "./ResumeCartItem"
import { addProducts, addUserId, resetOrderToAdd } from "../../redux/slices/ordersSlice"
import { useCreateOrderMutation } from "../../services/ordersApi"
import { useNavigate } from "react-router-dom"
import { route } from "../../models/route.model"

export const ResumeCart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products, total } = useSelector(state => state.cart)
  const { user, token } = useSelector(state => state.auth)
  const { orderToAdd } = useSelector(state => state.orders)
  const [createOrder] = useCreateOrderMutation()

  const handleCheckout = () => {
    dispatch(addProducts(products))
    dispatch(addUserId(user._id))

    createOrder({token, orderToAdd})
    dispatch(resetOrderToAdd())
    navigate(route.profile.path)
  }

  return (
    <aside className="border border-gray-200">
      <section className="w-full px-6 py-5 h-full overflow-y-auto">        
        
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
