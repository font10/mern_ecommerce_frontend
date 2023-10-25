import { useEffect ,useState } from 'react'
import { List } from '../../components/index'
import axios from 'axios'

export const Home = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)

  const fetchProducts = async() => {
    try {
      const { data, status } = await axios.get(`http://localhost:5000/product`)
      console.log(data.products)
      
      if(status === 200) setProducts(data.products)
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='w-10/12 mx-auto mt-10'>
      <div className='flex flex-row gap-3 w-full'>
        <div className='flex flex-row items-center bg-gray-100 p-8 rounded-xl w-8/12 pt-10'>
          <div className='w-7/12 font-roboto'>
            <h1 className='text-3xl font-semibold inline-block bg-gradient-to-b from-orange-600 to-orange-300 text-transparent bg-clip-text font-roboto tracking-widest'>NEW ARRIVAL!</h1>
            <h1 className='text-6xl font-semibold mt-6 font-roboto font-semibold leading-[4rem] py-3'>NIKECOURT AIR ZOOM VAPOR 11</h1>
            <p className='text-md py-5 font-medium text-slate-400 font-roboto tracking-widest'>In publishing and graphic design, lorem ipsum is a placeholder text commonly used</p>
            <button className='px-10 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-full text-md text-white tracking-widest'>View Product</button>
          </div>
          <div className='w-5/12 p-5'>
            <img src={`http://localhost:5000/images/new_arrival.png`} />
          </div>
        </div>
        <div className='bg-orange-400 bg-opacity-20 p-8 rounded-xl w-4/12'>
            <div className='h-7/12 mt-6'>
              <h1 className='text-3xl font-semibold inline-block bg-gradient-to-b from-red-500 to-red-300 text-transparent bg-clip-text font-roboto tracking-wider'>BEST SELLER!</h1>
              <h1 className='text-6xl font-semibold font-roboto font-semibold leading-[4rem] py-3'>NIKE PEGASUS TURBO</h1>
            </div>
            <div className='flex flex-row h-5/12 items-start mt-8'>
              <button className='px-10 py-3 rounded-full text-white bg-cyan-600 font-medium tracking-wider'>Details</button>
              <img src={`http://localhost:5000/images/best_seller.png`} width={400} className='-mt-20' />
            </div>
        </div>
      </div>
      { products && <List products={products ? products : [] }  /> }
      { error && <h1>No products or server is not responding</h1> }
    </div>
  )
}

