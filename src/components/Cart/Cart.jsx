import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { route } from "../../models/route.model"
import { CiCircleRemove } from '../../utils/icons'
import { toggleShowCart } from "../../redux/slices/cartSlice"
import { CartItem } from "../index"
import { useRef } from "react"
import { useSidebarCartClose } from "../../hooks/useSidebarCartClose"

export const Cart = () => {
  const { products, total } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const ref = useRef()
  useSidebarCartClose(ref)

  const handleCloseCart = () => dispatch(toggleShowCart())

  return (
    <aside ref={ref} className="block fixed bg-gray-50 shadow-2xl top-0 h-screen right-0 w-8/12 md:w-5/12 xl:w-3/12 z-20" >
      <section className="w-full px-6 py-5 h-full">
        
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
                  <CartItem key={product.id} product={product} />
                ))
              )
          }
        </section>
        
        <section>
          <div className="flex flex-row justify-between mt-4 text-lg font-medium">
            <h3>Total</h3>
            <p>{Number(total).toFixed(2)} €</p>
          </div> 
          <Link to={route.checkout.path} onClick={handleCloseCart} className="flex justify-center font-medium text-white px-4 py-2 rounded-md bg-cyan-600 my-5">Proceed to checkout</Link>
        </section>      
        
      </section>
    </aside>
  )
}
