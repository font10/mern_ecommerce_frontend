import PropTypes from "prop-types";
import { useState } from "react"

export const GalleryProduct = ({ product }) => {
  const initialCurrentImage = product?.images[0].url
  const [currentImage, setCurrentImage] = useState(initialCurrentImage)

  return (
    <section className='flex-1 flex gap-5'>
      <figure>
        <img src={currentImage} alt="pic product detail" className="object-contain w-full" />
        <div className='flex flex-wrap gap-1 mt-4'>
          { 
            product?.images.map((img, i) => (
              <figure key={img} className=''>
                {
                  product?.images[i].url === currentImage ? '' : <img 
                    src={product?.images[i].url} 
                    alt="" 
                    className='cursor-pointer h-24 w-40 object-cover' 
                    onClick={() => setCurrentImage(product?.images[i].url)}
                  />
                }
              </figure>
            )) 
          }
        </div>
      </figure>
    </section>
  )
}

GalleryProduct.propTypes = {
  product: PropTypes.object.isRequired,
};