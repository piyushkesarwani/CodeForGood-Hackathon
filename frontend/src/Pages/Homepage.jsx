import React, { useState } from "react";
import { Header } from "../Components/Header";
import img2 from "../assets/img2.png";
import { data } from "../Data";
import { Course } from "../Components/Course";
import { CartState } from "../Context/Context";
import { Footer } from "../Components/Footer";

export const Homepage = () => {
  const [courses, setCourses] = useState(data);

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const filterCategories = (category) => {
    if (category === "All") {
      setCourses(data);
      return;
    }
    setCourses(data.filter((item) => item.category === category));
  };

  const AllCategories = ["All", ...new Set(data.map((item) => item.category))];
  return (
    <>
      <Header />
      {console.log("ALl Categories = ", AllCategories)}
      <section className="container mx-auto font-mono">
        <div className="flex justify-around items-center gap-10">
          <div className="w-[50%]">
            <h2 className="text-lg font-semibold">
              Simplifying E-learning solutions for Students
            </h2>
            <p className="text-lg my-2 font-regular">
              Try a course with coding exercises — now with a new look and more
              advanced learning features.
            </p>
            <button className="bg-black text-white p-3 my-4 border rounded-md">
              Explore Courses
            </button>
          </div>
          <div className="w-[50%] h-auto">
            <img
              className="w-[100%] h-[100%] object-cover"
              src={img2}
              alt="Image"
            />
          </div>
        </div>

        <div className="my-5">
          <h2 className="text-xl font-semibold">
            A broad selection of courses to learn from Senior Developers.
          </h2>
          <p className="text-lg font-regular">
            Choose from 100+ online courses to broaden you knowledge in Coding
            and Programming
          </p>
        </div>

        <div className="categories flex justify-center items-center flex-wrap flex-shrink">
          {AllCategories.map((category, index) => {
            return (
              <button
                onClick={() => filterCategories(category)}
                className="bg-blue-700 text-white p-2 mx-2 rounded-md text-sm"
                key={index}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="dataContainer flex justify-center items-center flex-wrap gap-2">
          {courses.map((item) => {
            return (
              // <div className="p-4 border border-[grey] mt-5">
              //   <div className="my-6">
              //     <h3 className="font-semibold">{`Expand your career Opportunities by learning ${item.category}`}</h3>
              //     <p className="font-regular text-md my-2">
              //       With our course, your career advancement will increase and
              //       you can also be places at one of the top companies. Lorem
              //       ipsum dolor sit amet, consectetur adipisicing elit.
              //       Accusamus sapiente magnam inventore! Necessitatibus aperiam,
              //       possimus ratione at nam delectus nihil deserunt dignissimos
              //       ducimus consequuntur maxime eaque illo repellat, odit totam?
              //     </p>
              //     <button className="bg-black text-white p-2 rounded-md my-2">
              //       Explore {category}
              //     </button>
              //   </div>
              // </div>
              <div className="flex justify-center items-center mx-2 mt-5 flex-wrap">
                <Course item={item} />
              </div>
            );
          })}
        </div>
        <Footer />
      </section>
    </>
  );
};
