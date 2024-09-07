import { Link } from "react-router-dom";

function Brand() {
  return (
    <Link to="/">
      <div className=" md:flex border-r  w-40 h-full  justify-center items-center cursor-pointer">
        <h1 className=" text-3xl  font-bold">
          <span className=" text-yellow-400 ">Aadi</span>
          <span className="text-green-500">Mart</span>
        </h1>
      </div>
    </Link>
  );
}

export default Brand;