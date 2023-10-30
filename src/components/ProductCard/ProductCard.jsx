import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import { route } from "../../models/route.model";
import star from '../../assets/images/star.png'

export const ProductCard = ({ product }) => {
  
  return (
    <section className="bg-white w-full shadow-xl rounded-md hover:scale-105 ease-in-out transition duration-300 w-[360px]">
      <Link to={`${route.product.productDetail.path}/${product._id}`} className="wrapper">
        <img src={`http://localhost:5000/images/` + product.images[0].split('___').splice(1)} alt="pic product card" className="firstimg h-64 w-full rounded-tl-md rounded-tr-md object-cover" />
        <article className="flex flex-col p-5">
          <h2 className="font-medium text-xl">{product.title}</h2>
          <div className="flex flex-row justify-between items-center text-sm">
            <span className="mt-2">{ Number(product.price).toFixed(2) } €</span>
            <figure className="flex flex-wrap items-center gap-1 mt-1">
              <figcaption className="mt-1">{product.stars} </figcaption>
              <img src={star} width={18} alt="star" />
            </figure>
          </div>
        </article>
      </Link>
    </section>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};