import { BsCartFill, HiMinusSm, HiPlusSm, TbTruckDelivery } from '../../../utils/icons'
import { numToStars } from '../../../helpers/numToStars'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addProduct, calculateTotal } from '../../../redux/slices/cartSlice'
import { Comments } from '../../../components/Comments/Comments'
import axios from 'axios'

export const Detail = () => {
  const [product, setProduct] = useState(null)
  const [currentImage, setCurrentImage] = useState('')
  const [quantityProduct, setQuantityProduct] = useState(1)
  const [ratingLength, setRatingLenght] = useState(0)
  const [sizeProduct, setSizeProduct] = useState()
  const dataFetchedRef = useRef(false)
  const dispatch = useDispatch()
  const { id } = useParams()

  const getProduct = async() => {
    const { data, status } = await axios.get(`http://localhost:5000/product/${id}`)

    if(status === 200) {
      setProduct(data.product)
      setSizeProduct(data.product.size[0])
      setCurrentImage(`http://localhost:5000/images/` + data.product.images[0].split('___').splice(1) )
    }
  }

  const getRatingByProduct = async() => {
    const { data, status } = await axios.get(`http://localhost:5000/comment/${id}`)
    if(status === 200) setRatingLenght(data.comments.lenght)
  }

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getRatingByProduct()
  },[])
  

  useEffect(() => {
    try {
      getProduct()
    } catch (err) {
      console.log(err)
    }
  }, [id])

  const addQuantity = () =>  setQuantityProduct(prev => prev + 1)

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
  };
  
  return (
    <main className="flex items-center justify-center mx-auto w-10/12 xl:w-8/12 mt-16">
      <section className="flex flex-col xl:flex-col justify-center gap-10">
        <section className='flex flex-row w-full'>
          <section className='flex-1 flex gap-5'>
            <figure>
              <img src={currentImage} alt="pic product detail" className="object-contain w-full" />
              <div className='flex flex-wrap gap-1 mt-4'>
                { 
                  product?.images.map((img, i) => (
                    <figure key={img} className=''>
                      {
                        `http://localhost:5000/images/` + img.split('___').splice(1) === currentImage ? '' : <img 
                          src={`http://localhost:5000/images/` + product?.images[i].split('___').splice(1)} 
                          alt="" 
                          width={196}
                          className='cursor-pointer h-24 object-cover' 
                          onClick={() => setCurrentImage(`http://localhost:5000/images/` + product?.images[i].split('___').splice(1))}
                        />
                      }
                    </figure>
                  )) 
                }
              </div>
            </figure>
          </section>

          <section className='flex-1 flex-col px-8'>
            <header>
              <h2 className='text-4xl font-medium mb-1'>{product?.title}</h2>
            </header>
            <p className='font-medium text-gray-700 font-roboto ml-0.5'>{product?.category} - {product?.gender}</p>
            {
              product?.stars && (
                <div className='flex flex-wrap items-center mt-3'>
                  <div className='flex flex-wrap items-center font-medium gap-0.25'>{numToStars(product.stars)}<span className='ml-2 font-roboto text-[15px] text-gray-700'>{ratingLength} Reviews</span></div>
                </div>
              )
            }            
            
            <h3 className='font-medium text-xl font-roboto mt-5'>Description</h3>
            <p className='text-sm py-2 text-gray-500 leading-6 font-normal font-roboto'>{product?.desc}</p>  

            <section className='mt-5'>
              <header>
                <h3 className='font-medium text-xl font-roboto'>Size</h3>
              </header>
              <div className='grid grid-cols-5 gap-2 mt-3'>
                {
                  product?.size.map(item => (
                    <article 
                      key={item} 
                      value={sizeProduct} 
                      className={`${ sizeProduct === item ? 'border-2 border-blue-300 bg-blue-300 bg-opacity-50' : 'border border-gray-200 hover:bg-gray-100' } flex items-center justify-center px-4 py-2 font-medium text-gray-600 font-roboto text-[16px] rounded-md  cursor-pointer`}
                      onClick={() => setSizeProduct(item)}
                    >
                      {item}
                    </article>
                  ))
                }
              </div>
            </section>

            <section>
              <div className='flex flex-col items-start py-2 mt-5'>
                <header>
                  <h3 className='font-medium text-xl font-roboto'>Item Quantity</h3>
                </header>
                <div className='flex items-center mt-3 gap-3'>
                  <button onClick={removeQuantity} className="text-white text-lg bg-white shadow-md px-4 py-1 rounded-full" >
                    <HiMinusSm className='text-gray-500 hover:text-cyan-500' size={24} />
                  </button>
                  <span className='text-xl font-medium px-2'>{quantityProduct}</span>
                  <button onClick={addQuantity} className="text-white text-lg bg-white shadow-md px-4 py-1 rounded-full" >
                    <HiPlusSm className='text-gray-500 hover:text-cyan-500' size={24} />
                  </button>
                </div>            
              </div>

              
              <p className='text-2xl text-cyan-700 font-medium mt-4'>{getItemPriceQuantity(quantityProduct, product?.price)} €</p>
            </section>

            <figure className='flex flex-row items-center mt-6 gap-5 p-5 border border-gray-300 rounded-lg'>
              <TbTruckDelivery size={28} />
              <figcaption className='flex flex-col items-start justify-center'>
                <span className='text-lg font-roboto font-medium'>Entrega a domicilio</span>
                <span>Llega en 5-6 dias habiles</span>
              </figcaption>
              
            </figure>
          
            <div className="flex flex-wrap px-4 py-2.5 mt-6 gap-2 w-5/12 justify-center items-center bg-white text-cyan-600 border-2 border-cyan-600 hover:bg-cyan-100 rounded-md font-medium cursor-pointer" onClick={addProductToCart}>
              <BsCartFill className="" />
              Add to cart
            </div>
        
          </section>
        </section>
        <section className='w-full'>
          <header>
            <h3 className="text-xl font-medium font-roboto">Comments</h3>
          </header>
          <Comments id={id} />
        </section>
        
      </section>
    </main>
  )
}
