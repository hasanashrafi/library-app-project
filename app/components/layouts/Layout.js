import Link from 'next/link'
import React from 'react'

function Layout({ children }) {
    return (
        <div>
            <header>
                <Link href='/signup' >ثبت نام</Link>
                <Link href='/signin' > ورود</Link>
            </header>

            {children}
            
            <footer>

            </footer>
        </div>
    )
}

export default Layout