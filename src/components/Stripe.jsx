import React from 'react'
import Stripes from './Stripes'

function Stripe({val}) {

  return (
    <div className='bg-black w-[20%] px-4 md:px-6 py-2 md:py-6 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-700 flex justify-between items-center mt-32'>
    <img src={val.url} />
    <span className='text-xl font-semibold hidden sm:block'>{val.Number}</span>
     </div> 
  )
}

export default Stripe