import { AiOutlineCloseCircle } from '../../../utils/icons'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { route } from '../../../models/route.model'
import { useNavigate } from 'react-router-dom'

export const Create = () => {
  const navigate = useNavigate()
  const { token } = useSelector(state => state.auth)
  const [inputs, setInputs] = useState({
    title: '',
    desc: '',
    images: [],
    price: 0,
    starts: '1'
  })

  const onChangeFileFirst = (e) => {
    console.log(e.target.files)
    setInputs({ ...inputs, images: e.target.files })
  }

  const handleCloseImg = (numberImg) => {
    if(numberImg === 'first') setInputs({ ...inputs, firstImg: '' })
    else setInputs({ ...inputs, secondImg: '' })
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

      for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
      }

      await axios.post(`http://localhost:5000/files/firstimg`, formData, { headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }})

      const newProduct = {
        ...inputs,
        images: filesnames,
      }

      console.log(newProduct)
      
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
        <h2 className="title">
          <form onSubmit={handleCreateProduct} encType="multipart/form-data">            
            <div className='flex flex-col w-full'>
              <label>Title:</label>
              <input 
                type='text' 
                name='title' 
                className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
                placeholder="Title"
                onChange={(e) => { handleInputs(e) }}
              />
            </div>
            <div className='flex flex-col w-full'>
              <label>Description:</label>
              <input 
                type='text' 
                name='desc' 
                className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
                placeholder="Description"
                onChange={(e) => { handleInputs(e) }}
              />
            </div>
            <div className='flex flex-col w-full'>
              <label>Price:</label>
              <input 
                type='price' 
                name='price' 
                className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
                placeholder='Price'
                onChange={(e) => { handleInputs(e) }}
              />
            </div>
            <div className='flex flex-col w-full'>
              <label>Stars:</label>
              <input 
                min={1}
                max={5}
                step={1}
                type='text' 
                name='stars' 
                className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
                placeholder="Stars"
                onChange={(e) => { handleInputs(e) }}
              />
            </div>
            <div className='mt-2'>
              <label className="labelFileInput" htmlFor="images">First Image: <span className='px-4 py-2 rounded-full bg-blue-400 text-white font-medium text-sm'>Upload here</span></label>
              <input 
                type='file' 
                name='images'
                id='images'
                multiple="multiple"
                className="hidden input"
                placeholder="Images"
                onChange={onChangeFileFirst}
              />
              { inputs.firstImg && <p className="imageName">{inputs.firstImg.name} <AiOutlineCloseCircle onClick={() => handleCloseImg('first')} className={`closeIcon cursor-pointer`} /></p> }
            </div>
            <button className='px-4 py-2 bg-blue-400 rounded-md text-white font-medium mt-5 w-full '>Save</button>
          </form>
        </h2>
      </div>
    </div>
  )
}
