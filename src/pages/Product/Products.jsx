import { Link } from 'react-router-dom'
import { List } from '../../components/index'
import { useGetProductsQuery } from '../../services/productApi'
import { route } from '../../models/route.model'
import { Loading } from '../../components/Loading/Loading'

export const Products = () => {
  const { data: products, isError, isLoading, error } = useGetProductsQuery({ refetchOnMountOrArgChange: true })
  
  if(isLoading) return <Loading />
  else if(isError) return <div>Error: {error.message}</div>

  console.log(products)

  return (
    <div className="flex flex-col justify-center items-center p-5 w-full mt-20 font-roboto">
      <header>
        <h1 className="text-6xl text-gray-900 font-semibold">Shop Now, Goodlook Later</h1>
      </header>
      <p className="mt-8 font-medium text-lg text-gray-400 tracking-wider">Lorem ipsum may be used as a placeholder before final copy as a placeholder is available</p>

      <section className='flex flex-wrap justify-center gap-3 w-full mx-auto px-6 mt-8'>
        { products.products && <List products={products.products ? products.products.slice(0,8) : [] } /> }
        { error && <h1>No products or server is not responding</h1> }
      </section>

      <Link to={route.product.productFilter.path} className='px-10 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-pink-500 hover:to-yellow-500 font-medium text-md font-roboto text-gray-100 rounded-full mt-40'>View more</Link>
    </div>
  )
}
