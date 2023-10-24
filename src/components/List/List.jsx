import PropTypes from "prop-types";
import { ProductCard } from "../ProductCard/ProductCard";

export const List = ({ products }) => {
  return (
    <div className="mt-40">
      <div className="flex flex-col justify-center items-center">
        { products.length > 0 && <h1 className="text-3xl font-medium">Best products on the market</h1> }
        <div className="flex flex-wrap gap-5 mt-10">
          { 
            products?.length === 0
             ? ( <h1 className="w-full items-center">No products yet</h1> )
             : products?.map(product => (
              <ProductCard key={product._id} product={product} />
             ))
          
          }
        </div>
      </div>
    </div>
  )
}

List.propTypes = {
  products: PropTypes.array.isRequired,
};
