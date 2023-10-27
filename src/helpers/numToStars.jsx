import { AiOutlineStar, AiFillStar } from '../utils/icons'

export const numToStars = (value) => {
  
    if (Number(value) === 0) {
      return (
        <>
          <AiOutlineStar name='star' size={20} />
          <AiOutlineStar name='star' size={20} />
          <AiOutlineStar name='star' size={20} />
          <AiOutlineStar name='star' size={20} />
          <AiOutlineStar name='star' size={20} />
        </>
      );
    } else if (Number(value) === 1) {
      return (
        <>
          <AiFillStar name='star' size={20} className='text-yellow-500' />
          <AiOutlineStar name='star' size={20} />
          <AiOutlineStar name='star' size={20} />
          <AiOutlineStar name='star' size={20} />
          <AiOutlineStar name='star' size={20} />
        </>
      );
    } else if (Number(value) === 2) {
      return (
        <>
          <AiFillStar name='star' size={20} className='text-yellow-500' />
          <AiFillStar name='star' size={20} className='text-yellow-500' />
          <AiOutlineStar name='star' size={20} />
          <AiOutlineStar name='star' size={20} />
          <AiOutlineStar name='star' size={20} />
        </>
      );
    } else if (Number(value) === 3) {
      return (
        <>
          <AiFillStar name='star' size={20} className='text-yellow-500' />
          <AiFillStar name='star' size={20} className='text-yellow-500' />
          <AiFillStar name='star' size={20} className='text-yellow-500' />
          <AiOutlineStar name='star' size={20} />
          <AiOutlineStar name='star' size={20} />
        </>
      );
    } else if (Number(value) === 4) {
      return (
        <>
          <AiFillStar name='star' size={20} className='text-yellow-500' />
          <AiFillStar name='star' size={20} className='text-yellow-500' />
          <AiFillStar name='star' size={20} className='text-yellow-500' />
          <AiFillStar name='star' size={20} className='text-yellow-500' />
          <AiOutlineStar name='star' size={20} />
        </>
      );
    } else if (Number(value) === 5) {
      return (
        <>
          <AiFillStar name='star' size={20} className='text-yellow-500' />
          <AiFillStar name='star' size={20} className='text-yellow-500' />
          <AiFillStar name='star' size={20} className='text-yellow-500' />
          <AiFillStar name='star' size={20} className='text-yellow-500' />
          <AiFillStar name='star' size={20} className='text-yellow-500' />
        </>
      );
    }
};

