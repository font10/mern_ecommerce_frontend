import PropTypes from "prop-types";

export const ModalFilter = ({ arrayFilter, text, margin }) => {
  return (
    <>
      <section className={`absolute w-56 h-84 ${margin} mx-auto rounded-lg px-7 py-5 bg-white shadow-md`}>
        {
          arrayFilter.map(cat => (
            <article key={cat} className='font-roboto font-medium text-lg py-1 text-gray-600 hover:text-gray-400 cursor-pointer'>
              {cat} { text === 'Price' ? '€' : ''}
            </article>
          ))
        }
      </section>          
    </>
  )
}

ModalFilter.propTypes = {
  arrayFilter: PropTypes.array.isRequired,
  margin: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
