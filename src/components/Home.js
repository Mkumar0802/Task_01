import React from 'react'
import Card from './Card'
import Main from './Main'

function Home() {
  return (
    <div className= 'bg-black text-white h-screen w-screen' >
      <Main/>
      <Card/>
    </div>
  )
}

export default Home