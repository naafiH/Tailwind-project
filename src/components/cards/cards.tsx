import React from "react";
import Img2 from "../assets/png1.png";

export default function cards() {
  return (
      <div className="w-full py-[10rem] px-4">
    {/* // card 1 */}
      <div className="  max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8  ">
        <div className="bg-gray-100 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-white ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent
             "
            src={Img2}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-4">user1</h2>
          <p className="text-center text-4xl font-bold">$234</p>
          <div className="text-center">
            <p className="py-2 border-b mx-8 mt-8">500 gb storage</p>
            <p className="py-2 border-b mx-8">500 gb storage</p>
            <p className="py-2 border-b mx-8">500 gb storage</p>
          </div>
          <button className="bg-blue-500 w-[200px] rounded-md font-mono my-6 mx-auto py-3 text-white">start trial</button>
        </div>
    {/* // card 1  end*/}
    {/* // card 2 */}

        <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300  hover:bg-white ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent "
            src={Img2}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-4">user1</h2>
          <p className="text-center text-4xl font-bold">$234</p>
          <div className="text-center">
            <p className="py-2 border-b mx-8 mt-8">500 gb storage</p>
            <p className="py-2 border-b mx-8">500 gb storage</p>
            <p className="py-2 border-b mx-8">500 gb storage</p>
          </div>
          <button className="bg-blue-500 w-[200px] rounded-md font-mono my-6 mx-auto py-3 text-white">start trial</button>
        </div>
    {/* // card 2 end */}
    {/* // card 3 */}
        <div className="bg-gray-100  w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-white ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent "
            src={Img2}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-4">user1</h2>
          <p className="text-center text-4xl font-bold">$234</p>
          <div className="text-center">
            <p className="py-2 border-b mx-8 mt-8">500 gb storage</p>
            <p className="py-2 border-b mx-8">500 gb storage</p>
            <p className="py-2 border-b mx-8">500 gb storage</p>
          </div>
          <button className="bg-blue-500 w-[200px] rounded-md font-mono my-6 mx-auto py-3 text-white">start trial</button>
        </div>
      </div>
    {/* // card 3 end*/}
    </div>
  );
}
