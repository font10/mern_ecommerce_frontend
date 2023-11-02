import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteAddressMutation } from "../../services/addressesApi";
import { idToEdit, modalFormToTrue } from '../../redux/slices/addressSlice'

export const AddressItem = ({ address }) => {
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.auth)
  const [deleteAddress] = useDeleteAddressMutation()

  return (
    <div className="border-2 border-gray-200 p-5 rounded-md my-2">      
      <address className="flex flex-row gap-3 items-center justify-between">
        <section className="flex flex-row gap-5 items-center">
          <input defaultChecked={address.addressDefault === true} id="default-radio-2" type="radio" value="" name="default-radio" 
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-none" 
          />
          <span className="font-roboto font-medium text-xl text-gray-600">{address.firstName} {address.lastName}</span>
          <span className="font-roboto text-md text-gray-400 ml-2">{address.streetAddressAndNumber}</span>
        </section>
        <section className="flex flex-row gap-3 items-center">
          <span className="font-roboto font-medium text-md text-blue-400 cursor-pointer" onClick={() => { dispatch(idToEdit(address._id)); dispatch(modalFormToTrue()) }}>Edit</span> 
          <span className="font-roboto font-medium text-md text-blue-400 cursor-pointer" onClick={() => deleteAddress({ token, id: address._id })}>Delete</span>
        </section>
      </address>
    </div>
  )
}

AddressItem.propTypes = {
  address: PropTypes.object.isRequired,
};
