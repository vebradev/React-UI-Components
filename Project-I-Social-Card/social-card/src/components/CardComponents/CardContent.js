import React from "react";
import "./Card.css";

function CardContent({ title, text, link }) {
  return (
    <div className="cardContent">
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={link} target="_blank">
        {link}
      </a>
    </div>
  );
}

export default CardContent;
