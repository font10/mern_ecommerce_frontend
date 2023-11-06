import { useSelector } from "react-redux"
import { useGetProductsByFilterQuery } from "../../../services/productApi"
import { ProductCard } from "../../../components/ProductCard/ProductCard"
import { Loading } from "../../../components/Loading/Loading"

export const ProductsFilter = () => {
  const { urlFilter } = useSelector(state => state.productfilter)
  const { data, isError, isLoading, isSuccess, error } = useGetProductsByFilterQuery(urlFilter, { refetchOnMountOrArgChange: true })

  if(isLoading) return <Loading />;

  return (
    <section className='flex flex-wrap justify-center gap-3 w-full mx-auto px-6 mt-8'>
      { isError && <h1 className="flex justify-center h-full w-full items-center">{error?.data.message}</h1>  }
      { isSuccess && (
        <section className="flex flex-col justify-center items-center mt-5 w-full">
          <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-5 mt-10">
            { 
              data?.products?.length === 0
                ? <h1 className="w-full items-center">No products yet</h1>
                : data?.products?.map(product => (
                  <ProductCard key={product?._id} product={product} />
                ))          
            }
          </article>
        </section>
      ) }
    </section>
  )
}
