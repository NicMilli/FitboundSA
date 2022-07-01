import React from 'react'
import Home1 from '../assets/Home1.jpg'
import Home2 from '../assets/Home2.jpg'

function Home() {
  return (
    <div className='border'>
        <img src={Home1} alt="Home Img1" className='homeImg' />
        <img src={Home2} alt="Home Img2" className='homeImg' />
    </div>
  )
}

export default Home
