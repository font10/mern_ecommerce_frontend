import PropTypes from "prop-types";
import { IoIosArrowDown } from '../../../../utils/icons'
import { changeModalCategory, changeModalPrice, changeModalSize, changeModalStars } from "../../../../redux/slices/productFilterSlice";
import { useDispatch } from "react-redux";

export const FilterMenu = ({ name }) => {
  const dispatch = useDispatch()
  
  const handleModal = (menuName) => {
    if(menuName === 'Category') dispatch(changeModalCategory())
    if(menuName === 'Price') dispatch(changeModalPrice())
    if(menuName === 'Size') dispatch(changeModalSize())
    if(menuName === 'Stars') dispatch(changeModalStars())
  }

  return (
    <article key={crypto.randomUUID()}>
      <section className="flex flex-wrap  gap-5 items-center bg-gray-200 rounded-full px-8 w-56 py-3 justify-between font-roboto font-medium text-lg tracking-wide text-gray-700">
        {name}
        <figure className='rounded-full bg-gray-300 hover: bg-gray-100 p-2' onClick={() => handleModal(name)}>
          <IoIosArrowDown size={20} className='cursor-pointer' />
        </figure>
      </section>                
    </article> 
  )
}

FilterMenu.propTypes = {
  name: PropTypes.string.isRequired,
};
