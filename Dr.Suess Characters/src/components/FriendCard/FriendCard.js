import React from "react";
import "./FriendCard.css";




const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} id={props.id} src={props.image} onClick={() => props.calculateScore(props.id)}>

    </img>
  </div>
</div>
      
);

export default FriendCard;


