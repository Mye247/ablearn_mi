/* eslint-disable no-unused-vars */
import React from "react";

import posts from "../data/posts.json";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../redux/store";
console.log(posts);

function HomePage() {
  const posts = useSelector((state)=> state.posts.posts);

  return (
    <>
      <main className="bg-yellow-200">
        <section>
          <ul className="grid grid-cols-5 gap-y-10 ml-10 pt-5 ">
            {posts.map((item) => (
              <li
                className=" w-[200px] bg-gray-100 flex gap-5 rounded-xl border"
                key={item.userId}
              >
                <Link to={`/posts/${item.id}`} className="bg-cyan-200 p-5 rounded-xl">
                  {item.id}
                </Link>
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default HomePage;
