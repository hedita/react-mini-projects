import React, {useState,Fragment} from "react";

function Comments ({comments}) {
  console.log(comments)
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const handleCommentVisibility = () => {
    setIsCommentsVisible(!isCommentsVisible);
  }
  const commentList = comments.map(({author,text,likesCount,id}) =>{
    return (
      <Fragment key={id}>
       <div style={{visibility: isCommentsVisible ? "visible" : "hidden"}}>
         <p>{author}:{text}</p>
         <p>likes: {likesCount}</p>
       </div>
       <button onClick={handleCommentVisibility}>{isCommentsVisible ? "Hide Comments" : "Show Comments"}</button>
      </Fragment> 
    ) 
  })
  return {commentList}
}
export default Comments;
