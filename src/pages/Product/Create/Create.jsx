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
    firstImg: '',
    secondImg: '',
    price: 0,
    starts: '1'
  })

  const onChangeFileFirst = (e) => {
    setInputs({ ...inputs, firstImg: e.target.files[0] })
  }

  const onChangeFileSecond = (e) => {
    setInputs({ ...inputs, secondImg: e.target.files[0] })
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
      const formData1 = new FormData()
      const formData2 = new FormData()

      let filename1 = null
      let filename2 = null

      if(inputs.firstImg && inputs.secondImg) {
        filename1 = crypto.randomUUID() + '___' + inputs.firstImg.name
        filename2 = crypto.randomUUID() + '___' + inputs.secondImg.name

        formData1.append('filename', filename1)
        formData1.append('image', inputs.firstImg)

        formData2.append('filename', filename2)
        formData2.append('image', inputs.secondImg)

        await axios.post(`http://localhost:5000/files/firstimg`, formData1, { headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }})
        await axios.post(`http://localhost:5000/files/secondimg`, formData2, { headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }})
      }
      
      const newProduct = {
        ...inputs,
        firstImg: filename1,
        secondImg: filename2
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
            <div className='inputWrapper mt-2'>
              <label className="labelFileInput" htmlFor="firstImg">First Image: <span className='px-4 py-2 rounded-full bg-blue-400 text-white font-medium text-sm'>Upload here</span></label>
              <input 
                type='file' 
                name='firstImg'
                id='firstImg'
                className="hidden input"
                placeholder="firstImg"
                onChange={onChangeFileFirst}
              />
              { inputs.firstImg && <p className="imageName">{inputs.firstImg.name} <AiOutlineCloseCircle onClick={() => handleCloseImg('first')} className={`closeIcon cursor-pointer`} /></p> }
            </div>
            <div className='inputWrapper mt-4'>
              <label className="labelFileInput" htmlFor="secondImg">Second Image: <span className='px-4 py-2 rounded-full bg-blue-400 text-white font-medium text-sm'>Upload here</span></label>
              <input 
                type='file' 
                name='secondImg'
                id='secondImg'
                className="hidden input"
                placeholder="secondImg"
                onChange={onChangeFileSecond}
              />
              { inputs.secondImg && <p className="imageName">{inputs.secondImg.name} <AiOutlineCloseCircle onClick={() => handleCloseImg('second')} className={`closeIcon cursor-pointer`} /></p> }
            </div>
            <button className='px-4 py-2 bg-blue-400 rounded-md text-white font-medium mt-5 w-full '>Save</button>
          </form>
        </h2>
      </div>
    </div>
  )
}
