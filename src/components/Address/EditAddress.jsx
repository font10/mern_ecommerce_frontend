import { useState } from "react"
import { useSelector } from "react-redux"
import { useGetCountriesQuery } from "../../services/externalApi"
import { useEditAddressMutation } from "../../services/addressesApi"

export const EditAddress = () => {
  const { user, token } = useSelector(state => state.auth)
  const { address } = useSelector(state => state.address)
  const { data: countries, isError, isLoading, error } = useGetCountriesQuery()
  const [ updateAddress ] = useEditAddressMutation()
  const [inputs, setInputs] = useState(address)

  if(isLoading) return <div>Loading...</div>
  else if(isError) return <div>Error: {error}</div>

  const handleSubmit = (e) => {
    e.preventDefault()
    const firstName = e.target.elements.firstName.value.trim()
    const lastName = e.target.elements.lastName.value.trim()
    const streetAddressAndNumber = e.target.elements.streetAddressAndNumber.value.trim()
    const additionalData = e.target.elements.additionalData.value.trim()
    const phoneNumber = e.target.elements.phoneNumber.value.trim()
    const country = e.target.elements.country.value.trim()
    const city = e.target.elements.city.value.trim()
    const zipCode = e.target.elements.zipCode.value.trim()

    const newAddress = {
      _id: address?._id,
      userId: user?._id,
      firstName, 
      lastName, 
      streetAddressAndNumber, 
      additionalData, 
      phoneNumber, 
      country, 
      city, 
      zipCode, 
    }

    console.log(newAddress._id)
    updateAddress({ token, newAddress })
  }

  const handleInputs = (e) => {
    const { name, value } = e.target
    setInputs({...inputs, [name]: value })
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="flex flex-col w-full mt-8 mb-4">
        <fieldset className="border border border-blue-400 p-5 rounded-md px-7">
          <legend className="font-medium font-roboto px-2 text-gray-700">Edit Address</legend>
          <section className="flex flex-row gap-5 items-center w-full">
            <label htmlFor="firstName" className="w-full">
              <span className="text-sm font-medium text-gray-600">First name</span>
              <input
                type='text'
                name='firstName'
                value={inputs.firstName}
                placeholder="First Name" 
                className="px-4 py-2 border border-gray-200 w-full rounded-md mb-3"           
                onChange={handleInputs}
                />
            </label>
            <label htmlFor="lastName" className="w-full">
              <span className="text-sm font-medium text-gray-600">Last name</span>
              <input
                type='text'
                name='lastName'
                value={inputs.lastName}
                placeholder="Last Name"
                className="px-4 py-2 border border-gray-200 w-full rounded-md px-5 mb-3"
              onChange={handleInputs}
              />
            </label>           
          </section>
          <section className="flex flex-row gap-5 items-center w-full ">
            <label htmlFor="streetAddressAndNumber" className=" flex flex-col w-full">
              <span className="text-sm font-medium text-gray-600">Street Address and Number</span>
              <input
                type='text'
                name='streetAddressAndNumber'
                value={inputs.streetAddressAndNumber}
                placeholder="Street Address And Number"
                className="px-4 py-2 border border-gray-200 rounded-md px-5"
              onChange={handleInputs}
              />
              <small className="text-gray-500 text-xs mt-1 ml-1">Ex. 936 5th Ave, New York</small>
            </label>
            <label htmlFor="additionalData" className=" flex flex-col w-full">
              <span className="text-sm font-medium text-gray-600">Additional data</span>
              <input
                type='text'
                name='additionalData'
                value={inputs.additionalData}
                placeholder="Additional data(flat, door...)"
                className="px-4 py-2 border border-gray-200 rounded-md px-5"
              onChange={handleInputs}
              />
              <small className="text-gray-500 text-xs mt-1 ml-1">Ex. Flat 4, Door 2</small>
            </label> 
          </section>

          <section className="flex flex-row gap-5 items-center mt-3 w-full ">
            <label htmlFor="phoneNumber" className=" flex flex-col w-full">
              <span className="text-sm font-medium text-gray-600">Phone Number</span>
              <input
                type="tel"
                placeholder="656898542"
                value={inputs.phoneNumber}
                name='phoneNumber'
                maxLength={9}
                className="py-2 border border-gray-200 px-5 rounded-md focus:outline-none"
              onChange={handleInputs}
              />
            </label>
            <label htmlFor="city" className=" flex flex-col w-full">
              <span className="text-sm font-medium text-gray-600">Country</span>
              <select 
                name='country' 
                value={inputs.country} 
                className='py-2 border border-gray-200 px-5 rounded-md w-full focus:outline-none'
              >
                {
                  countries.data.map((country) => (
                    <option key={crypto.randomUUID()} value={country.country}>{country.country}</option>
                  ))
                }
              </select>
            </label>
          </section>
          <section className="flex flex-row gap-5 items-center mt-3 w-full ">
            <label htmlFor="city" className=" flex flex-col w-full">
              <span className="text-sm font-medium text-gray-600">City</span>
              <input
                type='text'
                name='city'
                value={inputs.city}
                placeholder="New York"
                className="px-4 py-2 border border-gray-200 rounded-md px-5 focus:outline-none"
              onChange={handleInputs}
              />
            </label>
            <label htmlFor="zipCode" className=" flex flex-col w-full">
              <span className="text-sm font-medium text-gray-600">Zip Code</span>
              <input
                type='text'
                name='zipCode'
                value={inputs.zipCode}
                pattern="[0-9]{5}"
                placeholder="17384"
                className="px-4 py-2 border border-gray-200 rounded-md px-5 focus:outline-none"
              onChange={handleInputs}
              />
            </label> 
          </section>
         
          <button className="flex justify-center font-medium text-white px-6 py-2 rounded-md bg-blue-500 my-5">Update</button>
        </fieldset>
      </form>
      
    </section>
  )
}
