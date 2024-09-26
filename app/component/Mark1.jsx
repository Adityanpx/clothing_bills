import React from 'react'
import Image from "next/image";
import Mark2 from './Mark2';
import Box from './Box';


function Mark1() {
  return (

    <div className="h-auto flex justify-center items-center">
    <div className="border flex flex-col text-center border-black w-2/4 h-auto">
    <div className="flex justify-between">
      <div className="mt-5 ml-6 border border-black h-24 w-56">
        <h1 className="font-extrabold text-3xl mt-3 ml-2 font-varela">
          <span className="text-red-600">Sai </span> Stitch
        </h1>
        <h2 className="bg-green-500 mt-2 rounded-sm text-white text-sm mx-1">
          The Mens Fashion Tailor...
        </h2>
      </div>
      <div className="flex flex-col">
      <div className="mt-4 mr-16 text-green-600 ">
        <h1 className="">
          PERFECT <span className=" text-xl font-extrabold">FITTING</span> 
        </h1>
        <h1 className="ml-12">
          BEST <span className="text-xl font-extrabold">SNITCHING</span> 
        </h1>

      </div>
      <div className="mt-3 ml-20 flex">
        <h1 className="text-xl text-red-600 font-bold">No : </h1>
        <input
className="border-b border-black outline-none"
type="text"
/>

      </div>
      </div>
      {/* Align 'Cash memo' to the end */}
      <div className="flex justify-end rounded-sm h-10 p-2 border-black bg-green-500
      text-white font-bold ">
        <h1 className="font-extrabold">Cash Memo</h1>
      </div>
      </div>
      <Mark2/>
      
    </div>
   
  </div>)
}

export default Mark1