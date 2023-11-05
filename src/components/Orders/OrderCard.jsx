import PropTypes from "prop-types";
import { payments } from "../../utils/constants";
import { useDeleteOrderMutation } from "../../services/ordersApi";
import { useSelector } from "react-redux";

export const OrderCard = ({ order }) => {
  const { token } = useSelector(state => state.auth)
  const [deleteOrder] = useDeleteOrderMutation()
  const formatDate = (data) => { return new Date(data).toLocaleDateString() }

  const getIconPaymentMethod = (methodPayment) => {
    const res = payments.filter(item => item.name === methodPayment)
    return res[0].icon
  }

  const handleDelete = (id) => {
    deleteOrder({ id, token })
  }
  
  return (
    <section className="bg-white rounded-md w-full sm:w-[550px] lg:w-[900px]">
      <article className="border border-gray-200 rounded-md p-5">        
        <section className="flex flex-row gap-5">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-800">Pedido</label>
            <span className="text-sm mt-2">{formatDate(order?.createdAt)}</span>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-800">Payment Method</label>
            <img src={getIconPaymentMethod(order?.paymentMethod)} alt="icon payment" width={35} />
          </div>
          <div></div>
        </section>
        <hr className="my-2" />
        <section className="flex flex-col">
          {
            order?.products.map(product => (
              <article key={product?.secretId} className="flex flex-row justify-between items-start py-2">
                <section className="flex flex-row gap-5">
                  <img src={`http://localhost:5000/images/` + product?.mainImg.split('___').splice(1)} alt="pic order card" className="h-24 w-24 rounded-md object-cover" />
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
        </section>
      </article>
    </section>
  )
}

OrderCard.propTypes = {
  order: PropTypes.object.isRequired,
};

/*
<section className="bg-white w-full shadow-xl rounded-md hover:scale-105 ease-in-out transition duration-300 w-[360px]">
      <Link to={`${route.order.orderDetail.path}/${order._id}`} className="wrapper">
        <img src={`http://localhost:5000/images/` + order.images[0].split('___').splice(1)} alt="pic order card" className="firstimg h-64 w-full rounded-tl-md rounded-tr-md object-cover" />
        <article className="flex flex-col p-5">
          <h2 className="font-medium text-xl">{order.title}</h2>
          <div className="flex flex-row justify-between items-center text-sm">
            <span className="mt-2">{ Number(order.price).toFixed(2) } €</span>
            <figure className="flex flex-wrap items-center gap-1 mt-1">
              <figcaption className="mt-1">{order.stars} </figcaption>
              <img src={star} width={18} alt="star" />
            </figure>
          </div>
        </article>
      </Link>
    </section>
*/