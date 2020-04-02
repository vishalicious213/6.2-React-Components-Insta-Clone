// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";


const LikeSection = props => {
  const [likes, setLikes] = useState(props.likes);

  return (
    <div>
      <div className="like-section-container"
        key="likes-icons-container">
        <div className="like-section">
          <div className="like-section-wrapper">
            <i className="far fa-heart"
              onClick={() => setLikes(likes + 1)} />
          </div>
          <div className="like-section-wrapper">
            <i className="far fa-comment" />
          </div>
          <div className="like-section-wrapper">
            <i className="far fa-paper-plane" />
          </div>
        </div>
        <div className="like-section-right">
          <div className="like-section-wrapper-right">
            <i className="far fa-bookmark" />
          </div>
        </div>
      </div>
      <p className="like-number"><b>{likes} likes</b></p>
    </div>
  )
};

export default LikeSection;
