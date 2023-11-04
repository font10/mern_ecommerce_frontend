import PropTypes from "prop-types";
import { AddressItem } from "./AddressItem";

export const AddressList = ({ addresses }) => {
  return (
    <div>
      <li>
        {
          addresses?.addresses.map(address => (
            <AddressItem key={crypto.randomUUID()} address={address} />
          ))
        }
      </li>
    </div>
  )
}

AddressList.propTypes = {
  addresses: PropTypes.object.isRequired,
};