import React, { useState, useEffect } from "react";
import { CartState } from "../Context/Context";
import { Header } from "../Components/Header";
import img2 from "../assets/img2.png";
import { HiStar } from "react-icons/hi2";
import { FaTrash } from "react-icons/fa";

export const Cart = () => {
  const [total, setTotal] = useState();
  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
  }, [cart]);

  return (
    <>
      <Header />
      <section className="font-serif container mx-auto my-5">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <p className="text-semibold text-md">
          You have {cart.length} items in Cart.
        </p>
        <div className="flex justify-start items-start gap-4">
          <div className="left w-[50%] flex flex-col justify-center items-center">
            {cart.map((item) => {
              return (
                <article className="p-2 border-2 border-t-blue-500 mb-5 flex justify-between items-start gap-4 w-full">
                  <div className="w-[100px] h-[100px]">
                    <img
                      src={img2}
                      alt="Image"
                      className="w-[100%] h-[100%] object-cover"
                    />
                  </div>
                  <div className="content flex flex-col items-start gap-1/3">
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <p className="my-0 text-sm">By {item.educator}</p>
                    <div className="flex justify-center items-center gap-2">
                      <div>
                        <p className="my-0 text-blue-600 text-sm">
                          {item.ratings}
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <HiStar className="text-blue-600" />
                        <HiStar className="text-blue-600" />
                        <HiStar className="text-blue-600" />
                        <HiStar className="text-blue-600" />
                        <HiStar className="text-blue-600" />
                      </div>
                      <div>
                        <p className="my-0 text-sm text-[grey]">
                          ({item.reviews})
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <FaTrash
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        })
                      }
                      className="text-red-500"
                    />
                  </div>
                  <div>{item.price}</div>
                </article>
              );
            })}
          </div>
          <div className="right w-[50%] p-3">
            <h2 className="font-bold text-sm text-black">Total:</h2>
            <p className="font-semibold text-2xl my-2">Rs. {total}</p>
            <button className="bg-blue-500 text-white p-3 w-full rounded-sm my-3">
              Checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
