import React from 'react'

function Pagination({ page, setPage }) {
    return (
        <div>

            <button onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Previous</button>
            <span>Page {page}</span>
            <button onClick={() => setPage(prev => prev + 1)}>Next</button>
        </div>
    )
}

export default Pagination