import React from 'react'
import { Navbar } from '../../Components/Navbar'
// import { Footer } from '../../Components/Home/Footer'
import { JoinUs } from '../../Components/Joinus/JoinUs'

export const Joinus = () => {
  return (
    <>
     <div className="joinus">
        <Navbar />
        <JoinUs />
        {/* <Footer /> */}
      </div>
    </>
  )
}
