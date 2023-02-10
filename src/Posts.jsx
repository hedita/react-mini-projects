import React, { Fragment } from "react";
import posts from "./postsData";
import Comments from "./Comments";

function Posts() {
  const postsList = posts.map(({id,title,text,rate, image,comments}) => {
    return (
      <Fragment key={id}>
        <h2>{title}</h2>
        <p>Rate {rate} of 10</p>
        <img  display="block" width="100%" height= "300px" src={image.large} />
        <p>{text}</p>
        <Comments comments={comments} />
      </Fragment>
    )
  })
  return postsList;
}

export default Posts;