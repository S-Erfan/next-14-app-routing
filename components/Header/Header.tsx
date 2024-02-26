import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid'


const Header = () => {
  return (
    <header className='mt-2 sticky top-3'>
        <nav className='container px-2 card' >
            <div className="flex flex-row-reverse justify-between items-center ">
                <div className='w-10 h-10 rounded-full ring-1 ring-green-300 grid place-content-center overflow-hidden p-1' >
                    <UserIcon className='text-black w-full h-full' />
                </div>
                <div className='' >
                    <ul className='flex justify-start items-center gap-3' >
                        <li>Home</li>
                        <li>Products</li>
                        <li>Categories</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
