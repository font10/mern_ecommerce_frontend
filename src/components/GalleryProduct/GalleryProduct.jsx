import PropTypes from "prop-types";
import { useState } from "react"

export const GalleryProduct = ({ product }) => {
  console.log(product)
  const initialCurrentImage = `http://localhost:5000/images/` + product?.images[0].split('___').splice(1)
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
                  `http://localhost:5000/images/` + img.split('___').splice(1) === currentImage ? '' : <img 
                    src={`http://localhost:5000/images/` + product?.images[i].split('___').splice(1)} 
                    alt="" 
                    className='cursor-pointer h-24 w-40 object-cover' 
                    onClick={() => setCurrentImage(`http://localhost:5000/images/` + product?.images[i].split('___').splice(1))}
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