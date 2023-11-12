import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useDeleteOrderMutation } from "../../services/ordersApi";

export const OrderCardItem = ({ order }) => {
  const [deleteOrder] = useDeleteOrderMutation()
  const { token } = useSelector(state => state.auth)
  const handleDelete = (id) => {
    deleteOrder({ id, token })
  }
  console.log(order)
  return (
    <div>
      {
        order?.products.map(product => (
          <article key={product?.secretId} className="flex flex-row justify-between items-start py-2">
            <section className="flex flex-row gap-5">
              <img src={product?.mainImg} alt="pic order card" className="h-24 w-24 rounded-md object-cover" />
              <div>
                <p className="font-roboto font-medium text-lg">{product?.title}</p>
                <p className="font-roboto font-medium text-[15px] text-gray-600">{product?.price} €</p>
                <figcaption className="rounded-full bg-gray-400 px-3 py-1 mt-2 w-24 flex justify-center font-roboto text-white text-sm font-medium">{product?.quantity} x {product?.size}</figcaption>
              </div>
            </section>
            <button className="font-roboto font-medium text-md text-blue-500 hover:text-blue-400 cursor-pointer" onClick={() => handleDelete(order._id)}>Delete</button>
          </article>
        ))
      }
    </div>
  )
}

OrderCardItem.propTypes = {
  order: PropTypes.object.isRequired,
};