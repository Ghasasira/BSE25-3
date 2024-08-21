import React from "react";
import "./blog.css";
import { blog } from "../../assets/data/data";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";

export const Card = () => {
  return (
    <>
      <div className="progressTitleContainer">
        <h1 className="text-2xl ">Project Updates</h1>
      </div>
      <section className="">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 m-4 md:m-10">
  {blog.map((item) => (
    <Link to={`/details/${item.id}`} key={item.id}>
      {/* START Card component */}
      <article className="bg-white shadow-2xl rounded-2xl p-4 md:p-5">
        <h1 className="font-bold text-yellow-500">{item.title}</h1>
        <p className="font-light text-gray-500 hover:font-bold">
          {item.desc.slice(0, 50)}
          <span>...</span>
        </p>
        <h6 className="text-sm text-gray-300 mb-3 md:mb-5">{item.date}</h6>
        <a href="#" className="rounded-lg py-2 px-4 text-center text-white bg-yellow-400 hover:bg-yellow-500">
          View More
        </a>
      </article>
      {/* END Card component */}
    </Link>
  ))}
</div>

        
      </section>
    </>
  );
};
