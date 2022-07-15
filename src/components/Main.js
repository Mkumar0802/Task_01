import React from 'react'
import Ev from '../Assets/EV.png'



function Main() {
  return (
    <div className=''>
      <div className='flex flex-row '>
        <div className='rounded-lg py-16 px-3'>
          <img className='rounded-2xl object-cover h-72 w-96' src={Ev} alt="Ev"></img>
        </div>
        <div className='px-14 py-16' >
          <h1 className='text-slate-400 text-2xl font-semibold '>
            Learn how to we <span className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-emerald-200 to-lime-400'> built  our own EV</span>
          </h1>
          <div className='w-2/4'>
          <p className='text-justify'>Our team of experts has built an in-house electric vehicle with a goal to help its students gain insights into the future of the automotive industry</p>
          </div>
         


          <div>
            <ul className='py-8'>
              <li className='flex '>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-lime-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Accelerates from zero to top speed in 6 seconds
              </li>
              <li className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-lime-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Carrying Capacity of 5 people
              </li>
              <li className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-lime-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Range of 40 kms
              </li>
            </ul>
            <button className=' bg-gradient-to-r from-emerald-200 to-lime-400 text-black rounded-md p-2 font-semibold px-6'>Start Learning for FREE</button>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Main