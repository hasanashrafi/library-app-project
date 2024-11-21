import React from 'react'
import { CiSearch } from "react-icons/ci";
function SearchBar({ user, searchHandler }) {
    return (
        <div className='bg-white border border-[#e9e9e9] rounded-2xl w-full my-3 p-2 flex items-center justify-between'>
            <div className='flex items-center w-[80%] '>
                <label htmlFor='search' className='p-1.5' 
                onClick={searchHandler}>
                    <CiSearch className='text-2xl ' />
                </label>
                <input
                    className='w-full outline-none p-2   '
                    type='text'
                    placeholder='جستجو کالا'
                    id='search'
                    name='search'
                    onChange={searchHandler} />
            </div>
            <p className='flex items-center justify-around text-center p-2 w-[20%] border-r-2 border-gray-400 '>
                <img src='/images/felix-Vogel-4.png'
                    className='size-8 rounded-full' />
                {user.username}
            </p>
        </div>
    )
}

export default SearchBar