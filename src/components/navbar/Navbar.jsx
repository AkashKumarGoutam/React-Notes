import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="border-b-2 border-black bg-blue-100 p-2 shadow-xl">
        <div className="flex justify-between px-4">
            <div>
                <img src="https://media.licdn.com/dms/image/D4D12AQFZkbeVaofxzQ/article-cover_image-shrink_600_2000/0/1708033784779?e=2147483647&v=beta&t=8xtvmqPnaQ-hvmkf3Yj3ZhlytJ6mNTPopeFs5yRwazI"
                className="w-56 rounded-full" alt="img"/>
            </div>
          <div className=" flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-semibold ">
              Welcome the Akash World{" "}
            </h1>
            <h1 className="text-xl font-semibold">
              {" "}
              Here you explore your knowlage ,
            </h1>
            <div className="p-2">
              <Link
                to="/"
                className="px-3 py-1 rounded-lg bg-blue-800 text-white "
              >
                Back{" "}
              </Link>
            </div>
          </div>
          <div>
                <img src="https://static.javatpoint.com/tutorial/reactjs/images/reactjs-features.png" className="w-32 rounded-full" alt="img"/>
            </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
