import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addPaymentMethod } from "../../redux/slices/ordersSlice";

export const PaymentItem = ({ payment }) => {
  const dispatch = useDispatch()

  return (
    <div className="border-2 border-gray-200 px-5 py-2 rounded-md my-2">      
      <address className="flex flex-row gap-3 items-center justify-between">
        <section className="flex flex-row gap-5 items-center">
          <input defaultChecked={payment.active === true} id="radio_payments" type="radio" value="" name="radio_payments" 
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-none" 
            onClick={() => dispatch(addPaymentMethod(payment?.name)) }
          />
          <span className="font-roboto font-medium text-md text-gray-600">{payment?.name}</span>
        </section>
        <section>
          <img src={payment.icon} alt="icon" width={50} />
        </section>
      </address>
    </div>
  )
}

PaymentItem.propTypes = {
  payment: PropTypes.object.isRequired,
};
