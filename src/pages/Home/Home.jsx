import { Hero } from '../../components/index'
import { ProductsFilter } from '../../pages/index'

export const Home = () => {
 
  return (
    <div className='w-10/12 mx-auto mt-10'>
      <Hero />
      <ProductsFilter />
    </div>
  )
}

