import { useEffect, useState } from 'react'
import { IoIosArrowDown } from '../../utils/icons'
import { List } from '../List/List'
import axios from 'axios'
import { ModalFilter } from '../ModalFilter/ModalFilter'
import { categories, filterMenus, size, rangePrice, rangeStars } from '../../utils/constants'

export const ProductsFilter = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [modalFilter, setModalFilter] = useState({
    category: false,
    price: false,
    size: false,
    stars: false
  })

  const fetchProducts = async() => {
    try {
      const { data, status } = await axios.get(`http://localhost:5000/product`)
      console.log(data.products)
      
      if(status === 200) setProducts(data.products)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleModal = (menuName) => {
    if(menuName === 'Category') setModalFilter({...modalFilter , category: !modalFilter.category})
    if(menuName === 'Price') setModalFilter({...modalFilter , price: !modalFilter.price})
    if(menuName === 'Size') setModalFilter({...modalFilter , size: !modalFilter.size})
    if(menuName === 'Stars') setModalFilter({...modalFilter , stars: !modalFilter.stars})
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center p-5 w-full mt-20 font-roboto">
      <h1 className="text-6xl text-gray-900 font-semibold">Shop Now, Goodlook Later</h1>
      <p className="mt-8 font-medium text-lg text-gray-400 tracking-wider">Lorem ipsum may be used as a placeholder before final copy as a placeholder is available</p>
      <div className="flex flex-col justify-center gap-5  mx-auto mt-12 p-3">

        <div className='flex flex-row gap-3 justify-center'>          
          {
            filterMenus.map(menu => (
              <div key={crypto.randomUUID()}>
                <div className="flex flex-wrap  gap-5 items-center bg-gray-200 rounded-full px-8 w-56 py-3 justify-between font-roboto font-medium text-lg tracking-wide text-gray-700">
                  {menu.name}
                  <div className='rounded-full bg-gray-300 hover: bg-gray-100 p-2' onClick={() => handleModal(menu.name)}>
                    <IoIosArrowDown size={20} className='cursor-pointer' />
                  </div>
                </div>                
              </div>              
            ))
          }
        </div>

        <div className='z-20'>
          { modalFilter.category && 
            <ModalFilter
              arrayFilter={categories}
              margin='ml-0'
              text='Category'
            />
          }
          { modalFilter.price && 
            <ModalFilter
              arrayFilter={rangePrice}
              margin='ml-[15rem]'
              text='Price'
            />
          }
          { modalFilter.size && 
            <ModalFilter
              arrayFilter={size}
              margin='ml-[29.5rem]'
              text='Size'
            />
          }
          { modalFilter.stars && 
            <ModalFilter
              arrayFilter={rangeStars}
              margin='ml-[44.5rem]'
              text='Stars'
            />
          }
        </div>

      </div>
      
      <div className='flex flex-row justify-center gap-3 w-full mt-8'>
        
        <div className='w-full mx-auto px-6'>
          { products && <List products={products ? products : [] } /> }
          { error && <h1>No products or server is not responding</h1> }
        </div>
      </div>
    </div>
  )
}
