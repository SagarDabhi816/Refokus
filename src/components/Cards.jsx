import React from 'react'
import Card from './Card'

function Cards() {
  let data = 
  [
    {p1:'Up nxt Project',p2:'Project & Case',p3:'Studies',p4:'',para1:'Web Design, Webflow',para2:'Devlopment, and Creative',para3:'Devlopment,',btn:false,width:'w-[30%]',color:'bg-[#29292E]',hvr:'hover:bg-[#3E3E46]'},
    {p1:'Get in Touch',p2:'Lets get to It,',p3:'Together',p4:'Start a Project',btn:true,width:'w-[70%]',color:'bg-[#323238]',hvr:'hover:bg-[#7443FF]'}
  ];
 
    return (
    <div className='w-full bg-black p-16 overflow-hidden'>
        <div className='max-w-screen-2xl mx-auto py-20 flex gap-0.5'>
        {data.map((elem,index)=>(
      <Card width={"basis-1/2"} value={elem} key={index}/>
    ))}
        </div>
    </div>
  )
}

export default Cards