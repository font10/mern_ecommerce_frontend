
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../../services/productApi'
import { Comments, GalleryProduct } from '../../../components'
import { DetailProduct } from './../../index'

export const Detail = () => {
  const { id } = useParams()
  const { data: product, isError, isFetching, error } = useGetProductByIdQuery(id)

  if(isFetching) return <div>Loading...</div>
  else if(isError) return <div>Error: {error.message}</div>

  return (
    <div className="flex items-center justify-center mx-auto w-10/12 xl:w-8/12 mt-16">
      <section className="flex flex-col w-full">
        <section className="flex flex-col lg:flex-row">
          <article className="w-full h-full">
            <GalleryProduct product={product} />
          </article>
          <article className="w-full h-full px-8">
            <DetailProduct product={product} />
          </article>
        </section>
      <section className="w-full">
        <Comments id={id} />
      </section>
    </section>   
    </div>
  )
}
