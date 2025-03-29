import React from 'react'

export default function Overview() {
  return (
    <>
    <div className="  ">
        <div className="flex justify-between items-center">
            <h1 className="m-4 text-3xl font-bold">
                Overview
            </h1>

            <i className="bg-zinc-600 rounded-full p-4 m-4 cursor-pointer"></i>
        </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  text-gray-400 ">
        <div className="p-10 bg-black m-2 rounded-xl">
            <div className="flex justify-between items-center">
                <p className="m-2">
                    Current Balance
                </p>
                <i className="bg-white rounded-full p-2 cursor-pointer"></i>
            </div>
            <h1 className="m-2 text-4xl text-white font-bold">
                $4,814.00
            </h1>
        </div>
        <div className="p-10 bg-slate-300 m-2 rounded-xl">
            <div className="flex justify-between items-center">
                <p className="m-2 text-slate-700">
                    Income
                </p>
                <i className="bg-white rounded-full p-2 cursor-pointer"></i>
            </div>
            <h1 className="m-2 text-4xl text-black font-bold">
                $3,814.25
            </h1>
        </div>
        <div className="p-10 bg-zinc-500 m-2 rounded-xl">
            <div className="flex justify-between items-center">
                <p className="m-2 text-slate-200">
                    Expenses
                </p>
                <i className="bg-white rounded-full p-2 cursor-pointer"></i>
            </div>
            <h1 className="m-2 text-4xl  text-slate-200 font-bold">
                $1,700.50
            </h1>
        </div>
      </div>
    </div>
    </>
  )
}
