import PropTypes from "prop-types";
import { PaymentItem } from "./PaymentItem";

export const PaymentList = ({ payments }) => {
  return (
    <div>
      <li className="list-none">
        {
          payments?.map(payment => (
            <PaymentItem key={crypto.randomUUID()} payment={payment} />
          ))
        }
      </li>
    </div>
  )
}

PaymentList.propTypes = {
  payments: PropTypes.array.isRequired,
};