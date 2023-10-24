import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import { route } from "../../models/route.model";

export const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-xl rounded-md hover:scale-105 ease-in-out transition duration-300">
      <Link to={`${route.product.productDetail.path}/${product._id}`} className="wrapper">
        <img src={`http://localhost:5000/images/` + product.firstImg.split('___').splice(1)} alt="pic product card" className="firstimg h-64 w-full rounded-tl-md rounded-tr-md object-cover" />
        <div className="productInfo p-5">
          <h2 className="font-medium text-xl">{product.title}</h2>
          <span className="text-sm"><span>$</span>{ Number(product.price).toFixed(2) }</span>
        </div>
      </Link>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};