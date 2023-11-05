import { useSelector } from "react-redux"
import { useChangePasswordMutation } from "../../services/userApi"
import { useState } from "react"

export const ProfileChangePasswordForm = () => {
  const [pwdEqual, setPwdEqual] = useState(true)
  const [pwdMsg, setPwdMsg] = useState('')
  const { user, token } = useSelector(state => state.auth)
  const [changePassword] = useChangePasswordMutation()

  const handleSubmit = (e) => {
    e.preventDefault()
    const password = e.target.elements.password.value.trim()
    const confirmPassword = e.target.elements.confirmPassword.value.trim()

    if(password !== confirmPassword) { setPwdMsg('Different passwords'); setPwdEqual(false) }
    else { setPwdMsg(''); setPwdEqual(true) }

    const userInfo = { id: user._id, password }
    
    
    changePassword({ token, userInfo })
    e.target.elements.password.value = ''
    e.target.elements.confirmPassword.value = ''
  }


  return (
    <section>
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full mt-8 mb-4">
          <fieldset className="border border border-blue-400 p-5 rounded-md px-7 w-full">
            <legend className="font-medium font-roboto px-2 text-gray-700">Change password</legend>        

            <section className="flex flex-col md:flex-row gap-5 items-center mt-3 w-full ">
              <label htmlFor="city" className=" flex flex-col w-full">
                <span className="text-sm font-medium text-gray-600">New password</span>
                <input
                  type='password'
                  name='password'
                  placeholder="New password"
                  minLength={6}
                  className={`px-4 py-2 ${pwdEqual === false ? 'border border-red-200' : 'border border-gray-200' } rounded-md px-5 focus:outline-none`}
                />                
                { !pwdEqual && <small className="text-xs text-red-500">{pwdMsg}</small> }
              </label>
              <label htmlFor="zipCode" className=" flex flex-col w-full">
                <span className="text-sm font-medium text-gray-600">Confirm password</span>
                <input
                  type='password'
                  name='confirmPassword'
                  placeholder="Confirm password"
                  minLength={6}
                  className={`px-4 py-2 ${pwdEqual === false ? 'border border-red-200' : 'border border-gray-200' } rounded-md px-5 focus:outline-none`}
                />
                { !pwdEqual && <small className="text-xs text-red-500">{pwdMsg}</small> }
              </label>
            </section>
          
            <button className="flex justify-center font-medium text-white px-6 py-2 rounded-md bg-blue-500 my-5">Add</button>
          </fieldset>
        </form>
      </section>
  )
}
