import React from 'react';

const LikeImg = ({ likeImg }) => {
  const { imgUrl, altText } = likeImg; 

  return (
    <div className="like-img">
      <img src={imgUrl} alt={altText} />
    </div>
  );
};

export default LikeImg;
