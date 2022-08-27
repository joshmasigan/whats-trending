import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

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
    console.log(list);
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
            title: item.title,
            summary: item.overview,
            release: item.release_date,
            poster: item.poster_path,
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
      <h1>Mode: {mediaToggle}</h1>
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
        {/* <div className="col-4">
          <h3 name="person" value="person" onClick={handleClick}>
            People
          </h3>
        </div> */}
      </div>
      {/* <ul>map list</ul> */}
    </div>
  );
};

export default List;
