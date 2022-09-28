import React from "react";

const Card = (props) => {
  return (
    <div className="row mx-5 my-5 justify-content-center">
      <div
        className={
          props.design === "movie"
            ? "card movie-card text-right col-8"
            : "card tv-card text-right col-8"
        }
      >
        <div className="row no-gutters">
          <div className="col-xl-5">
            <img src={props.poster} className="card-img" />
          </div>
          <div className="col-xl-7">
            <div className="card-body">
              <div className="row">
                <h5 className="card-title col-xl-9">
                  {props.id}. "{props.title}"
                </h5>
                <p className="card-text col-xl-3">
                  <b>{props.score}/10</b> ⭐️
                </p>
              </div>
              <hr></hr>
              <p className="card-text">{props.content}</p>
              <hr></hr>
              <div className="date">
                <p className="card-text">
                  {props.mode === "movie"
                    ? "Original release date: "
                    : "First aired: "}
                  <b>{props.release}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
