import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function  Card({value}) {

  return (
    <div className={`${value.width} ${value.color} ${value.hvr} p-6 rounded-xl `}>
      <div className='w-full'>
        <div className='w-full flex items-center justify-between '>
          <h1>{value.p1}</h1>
          <IoIosArrowRoundForward size={"25px"} />
        </div>
        <h1 className='text-3xl font-bold pt-5'>
         {value.p2}
        </h1>
        <h1 className="text-3xl font-bold">{value.p3}</h1>
      </div>
      <div className="w-full ">
       <div className="opacity-[.8] relative text-sm">
             <h1 className="absolute lg:bottom-[-50px] md:bottom-[-20px] bottom-[10px]">{value.para1}</h1>
             <h1 className="absolute lg:bottom-[-70px] md:bottom-[-40px] hidden sm:block">{value.para2}</h1>
             <h1 className="absolute lg:bottom-[-90px] md:bottom-[-60px] ">{value.para3}</h1>
       </div>
        <h1 className="w-full text-[8vw] md:text-[8vw] font-bold leading-none mt-24 text-nowrap ">{value.p4}</h1>
       {value.btn === true && ( <button className=" px-6 py-3 rounded-full border-zinc-100 border-[1px] mt-5">Contact us</button> )}
      </div>
    </div>
  );
}

export default Card;
