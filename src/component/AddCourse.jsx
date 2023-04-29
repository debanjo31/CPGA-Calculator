import React from "react";
import { FaPlusCircle } from "react-icons/fa";

function AddCourse({ setCount }) {
  const add = setCount;

  return (
    <div>
      <button className="addCourse" onClick={add}>
        <FaPlusCircle /> add more courses
      </button>
    </div>
  );
}

export default AddCourse;
