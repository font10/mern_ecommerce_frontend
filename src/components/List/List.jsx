import PropTypes from "prop-types";
import { ProductCard } from "../ProductCard/ProductCard";

export const List = ({ products }) => {
  return (
    <div className="mt-5 w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-4 gap-4 gap-5 mt-10">
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
