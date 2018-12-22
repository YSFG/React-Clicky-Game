import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <div className="img-container">
        <img src={props.image} alt={props.name} />
      </div>      
    </div>
  )
}

export default FriendCard;