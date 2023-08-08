import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db } from "../firebase/firebase";
import {
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";
import swal from "sweetalert";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const Review = ({ prevRating, ratedBy }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [reviewData, setReviewData] = useState({
    review: " ",
    rating: 0,
    author: "Arifszl",
    movieId: { id },
  });
  const [data, setData] = useState([]);
  const [reviewLoading, setReviewLoading] = useState(false);

  useEffect(() => {
    setReviewLoading(true);
    const getData = async () => {
      let q = query(reviewsRef, where("movieId.id", "==", id));

      const queryData = await getDocs(q);

      queryData.forEach((doc) => {
        setData((prev) => [...prev, doc.data()]);
      });
    };

    getData();
    setReviewLoading(false);
  }, []);
  console.log(data);
  const reviewHandler = async () => {
    try {
      await addDoc(reviewsRef, reviewData);
      const ref = await doc(db, "movies", id);
      await updateDoc(ref, {
        rating: prevRating + reviewData.rating,
        ratedBy: ratedBy + 1,
      });

      swal({
        title: "Successfully added",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
    } catch (e) {
      swal({
        title: Error,
        icon: "error",
        buttons: true,
        timer: 3000,
      });
    }
    navigate("/");
  };
  // console.log(data);
  return (
    <div className="mt-4 border-t-2 border-gray-700 w-full">
      <ReactStars
        size={35}
        half={true}
        value={reviewData.rating}
        onChange={(rate) => {
          setReviewData({ ...reviewData, rating: rate });
        }}
      />
      <input
        type="text"
        placeholder="share your review..."
        className="w-full header outline-none p-2"
        value={reviewData.review}
        onChange={(e) =>
          setReviewData({ ...reviewData, review: e.target.value })
        }
      />
      <button
        onClick={reviewHandler}
        className="bg-green-600 w-full p-1 mt-1 outline-none"
      >
        Share
      </button>

      {reviewLoading ? (
        <div
          className="mt-6"
          flex
          justify-center
        >
          {" "}
          <ThreeDots
            height={10}
            color="white"
          />{" "}
        </div>
      ) : (
        <div className="mt-4">
          {data.map((e, i) => {
            return (
              <div
                className="bg-gray-900 border-b border-gray-500 p-1 w-full mt-3 "
                key={i}
              >
                <div className="flex">
                  <h1 className="text-blue-500"> {e.author} </h1>
                </div>
                <ReactStars
                  size={15}
                  value={e.rating}
                  edit={false}
                />
                <p> {e.review}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Review;
