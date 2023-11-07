
import PropTypes from "prop-types";
import { FaStar } from '../../../utils/icons'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useCreateCommentMutation } from '../../../services/commentApi';

export const CreateComment = ({ id }) => {
  const [createComment] = useCreateCommentMutation()
  const { user, token } = useSelector(state => state.auth)
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
  const [inputs, setInputs] = useState({
    title: '',
    comment: '',
    rating: 3,
    productId: id,
    userId: user?._id
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    const res = createComment({ token, inputs })
    console.log(res)
  }

  const handleInputs = (e) => {
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })
  }

  const handleClick = value => setInputs({ ...inputs, rating: value })
  const handleMouseOver = newHoverValue => setHoverValue(newHoverValue)
  const handleMouseLeave = () => setHoverValue(undefined)

  return (
    <section className="flex flex-col w-full">
      <form onSubmit={handleSubmit} className="w-full mt-5">
        <label className='font-medium text-gray-700'>Rating</label>
        <div className='flex flex-row mb-5 mt-1'>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || inputs.rating) > index ? '#FFBA5A' : '#a9a9a9' }
                className='mr-2 cursor-pointer'
              />
            )
          })}
        </div>
        <label className='font-medium text-gray-700'>Title</label>
        <input 
          type='text' 
          name='title' 
          required
          className="px-4 py-2 border-2 border-gray-200 rounded-md px-5 mb-3 w-full"
          placeholder='Title'
          onChange={(e) => { handleInputs(e) }}
        />
        <label className='font-medium text-gray-700 mt-2'>Comment</label>
        <textarea 
          type='text' 
          name='comment'
          value={inputs.comment}
          required
          className="mt-1 px-4 py-2 border-2 border-gray-200 block max-h-40 h-40 rounded-md px-5 mb-3 w-full"
          placeholder="Comment"
          onChange={(e) => handleInputs(e)}
        />
        <button className='px-8 py-2 bg-blue-500 hover:bg-blue-400 rounded-md text-white w-40 font-medium'>Save</button>
      </form>
    </section>
  )
}

CreateComment.propTypes = {
  id: PropTypes.string.isRequired,
};