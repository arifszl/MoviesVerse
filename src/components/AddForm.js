import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { moviesRef } from "../firebase/firebase";
import { addDoc } from "firebase/firestore";
import swal from "sweetalert";
const AddForm = (props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: " ",
    year: " ",
    img: " ",
    description: " ",
  });
  const [loading, setLoading] = useState(false);

  const addMovie = async () => {
    setLoading(true);
    try {
      await addDoc(moviesRef, form);

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

    setLoading(false);
    navigate("/");
  };

  return (
    <section className="text-white body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-Red-900">
            Add your Movie
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-white"
                >
                  Name
                </label>
                <input
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  value={form.name}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="year"
                  className="leading-7 text-sm text-white "
                >
                  Release Year
                </label>
                <input
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  value={form.year}
                  type="text"
                  id="year"
                  name="year"
                  className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="img"
                  className="leading-7 text-sm text-white "
                >
                  Movie poster link
                </label>
                <input
                  onChange={(e) => setForm({ ...form, img: e.target.value })}
                  value={form.img}
                  type="text"
                  id="img"
                  name="img"
                  className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="description"
                  className="leading-7 text-sm text-gray-600"
                >
                  Description
                </label>
                <textarea
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  id="message"
                  name="message"
                  value={form.description}
                  className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                onClick={addMovie}
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                {" "}
                {loading ? <ThreeDots color="white" /> : "Add"}{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddForm;
