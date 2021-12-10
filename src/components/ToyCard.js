import React, { useState } from "react";

function ToyCard({toy, handleDelete}) {

  const {name, image, likes, id} = toy
  const [addLikes, setAddLikes] = useState(likes)

  function handleLikes() {
    setAddLikes(addLikes + 1)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{addLikes} Likes </p>
      <button className="like-btn" onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={()=>handleDelete(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
