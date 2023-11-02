
export const ProfileUserForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section>
      <section>
        <form onSubmit={handleSubmit} className="flex flex-col w-full mt-5 mb-4">
          <fieldset className="border border border-blue-400 p-5 rounded-md px-7">
            <legend className="font-medium font-roboto px-2 text-gray-700">Personal Info</legend>
            <section className="flex flex-row gap-5 items-center w-full">
              <label htmlFor="firstName" className="w-full">
                <span className="text-sm font-medium text-gray-600">First name</span>
                <input
                  type='text'
                  name='firstName'
                  placeholder="First Name" 
                  className="px-4 py-2 border border-gray-200 w-full rounded-md mb-3"           
                  />
              </label>
              <label htmlFor="lastName" className="w-full">
                <span className="text-sm font-medium text-gray-600">Last name</span>
                <input
                  type='text'
                  name='lastName'
                  placeholder="Last Name"
                  className="px-4 py-2 border border-gray-200 w-full rounded-md px-5 mb-3"
                />
              </label>           
            </section>
            <section className="flex flex-row gap-5 items-center w-full ">
              <label htmlFor="streetAddressAndNumber" className=" flex flex-col w-full">
                <span className="text-sm font-medium text-gray-600">Email</span>
                <input
                  type='text'
                  name='email'
                  placeholder="Email"
                  disabled
                  className="px-4 py-2 border border-gray-200 rounded-md px-5"
                />
              </label>
              <label htmlFor="additionalData" className=" flex flex-col w-full">
                <span className="text-sm font-medium text-gray-600">Additional data</span>
                <input
                  type='text'
                  name='additionalData'
                  placeholder="Additional data(flat, door...)"
                  className="px-4 py-2 border border-gray-200 rounded-md px-5"
                />
              </label> 
            </section>
          
            <button className="flex justify-center font-medium text-white px-6 py-2 rounded-md bg-blue-500 my-5">Add</button>
          </fieldset>
        </form>
      </section>

      <section>
        <form onSubmit={handleSubmit} className="flex flex-col w-full mt-8 mb-4">
          <fieldset className="border border border-blue-400 p-5 rounded-md px-7">
            <legend className="font-medium font-roboto px-2 text-gray-700">Change password</legend>        

            <section className="flex flex-row gap-5 items-center mt-3 w-full ">
              <label htmlFor="city" className=" flex flex-col w-full">
                <span className="text-sm font-medium text-gray-600">Password</span>
                <input
                  type='password'
                  name='password'
                  placeholder="Password"
                  className="px-4 py-2 border border-gray-200 rounded-md px-5 focus:outline-none"
                />
              </label>
              <label htmlFor="zipCode" className=" flex flex-col w-full">
                <span className="text-sm font-medium text-gray-600">Confirm password</span>
                <input
                  type='password'
                  name='confirmPassword'
                  pattern="[0-9]{5}"
                  placeholder="Confirm password"
                  className="px-4 py-2 border border-gray-200 rounded-md px-5 focus:outline-none"
                />
              </label> 
            </section>
          
            <button className="flex justify-center font-medium text-white px-6 py-2 rounded-md bg-blue-500 my-5">Add</button>
          </fieldset>
        </form>
      </section>
    </section>
  )
}
