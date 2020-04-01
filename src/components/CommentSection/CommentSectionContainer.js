// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data.js";

const CommentSection = props => {
  // Add state for the comments
  const [postsData, setPostsData] = useState(props.comments);
  // console.log(comments);
  // console.log('postsData = props.data.comments', postsData);
  // console.log('comments', postsData.comments);

  return (
    postsData.map(post => {
      console.log(post.username, post.text)
      return (
        <div>
          <Comment key={post.username} comment={post} />
        </div>
      );
    })
  )
};

export default CommentSection;