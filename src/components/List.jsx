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
        `https://api.themoviedb.org/3/trending/${mediaToggle}/week?api_key=958093eb133e91a04b7e95d8e571c210`
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
            rating: item.vote_average,
            votes: item.vote_count,
          };
          // setList((prevList) => [...prevList, toAdd]);
          items.push(toAdd);
        });
        setList(items);
      });
  };

  return (
    <div className="container-fluid text-center">
      <p>Mode: {mediaToggle.toUpperCase()}</p>
      <div className="row justify-content-center">
        <div className="col-4 active">
          <h3 name="movie" value="movie" onClick={handleClick}>
            Movies
          </h3>
        </div>
        <div className="col-4">
          <h3 name="tv" value="tv" onClick={handleClick}>
            Television
          </h3>
        </div>
      </div>
      <div className="container">
        {list.map((item, index) => {
          return (
            <Card
              mode={mediaToggle}
              key={index}
              id={index + 1}
              title={item.title}
              content={item.summary}
              release={item.releaseDate}
              poster={item.poster}
            />
            // <li>{item.title}</li>
          );
        })}
      </div>
    </div>
  );
};

export default List;
