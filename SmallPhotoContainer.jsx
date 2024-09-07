import React, { useContext } from "react";
import ProductDetailsContext from "../../../Context/ProductDetailsPageContext";

function SmallPhotoContainer({ setMainImage, mainImage }) {
  const { images } = useContext(ProductDetailsContext);

  function setMainImageHandler(index) {
    setMainImage(index);
  }

  // If images is already an array, no need to parse
  const imagesArr = Array.isArray(images) ? images : [];

  return (
    <div className="hideScrollbar mx-auto w-[70vw] md:w-[25rem] overflow-scroll flex gap-5">
      {imagesArr &&
        imagesArr.map((url, index) => (
          <Image
            mainImage={mainImage}
            setMainImageHandler={setMainImageHandler}
            index={index}
            key={index}
            url={url}
          />
        ))}
    </div>
  );
}

export default SmallPhotoContainer;

function Image({ url, mainImage, setMainImageHandler, index }) {
  return (
    <img
      onClick={() => setMainImageHandler(index)}
      className={`${
        mainImage === index ? "md:border-2 border-green-600" : "md:border"
      } w-[70vw] transition-all md:w-20 md:h-20 rounded-xl`}
      src={url}
      alt=""
    />
  );
}
