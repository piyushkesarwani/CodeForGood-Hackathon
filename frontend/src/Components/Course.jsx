import React from "react";
import { HiStar } from "react-icons/hi2";
import img1 from "../assets/img1.webp";
import { CartState } from "../Context/Context";

export const Course = ({ item }) => {
  const { id, title, desc, educator, reviews, ratings, price, category } = item;
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <>
      <article className="w-[320px] h-auto flex flex-col items-start gap-1/4 p-2 border border-[grey] bg-white">
        <div className="w-[300px] h-[40%]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={img1}
            alt="Image"
          />
        </div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-md">{desc}</p>
        <p className="text-sm text-[grey]">{educator}</p>
        <div className="flex justify-center items-center gap-2">
          <div>
            <p className="my-0 text-blue-600 text-sm">{ratings}</p>
          </div>
          <div className="flex justify-center items-center">
            <HiStar className="text-blue-600" />
            <HiStar className="text-blue-600" />
            <HiStar className="text-blue-600" />
            <HiStar className="text-blue-600" />
            <HiStar className="text-blue-600" />
          </div>
          <div>
            <p className="my-0 text-sm text-[grey]">({reviews})</p>
          </div>
        </div>
        <div>
            <p className="font-semibold mt-3 text-md">₹ {price}</p>
        </div>
        <div>
          {cart.some((p) => p.id === item.id) ? (
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item,
                })
              }
              className="bg-red-600 text-white p-2 rounded-md mt-3 w-full"
            >
              Remove From Cart
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: item,
                })
              }
              className="bg-blue-600 text-white p-2 rounded-md mt-3 w-full"
            >
              Add to Cart
            </button>
          )}
        </div>
      </article>
    </>
  );
};
