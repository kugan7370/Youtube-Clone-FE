import React, { useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { UserLogin } from '../features/Slicer/UserSlicer';

interface Props {
    isOpen: boolean;
    setisOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function LoginModal({ isOpen, setisOpen }: Props) {

    const [userDetails, setuserDetails] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch<AppDispatch>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setuserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()


        dispatch(UserLogin(userDetails))
        setisOpen(false)
    }


    return (
        <div className={`${!isOpen && "hidden"} absolute top-0 right-0 left-0 bottom-0 z-50  h-screen w-screen  flex item-center   bg-black bg-opacity-90 transition-opacity`}>
            <div className="m-auto w-screen md:w-[50%] h-auto bg-white">
                <div className="flex items-center justify-between p-4">
                    <h1 className='text-xl font-semibold'>Login</h1>
                    <IoCloseCircleOutline size={26} color={'red'} onClick={() => setisOpen(!isOpen)} />
                </div>

                <div className="flex flex-col space-y-4 p-4">
                    <input name='email' onChange={handleChange} type="email" placeholder='email' className='w-full border-2 border-gray-300 rounded-md p-2' />
                    <input name='password' onChange={handleChange} type="password" placeholder='Password' className='w-full border-2 border-gray-300 rounded-md p-2' />
                    <button onClick={handleSubmit} disabled={!userDetails.password && !userDetails.email} className='bg-blue-500 text-white p-2 rounded-md'>Login</button>
                </div>
            </div>

        </div>
    )
}

export default LoginModal
