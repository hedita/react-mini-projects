import React, { Fragment,useState } from "react";

const posts = [
  {
    id: "a34a1918-41e0-4770-ab8c-317b98cc0ebc",
    title: "Learn React",
    text: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
    rate: 8,
    image: {
      large:
        "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
    },
    comments: [
      {
        id: "37ceb729-c515-441a-a680-7b963db42f25",
        author: "Siamak",
        avatar: "https://ui-avatars.com/api/?name=SI",
        text: "This article looks awesome.",
        likesCount: 3,
      },
      {
        id: "5e5323b0-746f-41df-99ea-016fc0312783",
        author: "Ati",
        avatar: "https://ui-avatars.com/api/?name=AT",
        text: "Very well explained!",
        likesCount: 1,
      },
      {
        id: "3347a32a2-4d15-4fd7-9d68-6eb86d23ac30",
        author: "Karen",
        avatar: "https://ui-avatars.com/api/?name=KA",
        text: "This is boring.",
        likesCount: 6,
      },
    ],
  },
  {
    id: "515e43b9-84d0-4f1b-836c-d2c4b216f765",
    title: "What is TypeScript",
    text: "TypeScript is JavaScript with syntax for types. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    rate: 3,
    image: {
      large: "https://miro.medium.com/max/1000/1*2f1lCdtqoP_BnPeZby3QRg.png",
    },
    comments: [
      {
        id: "6676ff7f-ce80-4b2d-a421-4811c72f1437",
        author: "Soheyl",
        avatar: "https://ui-avatars.com/api/?name=SO",
        text: "I think typescript would help in any case.",
        likesCount: 8,
      },
      {
        id: "651c9049-58ee-4cc8-b204-b252d8b5c59e",
        author: "Shamim",
        avatar: "https://ui-avatars.com/api/?name=SH",
        text: "Wooow.",
        likesCount: 2,
      },
    ],
  },
];

function Posts() {
  const [isShow, setIsShow] = useState(false);
  const handleComments = () => {
    setIsShow(!isShow);
  }
  const postsList = posts.map(({id,title,text,rate, image,comments}) => {
  const commentList = comments.map(({author,text,likesCount,id},comment) =>{
    return (
      <Fragment key={id}>
       <div style={{visibility: isShow ? "visible" : "hidden"}}>
         <p key={comment}>{author}:{text}</p>
         <p>likes: {likesCount}</p>
       </div>
      </Fragment> 
    ) 
  })
    return (
      <Fragment key={id}>
        <h2>{title}</h2>
        <p>Rate {rate} of 10</p>
        <img  display="block" width="100%" height= "300px" src={image.large} />
        <p>{text}</p>
        <button onClick={handleComments}>{isShow ? "Hide Comments" : "Show Comments"}</button>
        {commentList}
      </Fragment>
    )
  })
  return postsList;
}

export default Posts;