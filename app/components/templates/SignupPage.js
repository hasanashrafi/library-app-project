'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../modules/Loader';

function SignupPage() {
  const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);

  const router = useRouter()

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { username, password, confirmPassword } = formData;
    if (!username || !password || !confirmPassword) {
      toast.error('لطفا فرم ثبت نام را پر کنید.');
      return false;
    }
    if (password !== confirmPassword) {
      toast.error('تکرار رمز اشتباه است.');
      return false;
    }
    return true;
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch('http://localhost:3400/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();


      if (response.ok) {
        toast.success('ثبت نام با موفقیت انجام شد.');
        router.push("/signin")
      } else {
        toast.error('ثبت نام انجام نشد.');
      }
    } catch (error) {
      toast.error('مشکلی پیش آمده لطفا دوباره تلاش کنید.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-Vazir min-h-screen p-5 flex items-center">
      <div className='flex flex-col my-auto mx-auto w-[460px] h-[556px] bg-white rounded-3xl border border-[#e4e4e4] items-center justify-center'>
        <div className='mb-10'>
          <Image src="/images/Union.png" className='w-[80px] h-[84px] mx-auto' width={100} height={100} priority alt="signup" />
          <p className='text-lg font-VazirBold p-2 text-center'>فرم ثبت نام</p>
        </div>
        <form
          className='mx-auto flex flex-col justify-center items-center space-y-4'
          onSubmit={signUpHandler}>
          <input
            type='text'
            name='username'
            placeholder='نام کاربری'
            className='bg-[#F2F2F2] w-[400px] rounded-2xl p-3'
            value={formData.username}
            onChange={changeHandler} />
          <input
            type='password'
            name='password'
            placeholder='رمز عبور'

            className='bg-[#F2F2F2] w-[400px] rounded-2xl p-3'
            value={formData.password}
            onChange={changeHandler} />
          <input
            type='password'
            name='confirmPassword'
            placeholder='تکرار رمز عبور'

            className='bg-[#F2F2F2] w-[400px] rounded-2xl p-3'
            value={formData.confirmPassword}
            onChange={changeHandler} />
          <button
            type='submit'
            className='font-VazirMedium bg-[#F21055] text-white p-2.5 w-[400px] h-[53px] rounded-2xl'
            disabled={loading}>
            {loading ? <Loader /> : 'ثبت نام'}
          </button>
        </form>
        <Link
          href="/signin"
          className='mt-2 self-start text-sm px-4 text-[#F21055]'>
          حساب کاربری دارید؟
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignupPage;
