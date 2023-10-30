import PropTypes from "prop-types";
import { CreateComment } from "./Create/CreateComment";
import { CommentItem } from "./CommentItem";

export const Comments = ({ id }) => {

  /*useEffect(() => {
    axios.get(`http://localhost:5000/comment/${id}`)
      .then(({data}) => { dispatch(emptyComments()); dispatch(addComment(data.comments)) } )
      .catch(err => console.log(err))
  }, [id])*/
  
  return (
    <section className="flex flex-col w-full mt-8">      
      <header>
        <h3 className="text-xl font-medium font-roboto">Comments</h3>
      </header>
      <CreateComment id={id} />
      <CommentItem />
    </section>
  )
}

Comments.propTypes = {
  id: PropTypes.string.isRequired,
};
