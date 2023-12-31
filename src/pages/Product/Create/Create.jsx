import { AiOutlineCloseCircle } from '../../../utils/icons'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { route } from '../../../models/route.model'
import { useNavigate } from 'react-router-dom'
import { categories, gender } from '../../../utils/constants'
import { useCreateProductMutation } from '../../../services/productApi'
import { Loading } from '../../../components/index'
import { uploadImages } from '../../../services/filesApi'

export const Create = () => {
  const navigate = useNavigate()
  const { token } = useSelector(state => state.auth)
  const [createProduct] = useCreateProductMutation()
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
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
      setShowModal(true)
      setIsLoading(true)
      setMessage('Uploading images, creating product...')
      let filesnames = []
      const files = inputs.images ? [...inputs.images] : [];
      
      const formData = new FormData()
      files.forEach((file) => {
        filesnames.push(crypto.randomUUID() + '___' + file.name)
        formData.append(`images`, file);
      });

      const data = await uploadImages(token, formData)
      
      const newProduct = {
        ...inputs,
        images: data.images,
      }
      await createProduct({ token, newProduct})
      
      setShowModal(false)
      setIsLoading(false)
      setMessage('')
      
      navigate(route.root.path)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <main className="flex justify-center sm:w-8/12 xl:w-4/12 mx-auto mt-10">
      <section className="flex flex-col p-10 shadow-xl rounded-sm w-full">
          { showModal && (
            <div className='bg-white shadow-xl rounded-md absolute top-[35%] left-[41%]'>
              <div className='h-64 w-96'>
                { isLoading && (
                  <div className='flex flex-col items-center'>
                    <Loading />
                    <p className='font-roboto font-medium text-xl'>{message}</p>
                  </div>
                )}
              </div>
            </div>
          )}
          <form onSubmit={handleCreateProduct} encType="multipart/form-data">            
            <article className='flex flex-col w-full'>
              <label className='font-medium text-gray-700'>Title</label>
              <input 
                type='text' 
                name='title'
                required
                className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
                placeholder="Title"
                onChange={(e) => { handleInputs(e) }}
              />
            </article>
            <article className='flex flex-col w-full'>
              <label className='font-medium text-gray-700'>Description</label>
              <textarea 
                type='text' 
                name='desc'
                required
                className="px-4 py-2 border-2 border-gray-200 block max-h-28 rounded-md px-5 mb-3"
                placeholder="Description"
                onChange={(e) => { handleInputs(e) }}
              />
            </article>            
            <article className='w-full'>
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
            </article>
            <article className='w-full mt-2'>
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
            </article>
            <article className='flex flex-col w-full mt-3'>
              <label className='font-medium text-gray-700'>Price</label>
              <input 
                type='price' 
                name='price' 
                required
                className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3"
                placeholder='29.99'
                onChange={(e) => { handleInputs(e) }}
              />
            </article>
            <article className='flex flex-col w-full'>
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
            </article>
            <article className='flex flex-row gap-3 mt-3'>
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
            </article>
            <button className='px-4 py-2 bg-blue-400 rounded-md text-white font-medium mt-6 w-full'>Save</button>
          </form>
      </section>
    </main>
  )
}
