import { List } from "../../../components"
import { useGetProductsQuery } from "../../../services/productApi"

export const ProductsFilter = () => {
  const { data: products, isError, isLoading, error } = useGetProductsQuery()
  
  if(isLoading) return <div>Loading...</div>
  else if(isError) return <div>Error: {error.message}</div>
  
  return (
    <div className="flex flex-col items-center w-10/12 mx-auto mt-14">
      <header>
        <h1 className="text-6xl text-gray-900 font-roboto font-semibold">Shop Now, Goodlook Later</h1>
      </header>
      <p className="mt-8 font-medium text-lg text-gray-400 font-roboto tracking-wider">Lorem ipsum may be used as a placeholder before final copy as a placeholder is available</p>

      <section className='flex flex-wrap justify-center gap-3 w-full mx-auto px-6 mt-8'>
        { products.products && <List products={products.products ? products.products : [] } /> }
        { error && <h1>No products or server is not responding</h1> }
      </section>
    </div>
  )
}
