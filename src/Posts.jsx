import React, { Fragment } from "react";
import posts from "./postsData";
import Comments from "./Comments";

function Posts() {
  const postsList = posts.map(({ id, title, text, rate, image, comments }) => {
    return (
      <Fragment key={id}>
        <h2 className="header">{title}</h2>
        <p className="rate">Rate {rate} of 10</p>
        <img className="img" src={image.large} />
        <p className="text">{text}</p>
        <Comments comments={comments} />
      </Fragment>
    );
  });
  return postsList;
}

export default Posts;
