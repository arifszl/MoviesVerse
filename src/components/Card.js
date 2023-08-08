import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const Card = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await getDocs(moviesRef);

      res.forEach((doc) => {
        setData((prv) => [...prv, { ...doc.data(), id: doc.id }]);
      });
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-between px-3 mt-2">
      {loading ? (
        <div className="w-full flex justify-center item-centre h-96">
          <TailSpin />
        </div>
      ) : (
        data.map((e, i) => {
          return (
            //sending id as params
            <Link to={`/detail/${e.id}`}>
              <div
                key={i}
                className="card font-medium shadow-lg p-2 hover:-translate-y-2 cursor-pointer mt-3 "
              >
                <img
                  className="h-60 md:h-72 w-45 "
                  src={e.img}
                />
                <h1>
                  <span className="text-gray-500">Name : </span>
                  {e.name}
                </h1>
                <h1>
                  <span className="text-gray-500">
                    Rating :
                    <ReactStars
                      edit={false}
                      value={e.rating / e.ratedBy}
                      size={20}
                    />
                  </span>
                </h1>
                <h1>
                  <span className="text-gray-500">Year : </span> {e.year}{" "}
                </h1>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Card;
