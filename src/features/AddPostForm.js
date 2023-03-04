import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postAdded } from "./postSlice";
function AddPostForm() {
  const [name, setName] = useState("");
  const [qoute, setQoute] = useState("");
  const dispatch = useDispatch();
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onContentChange = (e) => {
    setQoute(e.target.value);
  };
  const onPostQoute = () => {
    if (name && qoute) {
      dispatch(postAdded(qoute, name));
      setName("");
      setQoute("");
    }
  };
  const canPost = Boolean(name) && Boolean(qoute);

  return (
    <section className="backdrop-blur-lg shadow-lg bg-white/20 rounded-lg   py-4 px-8 mt-5 font-bold ">
      <p className="text-center text-xl text-gray-50">Add a new Qoute</p>
      <form className="flex flex-col mt-2">
        <div className="w-full flex justify-between text-gray-50 text-lg focus:outline-none">
          <label htmlFor="name " className=" text-sm sm:text-lg w-2/6">
            Owner name
          </label>
          <input
            className="w-4/6 h-8 bg-transparent border-gray-50  rounded-full px-2 border-2 focus:border-purpley focus:outline-none"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div className="text-lg text-gray-50 flex justify-between items-center mt-1">
          <label htmlFor="qoute" className="text-sm sm:text-lg w-2/6 ">
            Qoute
          </label>
          <input
            className="w-4/6 h-8 bg-transparent border-gray-50  rounded-full px-2 border-2 focus:border-purpley focus:outline-none"
            type="text"
            id="qoute"
            name="qoute"
            value={qoute}
            onChange={onContentChange}
          />
        </div>

        <button
          type="button "
          className="text-sm w-full sm:text-lg text-gray-50 shadow-lg py-1 backdrop-blur-xl rounded-full mt-3 hover:bg-purpley "
          onClick={onPostQoute}
          disabled={!canPost}
        >
          Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
