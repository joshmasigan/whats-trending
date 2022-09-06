import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "./Card";

const List = () => {
  const [mediaToggle, setMediaToggle] = useState("movie");
  const [list, setList] = useState([]);

  const isFirstRender = useRef(true);

  const handleClick = (e) => {
    setMediaToggle(e.target.attributes.value.value);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    updateList();
  }, [mediaToggle]);

  const updateList = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/${mediaToggle}/day?api_key=958093eb133e91a04b7e95d8e571c210`
      )
      .then((response) => {
        let items = [];
        response.data.results.forEach((item) => {
          const toAdd = {
            title: mediaToggle === "movie" ? item.title : item.name,
            summary: item.overview,
            releaseDate:
              mediaToggle === "movie" ? item.release_date : item.first_air_date,
            poster: "https://image.tmdb.org/t/p/original/" + item.poster_path,
            rating: item.vote_average.toFixed(2),
            votes: item.vote_count,
          };
          // setList((prevList) => [...prevList, toAdd]);
          items.push(toAdd);
        });
        setList(items);
      });
  };

  return (
    <div
      className={
        mediaToggle === "movie"
          ? "container-fluid main-container-movie"
          : "container-fluid main-container-tv"
      }
    >
      <div className="row justify-content-center text-center">
        <div
          className={
            mediaToggle === "movie"
              ? "col-sm-2 media-header active-movie"
              : "col-sm-2 media-header movie-toggle"
          }
        >
          <h3 name="movie" value="movie" onClick={handleClick}>
            Movies
          </h3>
        </div>
        <div
          className={
            mediaToggle === "tv"
              ? "col-sm-2 media-header active-tv "
              : "col-sm-2 media-header tv-toggle"
          }
        >
          <h3 name="tv" value="tv" onClick={handleClick}>
            Television
          </h3>
        </div>
      </div>
      <div className="container">
        {list.map((item, index) => {
          return (
            <Card
              design={mediaToggle}
              mode={mediaToggle}
              key={index}
              id={index + 1}
              title={item.title}
              content={item.summary}
              release={item.releaseDate}
              poster={item.poster}
              score={item.rating}
              votes={item.votes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
