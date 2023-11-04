import { useSelector } from "react-redux"
import { useDeleteCommentMutation, useGetCommentsByUserQuery } from "../../../services/commentApi"
import { profile } from '../../../assets/images/index'
import { numToStars } from "../../../helpers/numToStars"

export const CommentsProfile = () => {
  const { user, token } = useSelector(state => state.auth)
  const { data } = useGetCommentsByUserQuery(user._id, { refetchOnMountOrArgChange: true })
  const [deleteOrder] = useDeleteCommentMutation()
  const formatDate = (data) => { return new Date(data).toLocaleDateString() }
  
  const handleDelete = (id) => {
    deleteOrder({ id, token })
  }
  
  return (
    <div className="mt-9">
      Comments Profile
      <section className="mt-10">
      {
        data?.comments?.map(comm => (
          <article key={crypto.randomUUID()} className="py-5">
            <section className="flex flex-row justify-between">
              <figure className="flex flex-row items-center gap-3">
                <img src={profile} width={35} alt="pic user" />
                <figcaption className="font-roboto font-medium">{comm?.userId?.username}</figcaption>
              </figure>
              <div>
                <button className="font-roboto font-medium text-md text-blue-500 hover:text-blue-400 cursor-pointer" onClick={() => handleDelete(comm._id)}>Delete</button>
              </div>
            </section>
            <div className="flex flex-row items-center mt-2">
              {numToStars(comm?.rating)}
              <span className="ml-3 font-medium text-[17px]">{comm?.title}</span>
            </div>
            <p className="text-sm font-medium text-gray-700 mt-0.5">Enviado el {formatDate(comm?.createdAt)}</p>
            <p className="mt-3">{comm?.comment}</p>
          </article>
        ))
      }
    </section>
    </div>
  )
}
