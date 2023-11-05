import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { numToStars } from "../../../helpers/numToStars";
import { useGetCommentsByProductQuery } from "../../../services/commentApi";
import { BsCartFill, HiMinusSm, HiPlusSm, TbTruckDelivery } from '../../../utils/icons'
import { addProduct, calculateTotal } from "../../../redux/slices/cartSlice";
import { useParams } from "react-router-dom";

export const DetailProduct = ({ product }) => {
  const { id } = useParams()
  const dispatch = useDispatch()   
  const [quantityProduct, setQuantityProduct] = useState(1)
  const [sizeProduct, setSizeProduct] = useState(product.size[0])
  const { data: rating } = useGetCommentsByProductQuery(id)

  const addQuantity = () => setQuantityProduct(prev => prev + 1)
  const removeQuantity = () => setQuantityProduct(prev => prev === 1 ? 1 : prev - 1)
  const getItemPriceQuantity = (quantity, price) => { return (quantity * price).toFixed(2) }

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
    <article>
      <section>
        <header>
          <h2 className='text-4xl font-medium'>{product?.title}</h2>
        </header>
        
        <div className='flex flex-wrap items-center mt-3'>
          <figure className='flex flex-wrap items-center font-medium gap-0.25'>{numToStars(product?.stars)}<figcaption className='ml-2 font-roboto text-[15px] text-gray-700'>{rating?.comments.length} Reviews</figcaption></figure>
        </div>

        <article className="mt-5">
          <label className='font-medium text-xl font-roboto'>Description</label>
          <p className='text-sm py-2 text-gray-500 leading-6 font-normal font-roboto'>{product?.desc}</p>
        </article>
      </section>

      <section className="mt-5">
        <header>
          <h3 className='font-medium text-xl font-roboto'>Size</h3>
        </header>
        <article className="grid grid-cols-5 gap-2 mt-3">
        {
          product?.size.map(item => (
            <article 
              key={item} 
              value={sizeProduct} 
              className={`${ sizeProduct === item ? 'border-2 border-blue-300 bg-blue-300 bg-opacity-50' : 'border border-gray-200 hover:bg-gray-100' } 
                flex items-center justify-center px-4 py-2 font-medium text-gray-600 font-roboto text-[13px] 2xl:text-[16px] rounded-md  cursor-pointer`}
              onClick={() => setSizeProduct(item)}
            >
              {item}
            </article>
          ))
        }
        </article>
      </section>

      <section className="mt-5">
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

      <section>
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

    </article>
  )
}

DetailProduct.propTypes = {
  product: PropTypes.object.isRequired,
};