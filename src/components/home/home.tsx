import React from "react";
import Typed from "react-typed";

export default function Home() {
  return (
    <div className="text-blue-500 ">
      <div className="max-w-[800px] mt-[-90px] w-full h-screen  mx-auto text-center flex flex-col justify-center ">
        <p className="text-zinc-600">The next level of webdesign</p>

        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with Tailwind
        </h1>
        <div className="flex justify-center py-4">
          <p className="text-zinc-600 md:text-5xl sm:text-3xl text-xl ">
            Fast , Flexible , Easy , For.. 
          </p>
          <Typed className="text-zinc-600 md:text-5xl sm:text-3xl text-xl md:pl-4 pl-3" strings={["Edit", "React", "Webdev"]} typeSpeed={120} backSpeed={140} loop/>
        </div>
        <p className=" md:text-2xl text-sm font-bold text-gray-500 p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quo? Optio iusto ipsum voluptates nobis non fugiat ut, itaque, consequatur impedit quis id at eius officia dolore officiis ducimus </p>
        <button className="bg-blue-500 w-[200px] rounded-md font-mono my-6 mx-auto py-3 text-white">Start Now</button>

      </div>
    </div>
  );
}
