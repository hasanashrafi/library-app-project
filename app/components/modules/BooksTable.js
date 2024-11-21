'use client'
import React, { useEffect, useState } from 'react'

import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";


function BooksTable({books}) {

    // const [books, setBooks] = useState([])

    // useEffect(() => {
    //     fetch('', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    //         .catch(error => console.log(error.message))
    // }, [])
   
    return (
        <>

            <div className='border rounded-xl overflow-hidden max-w-7xl mx-auto shadow-lg'>
                <table className='text-black overflow-x-auto items-center bg-transparent w-full border-collapse rounded-lg'>
                    <thead className='border rounded-lg bg-[#f2f2f2]'>
                        <tr className='p-2 w-full rounded-lg'>
                            <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center'>نام کتاب</th>
                            <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center'>موجودی</th>
                            <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center'>قیمت</th>
                            <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center'>شناسه کالا</th>
                            <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center'></th>
                        </tr>
                    </thead>
                    {/* <tbody className='bg-white rounded-lg'>
                        {
                            books ?( books.map((book) => (
                                <tr key={book.id}>
                                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-center whitespace-nowrap p-4 text-sm'>
                                        {book.title}
                                    </td>
                                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-center whitespace-nowrap p-4 text-sm'>
                                        {book.quantity}
                                    </td>
                                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-center whitespace-nowrap p-4 text-sm'>
                                        {book.price}   هزار تومان
                                    </td>
                                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-center whitespace-nowrap p-4 text-sm'>
                                        {book.id}
                                    </td>
                                    <td className='flex items-center gap-x-2 border-t-0 px-6 align-middle border-l-0 border-r-0 text-center whitespace-nowrap p-4'>
                                        <FiEdit className='text-green-600' />
                                        <FaRegTrashAlt className='text-red-600' />
                                    </td>
                                </tr>
                            ))) : null
                        }
                    </tbody> */}
                </table>
            </div>
        </>
    )
}

export default BooksTable