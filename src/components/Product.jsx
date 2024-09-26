import React from 'react'
import Button from './Button'


function Product({val,mover,count}) {
  return (
    <div className='w-full lg:py-20 lg:px-40 lg:h-[23rem] md:h-[20rem] bg-black'>
        <div className=' mx-auto flex items-center justify-between' onMouseEnter={()=>{mover(count)}}>
          <h1 className='text-6xl capitalize font-semibold'>{val.title}</h1>
          <div className='dets w-[33%]'>
              <p className='mb-10'>{val.Para}</p>      
            <div className='flex gap-2'>
            {val.btn1 &&  <Button/>}
            {val.btn2 &&  <Button title='Case study'/>}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product