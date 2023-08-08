import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { moviesRef } from "../firebase/firebase";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Review from "./Review";

const Detail = () => {
  const { id } = useParams();

  const [movieData, setMovieData] = useState({
    name: " ",
    img: " ",
    year: " ",
    description: " ",
    rating: 0,
    ratedBy: 0,
  });

  useEffect(() => {
    const getData = async () => {
      const _doc = await doc(db, "movies", id);
      const _data = await getDoc(_doc);

      setMovieData(_data.data()); //  .data() is a method to get data
    };
    getData();
  }, []);

  console.log(movieData.rating / movieData.ratedBy);
  return (
    <div className="p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center">
      <img
        className="h-96 block md:sticky top-24"
        src={movieData.img}
      />
      <div className="md:ml-4 ml-0 w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-400">
          <span className="text-xl"> {movieData.name} </span>{" "}
        </h1>
        <ReactStars
          edit={false}
          value={movieData.rating / movieData.ratedBy}
          size={20}
        />
        <p>{movieData.description}</p>
        <div className="mt-2">
          <Review
            prevRating={movieData.rating}
            ratedBy={movieData.ratedBy}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
