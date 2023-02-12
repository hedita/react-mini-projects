import React, { useState, Fragment } from "react";

function Comments({ comments }) {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const handleCommentVisibility = () => {
    setIsCommentsVisible(!isCommentsVisible);
  };

  return (
    <>
      <button className="button" onClick={handleCommentVisibility}>
        {isCommentsVisible ? "Hide Comments" : "Show Comments"}
      </button>
      {isCommentsVisible
        ? comments.map(({ id, author, text, likesCount }) => {
            return (
              <Fragment key={id}>
                <div className="comment-container">
                  <p className="author">{author}:</p>
                  <p className="comment-text">{text}</p>
                  <p className="likes-count">likes: {likesCount}</p>
                </div>
              </Fragment>
            );
          })
        : null}
    </>
  );
}
export default Comments;
