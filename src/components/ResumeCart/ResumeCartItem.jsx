import PropTypes from "prop-types";
import { route } from "../../models/route.model";
import { Link } from "react-router-dom";

export const ResumeCartItem = ({ product }) => {
  
  const getItemPriceQuantity = (quantity, price) => {
    return (quantity * price).toFixed(2)
  }

  return (
    <article className="flex gap-4 relative w-full">
      <Link to={`${route.product.productDetail.path}/${product.id}`}>
        <img 
          src={product?.mainImg.url}
          className="rounded-sm object-cover h-28" 
        />
      </Link>
      <section className="flex flex-col w-full">
        <figure className="flex flex-row justify-between items-center mt-1">
          <figcaption className="text-xl font-medium">{product.title}</figcaption>
        </figure>

        <div className="flex flex-wrap justify-between gap-2 font-roboto font-medium text-gray-400 text-[13px] mt-1">
          <span>{product?.category} - {product?.gender}</span>
          <span>{product?.size}</span>
        </div>

        <section className="flex flex-row justify-between gap-3 w-full mt-5">
          <span className="rounded-full bg-gray-400 px-2.5 py-1 font-roboto text-white text-sm font-medium">{product?.quantity}</span>
          <span className="flex flex-row text-lg font-medium fonr-torobot">{getItemPriceQuantity(product?.quantity, product.price)} €</span>
        </section>
      </section>
    </article>
  )
}

ResumeCartItem.propTypes = {
  product: PropTypes.object.isRequired,
};

