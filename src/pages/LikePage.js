import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const LikePage = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies ? window.localStorage.movies.split(","): [];
 
    for (let i = 0; i < moviesId.length; i++) {
        axios
        .get(
            `https://api.themoviedb.org/3/search/movie/${moviesId[i]}?
        api_key=ed82f4c18f2964e75117c2dc65e216d`
        )
        .then((res) => console.log(res.data));
       
    }
}, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coups de coeur <span>❤️</span>
      </h2>
      <div className="results"></div>
    </div>
  );
};

export default LikePage;
