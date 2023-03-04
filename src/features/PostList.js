import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

function PostList() {
  const posts = useSelector(selectAllPosts);
  // const orderposts = posts.slice().sort((a, b) => b.date.localCompare(a.date));
  const AllPosts = posts.map((post) => {
    return (
      <article
        key={post.id}
        className="backdrop-blur-2xl bg-white/20 p-6 mt-5 rounded-lg w-full  shadow-md hover:shadow-xl text-gray-50 "
      >
        <p className="text-lg font-bold">{post.qoute}</p>
        <p className="mt-2">{post.name}</p>
        {/* <TimeAgoPost timestamp={post.date} /> */}
      </article>
    );
  });
  return <section>{AllPosts}</section>;
}

export default PostList;
