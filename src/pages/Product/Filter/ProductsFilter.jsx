import { List, ModalFilter } from '../../../components/index'
import { FilterMenu } from './FilterMenu/FilterMenu'
import { categories, filterMenus, size, rangePrice, rangeStars } from '../../../utils/constants'
import { useGetProductsQuery } from '../../../services/productApi'
import { useSelector } from 'react-redux'

export const ProductsFilter = () => {
  const { modalFilterProduct } = useSelector(state => state.productfilter)
  const { data: products, isError, isLoading, error } = useGetProductsQuery()
  
  if(isLoading) return <div>Loading...</div>
  else if(isError) return <div>Error: {error.message}</div>

  return (
    <main className="flex flex-col justify-center items-center p-5 w-full mt-20 font-roboto">
      <header>
        <h1 className="text-6xl text-gray-900 font-semibold">Shop Now, Goodlook Later</h1>
      </header>
      <p className="mt-8 font-medium text-lg text-gray-400 tracking-wider">Lorem ipsum may be used as a placeholder before final copy as a placeholder is available</p>
      <section className="flex flex-col justify-center gap-5  mx-auto mt-12 p-3">

        <section className='flex flex-row gap-3 justify-center'>          
          {
            filterMenus.map(menu => (
              <FilterMenu key={crypto.randomUUID()} name={menu.name} />
            ))
          }
        </section>

        <section className='z-20'>
          { modalFilterProduct.category && 
            <ModalFilter
              arrayFilter={categories}
              margin='ml-0'
              text='Category'
            />
          }
          { modalFilterProduct.price && 
            <ModalFilter
              arrayFilter={rangePrice}
              margin='ml-[15rem]'
              text='Price'
            />
          }
          { modalFilterProduct.size && 
            <ModalFilter
              arrayFilter={size}
              margin='ml-[29.5rem]'
              text='Size'
            />
          }
          { modalFilterProduct.stars && 
            <ModalFilter
              arrayFilter={rangeStars}
              margin='ml-[44.5rem]'
              text='Stars'
            />
          }
        </section>

      </section>
      
      <section className='flex flex-row justify-center gap-3 w-full mx-auto px-6 mt-8'>
        { products.products && <List products={products.products ? products.products : [] } /> }
        { error && <h1>No products or server is not responding</h1> }
      </section>
    </main>
  )
}


/*

 <section className='z-20'>
          { modalFilterProduct.category && 
            <ModalFilter
              arrayFilter={categories}
              margin='ml-0'
              text='Category'
            />
          }
          { modalFilterProduct.price && 
            <ModalFilter
              arrayFilter={rangePrice}
              margin='ml-[15rem]'
              text='Price'
            />
          }
          { modalFilterProduct.size && 
            <ModalFilter
              arrayFilter={size}
              margin='ml-[29.5rem]'
              text='Size'
            />
          }
          { modalFilterProduct.stars && 
            <ModalFilter
              arrayFilter={rangeStars}
              margin='ml-[44.5rem]'
              text='Stars'
            />
          }
        </section>

        */