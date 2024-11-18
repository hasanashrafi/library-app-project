'use client'

import { parseJwt } from '@/app/utils/jwt_decode';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";

function ProfilePage() {
    const [user, setUser] = useState({})

    useEffect(() => {
        const token = Cookies.get('token'); // Replace 'token' with your cookie name
        setUser(parseJwt(token))
    }, []);
    console.log(user)

    const searchHandler = () => {

    }

    return (
        <div className='min-h-screen w-full max-w-7xl mx-auto p-10'>
            <div className='bg-white border border-[#e9e9e9] rounded-2xl w-full my-3 p-2 flex items-center justify-between'>
                <div className='flex items-center w-[80%] '>
                    <label htmlFor='search' className='p-1.5' onClick={searchHandler}>
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
            <div className=' p-2 flex items-center justify-between my-10'>
                <p className='flex items-center gap-x-2 p-2 text-xl  '>
                    <img src="/images/setting-3.png" className='size-7' />
                    مدیریت کتاب ها
                </p>
                <button className='p-2 rounded-md text-white bg-[#F21055]'>افزودن کتاب</button>

            </div>

            <div>
                
            </div>
        </div>
    )
}

export default ProfilePage