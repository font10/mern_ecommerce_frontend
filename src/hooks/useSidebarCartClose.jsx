import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCartToFalse } from "../redux/slices/cartSlice";

export const useSidebarCartClose = ( ref ) => {
  const dispatch = useDispatch()
  const { showCart } = useSelector(state => state.cart)
  const { showSidebar } = useSelector(state => state.productfilter)

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (showCart && !ref.current.contains(e.target)) {
        dispatch(showCartToFalse())
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [showCart, showSidebar])

  return { showCart }
}
