
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../../services/productApi'
import { Comments, GalleryProduct } from '../../../components'
import { DetailProduct } from './../../index'

export const Detail = () => {
  const { id } = useParams()
  const { data: product, isError, isFetching, error } = useGetProductByIdQuery(id)

  if(isFetching) return <div>Loading...</div>
  else if(isError) return <div>Error: {error.message}</div>

  console.log(product)
  /*if(isSuccess) {
    setSizeProduct(product.product.size[0])
    setCurrentImage(`http://localhost:5000/images/` + product.product.images[0].split('___').splice(1) )  
  }*/

  

  /*const getRatingByProduct = async() => {
    const { data, status } = await axios.get(`http://localhost:5000/comment/${id}`)
    if(status === 200) setRatingLenght(data.comments.lenght)
  }

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getRatingByProduct()
  },[])*/
  


  /*const addQuantity = () =>  setQuantityProduct(prev => prev + 1)

  const getItemPriceQuantity = (quantity, price) => {
    return (quantity * price).toFixed(2)
  }

  const removeQuantity = () =>  setQuantityProduct(prev => prev === 1 ? 1 : prev - 1)

  const addProductToCart = () => {
    console.log(quantityProduct)
    dispatch(
      addProduct({
        quantity: quantityProduct,
        title: product.title,
        desc: product?.desc,
        price: product?.price,
        id: product?._id,
        category: product?.category,
        gender: product?.gender,
        size: sizeProduct,
        mainImg: product?.images[0],
        secretId: product?._id + sizeProduct
      })
    );
    dispatch(calculateTotal())
    setQuantityProduct(1);
  };*/
  
  return (
    <div className="flex items-center justify-center mx-auto w-10/12 xl:w-8/12 mt-16">
      <section className="flex flex-col w-full">
        <section className="flex flex-row">
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
