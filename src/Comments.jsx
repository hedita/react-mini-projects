import React, { useState, Fragment } from "react";

function Comments({ comments }) {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const handleCommentVisibility = () => {
    setIsCommentsVisible(!isCommentsVisible);
  };

  return (
    <>
      <button onClick={handleCommentVisibility}>
        {isCommentsVisible ? "Hide Comments" : "Show Comments"}
      </button>
      {isCommentsVisible
        ? comments.map(({ id, author, text, likesCount }) => {
            return (
              <Fragment key={id}>
                <p>
                  {author}:{text}
                </p>
                <p>likes: {likesCount}</p>
              </Fragment>
            );
          })
        : null}
    </>
  );
}
export default Comments;
