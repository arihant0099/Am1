import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductBTN from "./AddProductBTN.jsx";
import Offer from "./UI/Offer.jsx";

function Product({ className, data }) {
  const [currentType, setCurrentType] = useState(data.producttypes[0] || {});
  const navigate = useNavigate();

  const imageUrl = data.images.replace(/\\/g, '/');
  console.log("Image URL:", imageUrl);


  const onClickProductHandler = () => {
    navigate(`/pd/${data.id}`);
  };

  const withoutDiscount = Math.ceil(
    currentType.price + (currentType.price * currentType.discount) / 100
  );
  const priceDifference = withoutDiscount - currentType.price;

  return (
    <div
      onClick={onClickProductHandler}
      className={`${
        className ? className : ""
      } shrink-0 relative bg-white shadow h-72 flex p-2 rounded-md flex-col justify-between border`}
    >
      {/* OUT OF STOCK */}
      {currentType.stock === 0 && (
        <div className="flex z-10 justify-center items-center opacity-80 absolute top-0 left-0 bg-gray-100 w-full h-full rounded-md">
          <p className="relative bottom-10 text-xs font-bold text-white bg-slate-700 px-2 py-1 rounded-md">
            Out of Stock
          </p>
        </div>
      )}

      {/* IMAGE */}
      <div className="flex justify-center">
        <img
          className="w-24 h-24 object-cover object-center"
          src={imageUrl}
          alt="product image"
        />
      </div>

      {/* NAME */}
      <p className="text-sm font-semibold">{data.name}</p>

      {/* OFFER */}
      {currentType.discount !== 0 && <Offer discount={currentType.discount} />}

      {/* TYPE */}
      <select
        onChange={(e) => {
          const selectedType = JSON.parse(e.target.value);
          setCurrentType(selectedType);
        }}
        value={JSON.stringify(currentType)}
        className="text-xs bg-white font-thin outline-none w-full"
      >
        {data.producttypes && data.producttypes.map((type) => (
          <option value={JSON.stringify(type)} key={type.id}>
            {type.name}
          </option>
        ))}
      </select>

      {/* ADD BUTTON & PRICE */}
      <div className="flex flex-col gap-2 md:flex-row justify-between">
        <div className="flex justify-between items-center md:block">
          <p className="text-sm font-semibold">${currentType.price}</p>
          {priceDifference !== 0 && (
            <p className="text-xs text-gray-600 line-through">
              ${withoutDiscount}
            </p>
          )}
        </div>
        <AddProductBTN id={currentType.id} />
      </div>
    </div>
  );
}

export default Product;
