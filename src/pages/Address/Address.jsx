import { useDispatch, useSelector } from "react-redux"
import { useGetAddresesByUserQuery } from "../../services/addressesApi"
import { AddressList } from "../../components"
import { CreateAddress, EditAddress } from "../../components/index"
import { idToEdit, modalFormToTrue } from '../../redux/slices/addressSlice'
import { ModalForm } from "../../components/ModalForm/ModalForm"

export const Address = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { idEdit, modalForm } = useSelector(state => state.address)
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
              onClick={() => { dispatch(idToEdit('')); dispatch(modalFormToTrue()) } }            
            >Add Address</button>
          </header>
          <ul className="mt-6">
            <AddressList addresses={addresses} />
          </ul>
          { modalForm && ( idEdit.length > 0 
              ? <ModalForm><EditAddress /></ModalForm>
              : <ModalForm><CreateAddress /></ModalForm>
          )
          }
        </section>
      </section>
    </main>
  )
}
