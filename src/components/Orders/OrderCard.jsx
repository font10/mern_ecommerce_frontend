import PropTypes from "prop-types";
import { payments } from "../../utils/constants";
import { OrderCardItem } from "./OrderCardItem";

export const OrderCard = ({ order }) => {
  console.log(order)
  const formatDate = (data) => { return new Date(data).toLocaleDateString() }

  const getIconPaymentMethod = (methodPayment) => {
    const res = payments.filter(item => item.name === methodPayment)
    return res[0].icon
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
          <OrderCardItem order={order} />
        </section>
      </article>
    </section>
  )
}

OrderCard.propTypes = {
  order: PropTypes.object.isRequired,
};
