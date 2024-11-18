'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from '../modules/Loader';
import Cookies from 'js-cookie';

function SignInPage() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { username, password } = formData;
        if (!username || !password) {
            toast.error('لطفا نام کاربری و رمز عبور را وارد کنید.');
            return false;
        }
        return true;
    };

    const loginHandler = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data)
            
            if (response.ok) {
                toast.success('ورود با موفقیت انجام شد');
                Cookies.set('token', data.token);
                router.push("/profile");
            } else {
                toast.error('نام کاربری یا رمزعبور اشتباه است');
            }
        } catch (error) {
            toast.error('مشکلی پیش آمده لطفا دوباره تلاش کنید');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="font-Vazir min-h-screen p-5 flex items-center">
        
            <div className='flex flex-col my-auto mx-auto w-[460px] h-[400px] bg-white rounded-3xl border border-[#e4e4e4] items-center justify-center'>
                <div className='mb-10'>
                    <Image src="/images/Union.png" className='w-[80px] h-[84px] mx-auto' width={100} height={100} priority alt="signin" />
                    <p className='text-lg font-VazirBold p-2 text-center'>فرم ورود</p>
                </div>
                <form 
                className='mx-auto flex flex-col justify-center items-center space-y-4' 
                onSubmit={loginHandler}>
                    <input type='text'
                        name='username'
                        placeholder='نام کاربری'
                        className='bg-[#F2F2F2] w-[400px] rounded-2xl p-3 outline-1 outline-[#F21055]'
                        value={formData.username}
                        onChange={changeHandler} />
                    <input type='password'
                        name='password'
                        placeholder='رمز عبور'
                        className='bg-[#F2F2F2] w-[400px] rounded-2xl p-3 outline-1 outline-[#F21055]'
                        value={formData.password}
                        onChange={changeHandler} />
                    <button type='submit'
                        className='font-VazirMedium bg-[#F21055] text-white p-2.5 w-[400px] h-[53px] rounded-2xl' 
                        disabled={loading}>
                        {loading ? <Loader/> : 'ورود'}
                    </button>
                </form>

                <Link href="/signup"
                    className='mt-3 self-start mr-3 text-sm px-5 text-[#F21055]'>حساب کاربری ندارید؟</Link>
            </div>
            <ToastContainer />
        </div>
    );
}

export default SignInPage;
