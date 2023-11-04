import { useDispatch, useSelector } from "react-redux"
import { useUpdateUserMutation } from "../../services/userApi"
import { changeInfoUser } from "../../redux/slices/authSlice"

export const ProfileChangePersonalInfo = () => {
  const dispatch = useDispatch()
  const { user, token } = useSelector(state => state.auth)
  const [updateUser] = useUpdateUserMutation()

  const handleSubmit = (e) => {
    e.preventDefault()

    const firstName = e.target.elements.firstName.value.trim()
    const lastName = e.target.elements.lastName.value.trim()
    const username = e.target.elements.username.value.trim()
    const birthdate = e.target.elements.birthdate.value.trim()
    
    const newUserInfo = {
      firstName,
      lastName,
      username,
      birthdate,
      id: user._id
    }

    dispatch(changeInfoUser(newUserInfo))
    updateUser({ token, newUserInfo })
  }


  return (
    <section>
      <form onSubmit={handleSubmit} className="flex flex-col w-full mt-5 mb-4">
        <fieldset className="border border border-blue-400 p-5 rounded-md px-7">
          <legend className="font-medium font-roboto px-2 text-gray-700">Personal Info</legend>
          <section className="flex flex-col lg:flex-row gap-5 items-center w-full">
            <label htmlFor="firstName" className="w-full">
              <span className="text-sm font-medium text-gray-600">First name</span>
              <input
                type='text'
                name='firstName'
                defaultValue={user?.firstName}
                placeholder="First Name" 
                className="px-4 py-2 border border-gray-200 w-full rounded-md mb-3"           
                />
            </label>
            <label htmlFor="lastName" className="w-full">
              <span className="text-sm font-medium text-gray-600">Last name</span>
              <input
                type='text'
                name='lastName'
                defaultValue={user?.lastName}
                placeholder="Last Name"
                className="px-4 py-2 border border-gray-200 w-full rounded-md px-5 mb-3"
              />
            </label>           
          </section>
          <section className="flex flex-col lg:flex-row gap-5 items-center w-full ">
            <label htmlFor="streetAddressAndNumber" className=" flex flex-col w-full">
              <span className="text-sm font-medium text-gray-600">Username</span>
              <input
                type='text'
                name='username'
                defaultValue={user?.username}
                placeholder="Username"
                className="px-4 py-2 border border-gray-200 rounded-md px-5"
              />
            </label>
            <label htmlFor="additionalData" className=" flex flex-col w-full">
              <span className="text-sm font-medium text-gray-600">Birthdate</span>
              <input 
                type="date" 
                name="birthdate"
                defaultValue={user?.birthdate}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 p-2.5" 
                placeholder="Select Birthday"
              />
            </label> 
          </section>        
          <button className="flex justify-center font-medium text-white px-6 py-2 rounded-md bg-blue-500 my-5">Update</button>
        </fieldset>
      </form>
    </section>
  )
}
