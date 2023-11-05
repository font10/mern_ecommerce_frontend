import PropTypes from "prop-types";
import { NoOrders, OrderCard } from "../index";

export const OrdersList = ( orders ) => {
  
  return (
    <section className="flex flex-col justify-center items-center mt-5 w-full">
      <article className="flex flex-col gap-5 mt-10">
        { 
          orders?.orders?.length === 0
            ? ( <NoOrders /> )
            : orders?.orders?.map(order => (
              <OrderCard key={order._id} order={order} />
            ))          
        }
      </article>
    </section>
  ) 
}

OrdersList.propTypes = {
  orders: PropTypes.array.isRequired,
};