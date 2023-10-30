import PropTypes from "prop-types";
import { CreateComment } from "./Create/CreateComment";
import { CommentItem } from "./CommentItem";

export const Comments = ({ id }) => {
  
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
