import React from 'react'

function Footer() {
  return (
    <div className='w-full pt-10  bg-black overflow-hidden'>
        <div className='max-w-screen-xl mx-auto lg:flex justify-around'>
            <div className='text-center'>
                    <h1 className='text-[7rem] sm:text-[10rem]'>refokus.</h1>
            </div>
                <div className='Right flex w-full items-center justify-center gap-7 sm:gap-10 md:pl-16'>
                  <div className='min-width-[33.33%] opacity-[0.5] flex flex-col gap-2'>
                    <h1 className='pb-10 text-lg'>Socials</h1>
                    <h1>Twitter (X?)</h1>
                    <h1>Instagram</h1>
                    <h1>LinkedIn</h1>
                  </div>
                  <div className='min-width-1/3 flex flex-col gap-2 opacity-[0.5]'>
                    <h1 className='text-lg'>Sitemap</h1>
                    <h1 className='pt-4'>Home</h1>
                    <h1>Work</h1>
                    <h1>Carrer</h1>
                    <h1>Contact</h1>
                  </div>
                  <div className='min-width-1/3 flex flex-col gap-4'>
                      <p className='text-end text-lg pt-16'>Refokus is a Pioneering  digital <br/>Agency driven by design and <br/>Empowerd by technology </p>
                      <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" className='pl-10' />
                  </div>
                </div>
          
        </div>
        <div className='flex  justify-center gap-3 sm:gap-4 md:gap-10 text-regular pt-16'>
          <h4>Privacy Policy</h4>
          <h4>Cookie Policy</h4>
          <h4>Impressum</h4>
          <h4>Terms & Conditions</h4>
          <h4>Webflow Agency</h4>
        </div>
    </div>
   
  )
}

export default Footer