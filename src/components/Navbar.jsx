import Button from './Button'

function Navbar() {
  return (
    <div className='w-[80%] md:w-[80%] mx-auto py-6 bg-black flex items-center justify-between rounded-b-xl border-b-2 border-zinc-600'>   
      <div className='left flex'>
      <img className='ml-5 cursor-pointer' src='https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg'></img>
        <div className='flex gap-4 lg:gap-14 ml-5 lg:ml-20 cursor-pointer'>
          {["Home","Work","About","News","Careers"].map((elem,index) => (
           <a className='flex items-center gap-1 z-50' key={index} style={{ cursor: 'pointer' }}>    
          {index === 0 && (<span style={{boxShadow:"0 0 0.85em #00FF19"}}  className='inline-block h-1 w-1 rounded-full bg-green-500' ></span>)}
          {elem}
          </a>))}   
        </div>
      </div>
      <Button/>
    </div>
  ) 
}

export default Navbar
