import { motion } from 'framer-motion';
import React from 'react'

function Marquee(){

  let images1= [
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg'} ,
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg'} ,
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg'},
    {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg'},
    ];
    let images2 =[
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275a4f001b08a4e28bc_weglot.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275ff2309d9d743ec75_doxel.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/661b2455cb60f1919ab48e20_Logo.svg '},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275a4f001b08a4e28bc_weglot.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275ff2309d9d743ec75_doxel.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/661b2455cb60f1919ab48e20_Logo.svg '},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg'},
      {imgsurls:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg'}];
  return (
    <div className='bg-black pt-24 pl-8 relative w-full overflow-hidden '> 
      
       <motion.div initial={{x:'0'}} animate={{x:'-100%'}} transition={{ease:'linear',duration:25,repeat:Infinity}} 
       className='bg-black flex gap-8 lg:gap-28 '>
       {images1.map((urls,index)=> <img src={urls.imgsurls} alt='jadhna thya' key={index}/>)}
       <br/>
     
       </motion.div>
       <motion.div initial={{x:'-100%'}} animate={{x:'0'}} transition={{ease:'linear',duration:25,repeat:Infinity}} 
       className='bg-black flex gap-8 lg:gap-28 mt-10'>
       {images2.map((urlss,index2)=> <img  src={urlss.imgsurls} alt='jadhna thya' key={index2}/>)} 
       </motion.div>
       
    </div>
   
  )
}

export default Marquee; 