import React from "react";

const Card = (props) => {
  return (
    <div className="row mx-5 my-5 justify-content-center">
      <div className="card text-right col-8">
        <div className="row no-gutters">
          <div className="col-sm-5">
            <img src={props.poster} className="card-img" />
          </div>
          <div className="col-sm-7">
            <div className="card-body">
              <div className="row">
                <h5 className="card-title col-sm-9">
                  {props.id}. "{props.title}"
                </h5>
                <p className="card-text col-sm-3">
                  <b>{props.score}/10</b> ⭐️
                  {/* <b>{props.votes} on MovieDB.org</b> */}
                </p>
              </div>
              <hr></hr>
              <p className="card-text">{props.content}</p>
              <div className="date">
                <p className="card-subtitle text-muted ">
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
