import React, { useContext } from "react";
import ProductDetailsContext from "../../../Context/ProductDetailsPageContext";

function MainPhotoContainer({ mainImage }) {
  const { images } = useContext(ProductDetailsContext);

  // Use images directly as a path or URL for the image
  const imageSrc = images || ''; // Fallback to an empty string if images is undefined

  console.log(imageSrc); // Log to check the actual value of images

  return (
    imageSrc && (
      <div className="hidden overflow-hidden md:block mx-auto transition-all hover:shadow-xl w-[25rem] h-[25rem]">
        <img
          className="w-full h-full hover:scale-150 transition-all object-cover object-center"
          src={imageSrc}
          alt="main product image"
        />
      </div>
    )
  );
}

export default MainPhotoContainer;
