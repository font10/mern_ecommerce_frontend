import { AiFillHeart, BsCartFill, FaMinusCircle, FaPlusCircle } from '../../../utils/icons'
import { numToStars } from '../../../helpers/numToStars'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
//import { useSelector } from 'react-redux'
import { addProduct } from '../../../redux/slices/cartSlice'

export const Detail = () => {
  const [product, setProduct] = useState(null)
  const [currentImage, setCurrentImage] = useState('')
  const [quantityProduct, setQuantityProduct] = useState(1)
  const dispatch = useDispatch()
  //const { products } = useSelector(state => state.cart)
  const { id } = useParams()

  const getProduct = async() => {
    const { data, status } = await axios.get(`http://localhost:5000/product/${id}`)

    if(status === 200) {
      setProduct(data.product)
      setCurrentImage(`http://localhost:5000/images/` + data.product.images[0].split('___').splice(1) )
    }
  }

  useEffect(() => {
    try {
      getProduct()
    } catch (err) {
      console.log(err)
    }
  }, [id])

  const addQuantity = () => {
    setQuantityProduct(prev => prev + 1)
  }

  const removeQuantity = () => {
    setQuantityProduct(prev => prev === 1 ? 1 : prev - 1)
  }

  const addProductToCart = () => {
    dispatch(
      addProduct({
        quantity: quantityProduct,
        title: product.title,
        desc: product?.desc,
        price: product?.price,
        id: product?._id,
        mainImg: product?.firstImg,
      })
    );
    setQuantityProduct(1);
  };

  console.log(product)
  console.log(currentImage)
  
  return (
    <div className="flex items-center justify-center mx-auto w-10/12 xl:w-8/12 mt-20">
      <div className="flex flex-col xl:flex-row justify-center gap-10">
        
        <div className='flex-1 flex gap-5'>
          <div>
            <img src={currentImage} alt="pic product detail" className="h-96 object-cover w-[650px]" />
            <div className='flex flex-wrap gap-1 mt-6'>
              { 
                product?.images.map((img, i) => (
                  <div key={img} className=''>
                    {
                      `http://localhost:5000/images/` + img.split('___').splice(1) === currentImage ? '' : <img 
                        src={`http://localhost:5000/images/` + product?.images[i].split('___').splice(1)} 
                        alt="" 
                        width={202}
                        className='cursor-pointer h-24 object-cover' 
                        onClick={() => setCurrentImage(`http://localhost:5000/images/` + product?.images[i].split('___').splice(1))}
                      />
                    }
                  </div>
                )) 
              }
            </div>
          </div>
        </div>

        <div className='flex-1 flex-col'>
          <h2 className='text-3xl font-medium'>{product?.title}</h2>
          <p className='text-sm py-3'>{product?.desc}</p>  
          <h2 className='text-2xl text-cyan-500 font-medium'><span>$</span>{product?.price}</h2>
          <div className='flex flex-wrap justify-between items-center py-2 mt-5'>
            <div className='flex items-center gap-3'>
              <button onClick={removeQuantity} className="text-white text-lg" >
                <FaMinusCircle className='text-cyan-600 hover:text-cyan-500' size={24} />
              </button>
              <span className='text-xl font-medium '>Quantity: {quantityProduct}</span>
              <button onClick={addQuantity} className="text-white text-lg" >
                <FaPlusCircle className='text-cyan-600 hover:text-cyan-500' size={24} />
              </button>
            </div>
            
          <div className="flex flex-wrap px-4 py-1.5 gap-2 items-center bg-cyan-600 hover:bg-cyan-500 text-white rounded-md font-medium cursor-pointer" onClick={addProductToCart}>
            <BsCartFill className="" />
            ADD TO CART
          </div>
          </div>
          <div className='flex justify-between items-center mt-5'>
            <div className='flex flex-wrap items-center gap-2 text-md'>
              <AiFillHeart />
              ADD TO WISHLIST
            </div>
            {
              product?.stars && (
                <div className='flex flex-wrap items-center gap-3'>
                  <span>Review</span>
                  <div className='flex flex-wrap items-center'>{numToStars(product.stars)}<span>(14)</span></div>
                </div>
              )
            }
          </div>
         
          
          <div className='mt-3'>
            <hr />
            <p className='py-3 ml-2'>Materials and maintenaince</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}


/*
<div className='flex-1'>
          <h2 className='text-2xl font-medium'>{product?.title}</h2>
          <p>{product?.desc}</p>
          <h2><span>$</span>{product?.price}</h2>
          <div>
            <button onClick={() => {}} className="" >
              -
            </button>
            <span>Quantity: 0</span>
            <button onClick={() => {}} className="" >
              +
            </button>
          </div>
          <div className="" onClick={() => {}}>
            <BsCartFill className="" />
          </div>
          <div>
            <div>
              <AiFillHeart />
              ADD TO WISHLIST
            </div>
          </div>
          {
            product?.stars && (
              <div>
                <span>Review</span>
                <div className=''>{numToStars(product.stars)}<span>(14)</span></div>
              </div>
            )
          }
          <div className=''>
            <img 
              src={`http://localhost:5000/images/` + product?.firstImg.split('___').splice(1)} 
              alt="" 
              className='' 
              onClick={() => {}}
            />
            <img 
              src={`http://localhost:5000/images/` + product?.secondImg.split('___').splice(1)} 
              alt="" 
              className='' 
              onClick={() => {}}
            />
          </div>
          <div className=''>
            <hr />
            <p>Mterials and maintenaince</p>
            <hr />
          </div>
        </div>
*/