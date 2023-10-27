import PropTypes from "prop-types";
import { useEffect } from "react"
import axios from 'axios'
import { CreateComment } from "./Create/CreateComment";
import { useDispatch } from "react-redux";
import { addComment, emptyComments } from "../../redux/slices/commentsSlice";
import { CommentItem } from "./CommentItem";

export const Comments = ({ id }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`http://localhost:5000/comment/${id}`)
      .then(({data}) => { dispatch(emptyComments()); dispatch(addComment(data.comments)) } )
      .catch(err => console.log(err))
  }, [id])
  
  return (
    <div className="flex flex-col w-full">
      <CreateComment id={id} />
      <CommentItem />
    </div>
  )
}

Comments.propTypes = {
  id: PropTypes.string.isRequired,
};
