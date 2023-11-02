import PropTypes from "prop-types";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { modalFormToFalse } from "../../redux/slices/addressSlice";

export const ModalForm = ({children}) => {
  const dispatch = useDispatch()
  return (
    <section className={`absolute top-32 left-[30%] h-84 mx-auto rounded-lg px-7 py-5 z-20 bg-gray-100 shadow-xl`}>
      
      <AiOutlineCloseCircle size={20} className="absolute right-8 cursor-pointer" onClick={() => dispatch(modalFormToFalse())} />
      {children}
    </section>
  )
}

ModalForm.propTypes = {
  children: PropTypes.node.isRequired,
};