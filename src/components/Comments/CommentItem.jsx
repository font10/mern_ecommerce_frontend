import profile from '../../assets/images/profile.png'
import { numToStars } from "../../helpers/numToStars";
import { useGetCommentsByProductQuery } from '../../services/commentApi';
import { useParams } from 'react-router-dom';

export const CommentItem = () => {
  const { id } = useParams()
  const { data } = useGetCommentsByProductQuery(id)

  const formatDate = (data) => { return new Date(data).toLocaleDateString() }

  return (
    <section>
      {
        data?.comments?.map(comm => (
          <article key={crypto.randomUUID()}>
            <figure className="flex flex-row items-center gap-3 mt-10">
              <img src={profile} width={35} alt="pic user" />
              <figcaption className="font-roboto font-medium">{comm?.userId?.username}</figcaption>
            </figure>
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
  )
}

