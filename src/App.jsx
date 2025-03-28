import React from 'react'

function App() {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="bg-white  rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Account Balance</h2>
          <p className="text-gray-700">Your current balance is:</p>
          <p className="text-2xl font-bold text-green-500">$5,000.00</p>  
        </div>       
      </div>
    </>
  )
}

export default App
