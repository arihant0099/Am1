import React from "react";
import { NavLink } from "react-router-dom";

function MainCategory({ name, image, id, firstSubCategoryId }) {
  // Normalize the path for different environments
  const imageUrl = image.replace(/\\/g, '/'); // Convert backslashes to forward slashes

  return (
    <NavLink to={`/pl/${id}/${firstSubCategoryId}`}>
      <div className="hover:bg-green-50 transition-all bg-white shrink-0 w-28 h-40 gap-3 flex flex-col justify-center items-center">
        <img
          className="w-20 object-cover object-center"
          src={`http://localhost:5000/${imageUrl}`} // Ensure the URL is correct
          alt="mainCategory"
          onError={() => console.log('Error loading image:', `http://localhost:5000/${imageUrl}`)} // Debugging line
        />
        <p className="text-center">{name}</p>
      </div>
    </NavLink>
  );
}

export default MainCategory;
