import PropTypes from "prop-types";
import { ProductCard } from "../ProductCard/ProductCard";

export const List = ({ products }) => {
  
  return (
    <section className="flex flex-col justify-center items-center mt-5 w-full">
      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-5 mt-10">
        { 
          products?.length === 0
            ? <h1 className="w-full items-center">No products yet</h1>
            : products?.map(product => (
              <ProductCard key={product?._id} product={product} />
            ))          
        }
      </article>
    </section>
  )
}

List.propTypes = {
  products: PropTypes.array,
};
