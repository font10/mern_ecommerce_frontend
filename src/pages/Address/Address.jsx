import { useState } from "react"
import { useDispatch } from "react-redux"
import { submitAddress } from '../../redux/slices/addressSlice'
import { useNavigate } from "react-router-dom"
import { route } from "../../models/route.model"

export const Address = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [inputs, setInputs] = useState({
    country: '',
    province: '',
    city: '',
    email: '',
    phoneNumber: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const isEmpty = Object.values(inputs).some(input => input === '')
    const isFilled = Object.values(inputs).length < 5

    if(isFilled || isEmpty) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2500);
    }

    dispatch(submitAddress(inputs))
    navigate(route.checkout.path)
  }

  const handleInputs = (e) => {
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })
  }

  return (
    <main className="flex justify-center w-2/12 items-center mx-auto">
      <section className="flex flex-col mt-10 w-full">
        <h2 className="text-xl font-medium">Address and Details</h2>
        <form onSubmit={handleSubmit} className="flex flex-col mt-8 mb-4">
          <input
            type='text'
            name='country'
            placeholder="Country" 
            className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
            onChange={handleInputs}           
          />
          <input
            type='text'
            name='province'
            placeholder="Province"
            className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
            onChange={handleInputs}
          />
          <input
            type='text'
            name='city'
            placeholder="City"
            className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
            onChange={handleInputs}
          />
          <input
            type='email'
            name='email'
            placeholder="Email"
            className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
            onChange={handleInputs}
          />
          <input
            type='tel'
            name='phoneNumber'
            placeholder="Phone Number"
            className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
            onChange={handleInputs}
          />
          <button className="flex justify-center font-medium text-white px-4 py-2 rounded-md bg-cyan-600 my-5">Save</button>
        </form>
        { error && <span className='errorMsg'>All fields must be populated</span> }
      </section>
    </main>
  )
}
