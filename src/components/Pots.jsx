import React from 'react'

export default function Pots() {
  return (
    <>
      <div className="p-10 bg-gray-100 m-3 rounded-xl">
        <div className="flex justify-between items-center">
          <p className="m-2 font-semibold text-xl">
            Pots
          </p> 
          <p className="m-2 text-zinc-300 hover:cursor-pointer text-xl">
            See Details 
          </p>
        </div>
        
        <div className="flex max-md:flex-col items-center justify-between ">
          <div className=" p-20 bg-white rounded-xl flex items-center justify-evenly">
            <i className="text-green-500"></i>
            <div>
                <p className="text-gray-400">Total Saved</p>
                <h1 className="m-2 text-4xl text-black font-bold">
                    $850
                </h1>
            </div>
          </div>
            <div className="grid max-md:flex">
               <div className="p-3 border-l-[4px] rounded border-green-700 m-10">
                 <p className=" text-sm ">Savings</p>
                 <h1 className="text-xl">
                    $159
                 </h1>
                </div>
               <div className="p-3 border-l-[4px] rounded border-teal-400 m-10">
                 <p className=" text-sm ">Gift</p>
                 <h1 className="text-xl">
                    $159
                 </h1>
                </div>
            </div>
            <div className="grid max-md:flex">
               <div className="p-3 border-l-[4px] rounded border-zinc-500 m-10">
                 <p className=" text-sm ">Concert </p>
                 <h1 className="text-xl">
                    $159
                 </h1>
               </div>
               <div className="p-3 border-l-[4px] rounded border-yellow-500 m-10">
                 <p className=" text-sm ">Laptop</p>
                 <h1 className="text-xl">
                    $159
                 </h1>
               </div>
            </div>
        </div>
      </div>
    </>
  )
}
