import React from 'react'
import SideBar from './components/SideBar'
import Overview from './components/Overview'
import Pots from './components/Pots'

// ALL PLACES I CREATED A CIRCLE ARE FOR MY WEB ICONS 
function App() {

  return (
    <>
        <SideBar/>
        <div className="p-5 sm:ml-60 sm:mb-20 md:ml-60 lg:ml-60 xl:ml-60 ">
          <Overview/>
          <Pots/>
        </div>
    </>
  )
}

export default App
