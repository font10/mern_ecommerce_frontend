import { AiOutlineCloseCircle } from '../../../utils/icons'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { route } from '../../../models/route.model'
import { useNavigate } from 'react-router-dom'
import { categories, gender } from '../../../utils/constants'

export const Create = () => {
  const navigate = useNavigate()
  const { token } = useSelector(state => state.auth)
  const [inputs, setInputs] = useState({
    title: '',
    desc: '',
    images: [],
    price: 0,
    category: categories[0],
    gender: 'Male',
    starts: '1'
  })

  const onChangeFileFirst = (e) => {
    setInputs({ ...inputs, images: e.target.files })
  }

  const handleCloseImg = () => {
    setInputs({ ...inputs, images: [] })
  }

  const handleInputs = (e) => {
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })
  }
  const handleCreateProduct = async(e) => {
    e.preventDefault()
    
    try {
      let filesnames = []
      const files = inputs.images ? [...inputs.images] : [];
      
      const formData = new FormData()
      files.forEach((file) => {
        filesnames.push(crypto.randomUUID() + '___' + file.name)
        formData.append(`images`, file);
      });

      await axios.post(`http://localhost:5000/files/firstimg`, formData, { headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }})

      const newProduct = {
        ...inputs,
        images: filesnames,
      }      
      
      await axios.post(`http://localhost:5000/product`, newProduct, { headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }})
      navigate(route.root.path)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex justify-center w-4/12 mx-auto mt-10">
      <div className="flex flex-col p-10 shadow-xl rounded-sm w-full">
        
          <form onSubmit={handleCreateProduct} encType="multipart/form-data">            
            <div className='flex flex-col w-full'>
              <label className='font-medium text-gray-700'>Title</label>
              <input 
                type='text' 
                name='title'
                required
                className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
                placeholder="Title"
                onChange={(e) => { handleInputs(e) }}
              />
            </div>
            <div className='flex flex-col w-full'>
              <label className='font-medium text-gray-700'>Description</label>
              <textarea 
                type='text' 
                name='desc'
                required
                className="px-4 py-2 border-2 border-gray-200 block max-h-28 rounded-md px-5 mb-3"
                placeholder="Description"
                onChange={(e) => { handleInputs(e) }}
              />
            </div>            
            <div className='w-full'>
              <label className='font-medium text-gray-700'>Category</label>
              <select 
                name='category' 
                value={inputs.category} 
                className='w-full px-5 py-3 border-2 border-gray-200 rounded-md focus:outline-none px-3.5'
                onChange={(e) => handleInputs(e)}
              >
                {
                  categories.map((category) => (
                    <option key={crypto.randomUUID()} className='mr-4' value={category}>{category}</option>
                  ))
                }
              </select>
            </div>
            <div className='w-full mt-2'>
              <label className='font-medium text-gray-700'>Gender</label>
              <select 
                name='gender' 
                value={inputs.gender}
                className='w-full px-5 py-3 border-2 border-gray-200 rounded-md focus:outline-none px-3.5'
                onChange={(e) => handleInputs(e)}
              >
                {
                  gender.map((gender) => (
                    <option key={crypto.randomUUID()} value={gender}>{gender}</option>
                  ))
                }
              </select>
            </div>
            <div className='flex flex-col w-full mt-3'>
              <label className='font-medium text-gray-700'>Price</label>
              <input 
                type='price' 
                name='price' 
                required
                className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
                placeholder='29.99'
                onChange={(e) => { handleInputs(e) }}
              />
            </div>
            <div className='flex flex-col w-full'>
              <label className='font-medium text-gray-700'>Stars</label>
              <input 
                min={1}
                max={5}
                step={1}
                type='text' 
                name='stars'
                required
                className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
                placeholder="1 to 5..."
                onChange={(e) => { handleInputs(e) }}
              />
            </div>
            <div className='flex flex-row gap-3 mt-3'>
              <label className="labelFileInput" htmlFor="images"><span className='px-4 py-2 rounded-full bg-blue-400 text-white font-medium text-sm'>Upload here</span></label>
              <input 
                type='file' 
                name='images'
                id='images'
                required
                multiple="multiple"
                className="hidden input"
                placeholder="Images"
                onChange={onChangeFileFirst}
              />
              { inputs.images && <p className="flex flex-row items-center gap-3 font-medium text-gray-800">{inputs.images.length} files selected <AiOutlineCloseCircle onClick={handleCloseImg} className={`closeIcon cursor-pointer`} /></p> }
            </div>
            <button className='px-4 py-2 bg-blue-400 rounded-md text-white font-medium mt-6 w-full'>Save</button>
          </form>
      </div>
    </div>
  )
}
