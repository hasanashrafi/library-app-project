'use client'

import { parseJwt } from '@/app/utils/jwt_decode';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import BooksTable from '../modules/BooksTable';
import AddBookModal from '../modules/AddBookModal';
import SearchBar from '../modules/SearchBar';
import Pagination from '../modules/Pagination';

function ProfilePage({ initialBooks }) {
    const [user, setUser] = useState({});
    const [book, setBook] = useState({ title: "", summary: "good", author: "hoda", price: "", quantity: "" });
    const [closeModal, setCloseModal] = useState(false);
    const [books, setBooks] = useState([initialBooks]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            setUser(parseJwt(token));
        }
        fetchBooks();
    }, [page, minPrice, maxPrice]);

    const fetchBooks = async () => {
        const res = await fetch(`http://localhost:3400/book?page=${page}&limit=3&minPrice=${minPrice}&maxPrice=${maxPrice}`);
        const data = await res.json();
        setBooks(data);
    };

    const addHandler = async () => {
        const res = await fetch('http://localhost:3400/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
            },
            body: JSON.stringify(book)
        });

        if (res.ok) {
            setCloseModal(false);
            setBook({ title: "", quantity: "", price: "" });
            fetchBooks(); // Fetch updated book list
        } else {
            console.error('Failed to add book');
        }
    };

    return (
        <div className='min-h-screen w-full max-w-7xl mx-auto p-10'>
            <SearchBar user={user} />
            <div className='p-2 flex items-center justify-between my-10'>
                <p className='flex items-center gap-x-2 p-2 text-xl'>
                    <img src="/images/setting-3.png" className='size-7' />
                    Manage Books
                </p>
                <button onClick={() => setCloseModal(true)} className='p-2 rounded-md text-white bg-[#F21055]'>
                    Add Book
                </button>
            </div>
            <BooksTable books={books} />
            <Pagination page={page} setPage={setPage} />
            <AddBookModal book={book} setBook={setBook} closeModal={closeModal} setCloseModal={setCloseModal} addHandler={addHandler} />
        </div>
    );
}

export default ProfilePage;

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3400/book?page=1&limit=3');
    const initialBooks = await res.json();

    return {
        props: {
            initialBooks,
        },
    };
}