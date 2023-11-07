import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { route } from '../../../models/route.model'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../../../redux/slices/authSlice'
import { useSignUpMutation } from '../../../services/authApi'

export const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthdate: ''
  })
  const [signUp, { isError, error }] = useSignUpMutation()

  const handleInputs = (e) => {
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })
  }

  const handleLogin = async(e) => {
    e.preventDefault()

    try {
      //const { data, status } = await axios.post(`http://localhost:5000/auth/signup`, inputs)
      const infoSignUp = inputs 
      const { data } = await signUp(infoSignUp)
      dispatch(register(data))
      navigate( route.login.path)      
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <main className="absolute flex flex-row justify-center top-0 right-0 mx-auto w-full h-full z-10 items-center bg-cyan-800">
      <section className="flex flex-col w-4/12 p-10 bg-white shadow-xl rounded-md w-4/12">
        <h2 className='font-medium font-roboto text-2xl text-black'>Sign Up</h2>

        {
          isError &&
          <p className='w-full h-10 rounded-md border border-red-300 text-red-400 bg-red-200 flex justify-center items-center font-medium mt-5'>
            { error }
          </p>
        }

        <form onSubmit={handleLogin}>
          <article className='flex flex-col w-full mt-5'>
            <label className='font-roboto font-medium text-[15px]'>Username</label>
            <input 
              type='text' 
              name='username' 
              className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
              placeholder='Username'
              onChange={(e) => { handleInputs(e) }}
            />
          </article>
          <article className='flex flex-col w-full'>
            <label className='font-roboto font-medium text-[15px]'>Email</label>
            <input 
              type='email' 
              name='email' 
              className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
              placeholder='Email'
              onChange={(e) => { handleInputs(e) }}
            />
          </article>
          <article className='flex flex-col w-full'>
            <label className='font-roboto font-medium text-[15px]'>Password</label>
            <input 
              type='password' 
              name='password' 
              className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
              placeholder='Password'
              onChange={(e) => { handleInputs(e) }}
            />
          </article>
          <button className='px-4 py-2 bg-cyan-500 rounded-md text-white font-medium mt-5 w-full '>Sign Up</button>
        </form>

        <p className='flex justify-center mt-8 font-regular gap-2'>
          Already have an account? <Link to={route.login.path} className='text-cyan-500 font-medium'>Sign In!</Link>
        </p>
        
      </section>
    </main>
  )
}
