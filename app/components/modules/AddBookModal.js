import React from 'react';

function AddBookModal({ book, setBook, closeModal, setCloseModal, addHandler }) {
    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${closeModal ? 'block' : 'hidden'}`}>
            <div className="flex flex-col items-center justify-between bg-white p-2 rounded-3xl shadow-lg max-w-[460px] h-[448px]">
                <h2 className="text-lg font-semibold mb-4">
                    افزودن کتاب جدید
                </h2>
                <div>
                    <label>نام کتاب</label>
                    <input
                        type='text'
                        placeholder='نام کتاب'
                        onChange={e => setBook({ ...book, title: e.target.value })}
                        value={book.title}
                        className="border p-2 mb-4 w-full rounded-xl"
                    />
                    <label>تعداد</label>
                    <input
                        type='text'
                        placeholder='تعداد'
                        onChange={e => setBook({ ...book, quantity: e.target.value })}
                        value={book.quantity}
                        className="border p-2 mb-4 w-full rounded-xl"
                    />
                    <label>قیمت</label>
                    <input
                        type='text'
                        placeholder='قیمت'
                        onChange={e => setBook({ ...book, price: e.target.value })}
                        value={book.price}
                        className="border p-2 mb-4 w-full rounded-xl"
                    />
                </div>
                <div className='flex items-center justify-between gap-x-3 mt-4'>
                    <button onClick={addHandler} className="w-[185px] bg-[#F21055] text-white p-2 rounded">
                        افزودن
                    </button>
                    <button onClick={() => setCloseModal(false)} className='bg-[#e9e9e9] text-black w-[185px] p-2 rounded'>انصراف</button>
                </div>
            </div>
        </div>
    );
}

export default AddBookModal;
