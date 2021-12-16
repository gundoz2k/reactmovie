import React, { useState, useEffect } from "react";
import tmdbApi, { category } from "../../api/tmbdApi";
import PropTypes from "prop-types";
import { SwiperSlide, Swiper } from "swiper/react";
import apiConfig from "../../api/apiConfig";
import { Link } from "react-router-dom";
import MovieCard from "../movie-card/MovieCard";

import "./movielist.scss";

const MovieList = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.results);
    };
    getList();
  }, []);
  return (
    <div className="movie-list">
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        sliderPerView={"auto"}
        className="swiper-movie"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className="movie-list-swiperSlide">
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
