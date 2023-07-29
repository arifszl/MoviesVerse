import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { moviesRef } from "../firebase/firebase";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Detail = () => {
  const { id } = useParams();

  const [movieData, setMovieData] = useState({
    name: " ",
    img: " ",
    year: " ",
    description: " ",
  });

  useEffect(() => {
    const getData = async () => {
      const _doc = await doc(db, "movies", id);
      const _data = await getDoc(_doc);

      setMovieData(_data.data());
    };
    getData();
  }, []);

  return (
    <div className="p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center">
      <img
        className="h-96 block md:sticky top-24"
        src={movieData.img}
        alt=""
        srcset=""
      />
      <div className="md:ml-4 ml-0 w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-400">
          Dune <span className="text-xl"> {movieData.name} </span>{" "}
        </h1>
        <ReactStars
          edit={false}
          value={5}
          size={20}
        />
        <p>{movieData.description}</p>
      </div>
    </div>
  );
};

export default Detail;
