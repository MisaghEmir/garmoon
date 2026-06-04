import React from 'react'

function Header() {
  return (
    <div className='w-screen flex justify-center items-center relative shadow-2xl'>
        <div className='w-full absolute h-full top-0 left-0 z-20'>
            <img src="/nody-عکس-فست-فود-کارتونی-1633999.png" className=' object-cover w-full h-full ' alt="" />
        </div>
        <div className='z-30 w-full h-full flex justify-center bg-black/35 '>
            <img src="/slazzer-preview-1ygpz.png" className="w-60" alt="" />
        </div>
    </div>
  )
}

export default Header