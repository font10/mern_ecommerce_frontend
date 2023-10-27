import { useSelector } from 'react-redux';
import profile from '../../assets/images/profile.png'
import { numToStars } from "../../helpers/numToStars";

export const CommentItem = () => {
  const { comments } = useSelector(state => state.comment)

  const formatDate = (data) => {
    return new Date(data).toLocaleDateString()
  }

  return (
    <div>
      {
        comments[0]?.map(comm => (
          <div key={crypto.randomUUID()}>
            <div className="flex flex-row items-center gap-3 mt-10">
              <img src={profile} width={35} alt="pic user" />
              <span className="font-roboto font-medium">{comm?.userId?.username}</span>
            </div>
            <div className="flex flex-row items-center mt-2">
              {numToStars(comm?.rating)}<span className="ml-3 font-medium text-[17px]">{comm?.title}</span>
            </div>
            <div className="text-sm font-medium text-gray-700 mt-0.5">Enviado el {formatDate(comm?.createdAt)}</div>
            <div className="mt-3">{comm?.comment}</div>
          </div>
        ))
      }
    </div>
  )
}

