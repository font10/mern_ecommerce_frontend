import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";

export const EditForm = ({ address, countries }) => {
  const { user, token } = useSelector(state => state.auth)
  const [firstName, setFirstName] = useState(address?.firstName)
  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(address)
    /*const firstName = e.target.elements.firstName.value.trim()
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
      firstName: address?.firstName, 
      lastName: address?.lastName, 
      streetAddressAndNumber: address?.streetAddressAndNumber, 
      additionalData: address?.additionalData, 
      phoneNumber: address?.phoneNumber,
      country: address?.country,
      city: address?.city,
      zipCode: address?.zipCode,
    }

    console.log(newAddress)*/
    //updateAddress({ token, newAddress })
  }

  const handleInputs = (e) => {
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full mt-8 mb-4">
        <fieldset className="border border border-blue-400 p-5 rounded-md px-7">
          <legend className="font-medium font-roboto px-2 text-gray-700">Edit Address</legend>
          
          <section className="flex flex-row gap-5 items-center w-full">
            <label htmlFor="firstName" className="w-full">
              <span className="text-sm font-medium text-gray-600">First name</span>
              <input
                type='text'
                name='firstName'
                value={firstName}
                placeholder="First Name" 
                className="px-4 py-2 border border-gray-200 w-full rounded-md mb-3"           
                onChange={(e) => setFirstName(e.target.value)}
                
                />
            </label>
            <label htmlFor="lastName" className="w-full">
              <span className="text-sm font-medium text-gray-600">Last name</span>
              <input
                type='text'
                name='lastName'
                value={address.lastName}
                placeholder="Last Name"
                className="px-4 py-2 border border-gray-200 w-full rounded-md px-5 mb-3"
              
              
              />
            </label>           
          </section>
          <section className="flex flex-row gap-5 items-center w-full ">
            <label htmlFor="streetAddressAndNumber" className=" flex flex-col w-full">
              <span className="text-sm font-medium text-gray-600">Street Address and Number</span>
              <input
                type='text'
                name='streetAddressAndNumber'
                value={address.streetAddressAndNumber}
                placeholder="Street Address And Number"
                className="px-4 py-2 border border-gray-200 rounded-md px-5"
              
              
              />
              <small className="text-gray-500 text-xs mt-1 ml-1">Ex. 936 5th Ave, New York</small>
            </label>
            <label htmlFor="additionalData" className=" flex flex-col w-full">
              <span className="text-sm font-medium text-gray-600">Additional data</span>
              <input
                type='text'
                name='additionalData'
                value={address.additionalData}
                placeholder="Additional data(flat, door...)"
                className="px-4 py-2 border border-gray-200 rounded-md px-5"
                
                
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
                value={address.phoneNumber}
                name='phoneNumber'
                maxLength={9}
                className="py-2 border border-gray-200 px-5 rounded-md focus:outline-none"
                
                
              />
            </label>
            <label htmlFor="city" className=" flex flex-col w-full">
              <span className="text-sm font-medium text-gray-600">Country</span>
              <select 
                name='country' 
                value={address.country} 
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
                value={address.city}
                placeholder="New York"
                className="px-4 py-2 border border-gray-200 rounded-md px-5 focus:outline-none"
                
                
              />
            </label>
            <label htmlFor="zipCode" className=" flex flex-col w-full">
              <span className="text-sm font-medium text-gray-600">Zip Code</span>
              <input
                type='text'
                name='zipCode'
                value={address.zipCode}
                pattern="[0-9]{5}"
                placeholder="17384"
                className="px-4 py-2 border border-gray-200 rounded-md px-5 focus:outline-none"
                
              />
            </label> 
          </section>
          <button className="flex justify-center font-medium text-white px-6 py-2 rounded-md bg-blue-500 my-5">Update</button>
        </fieldset>
      </form>
  )
}

EditForm.propTypes = {
  address: PropTypes.object.isRequired,
  countries: PropTypes.object.isRequired,
};