import { useSelector } from "react-redux"
import { useGetOrdersByUserQuery } from "../../services/ordersApi"
import { OrdersList } from "../../components"

export const Orders = () => {
  const { user } = useSelector(state => state.auth)
  const { data: orders = [] } = useGetOrdersByUserQuery(user._id)
  
  return (
    <div className="w-full">
      <OrdersList orders={orders?.orders || []} />
    </div>
  )
}
