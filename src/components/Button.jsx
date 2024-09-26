import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import { gsap } from 'gsap';
function Button({title='Get Stared'}) {
  return (
    <div className='hidden md:flex max-w-52 overflow-hidden px-6 py-1.5 bg-zinc-200 rounded-full text-black items-center justify-center gap-3 cursor-pointer'>
        <span className='btn text-md text-regular'>{title}</span><BsArrowReturnRight size={13} className='btn' /><br/>
    </div>
  )
}

export default Button