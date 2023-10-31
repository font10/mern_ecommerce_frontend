import { useDispatch, useSelector } from "react-redux"
import { useGetAddresesByUserQuery } from "../../services/addressesApi"
import { AddressItem } from "../../components"
import { CreateAddress, EditAddress } from "../../components/index"
import { isEditToFalse } from '../../redux/slices/addressSlice'

export const Address = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { isEdit } = useSelector(state => state.address)
  const { data: addresses } = useGetAddresesByUserQuery(user?._id, { 
    refetchOnMountOrArgChange: true,
    skip: false 
  })
  
  return (
    <main className="flex justify-center w-full items-center mx-auto">
      <section className="flex flex-col w-full">
        <section>
          <header className="flex flex-row justify-between items-center">
            <h2 className="text-xl font-medium font-roboto">Address and Details</h2>
            <button 
              className="px-6 py-2 font-medium bg-blue-500 hover:bg-blue-400 text-white rounded-md"
              onClick={() => dispatch(isEditToFalse())}            
            >Add Address</button>
          </header>
          <ul className="mt-6">
            {
              addresses?.addresses.map(address => (
                <AddressItem key={address._id} address={address} />
              ))
            }
          </ul>
          { isEdit
              ? <EditAddress />
              : <CreateAddress />
          }
        </section>
      </section>
    </main>
  )
}
