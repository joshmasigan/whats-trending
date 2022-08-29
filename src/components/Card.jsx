import React from "react";

const Card = (props) => {
  return (
    <div className="row mx-5 my-5 justify-content-center">
      <div className="card col-8">
        <img src={props.poster} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">
            {props.id}. {props.title}
          </h5>
          <p className="card-text">{props.content}</p>
          <p className="card-subtitle">
            {props.mode === "movie"
              ? "Original release date: "
              : "First aired: "}
            <b>{props.release}</b>
          </p>
          <p>
            <b>{props.score}/10</b> ⭐️ from <b>{props.votes}</b> ratings
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
