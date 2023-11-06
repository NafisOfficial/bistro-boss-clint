import React from 'react';
import item from '../../assets/others/authentication2.png'
import './login.css'
import { Link } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { PiFacebookLogo } from 'react-icons/pi';
import { BsGithub } from 'react-icons/bs';
const Login = () => {


    const handlelogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;

        console.log(email,password,captcha);
        form.reset();
    }


    return (
        <div className='bg1'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="flex gap-10 items-center shadow-2xl bg2 px-48 py-12">
                        <div className=''>
                            <img className='w-72 h-56' src={item} alt="" />
                        </div>
                        <form onSubmit={handlelogin} className="card-body">
                            <h3 className='text-center font-bold text-4xl'>Login</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Type here" className="input bg-white " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter your password" className="input bg-white" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name='captcha' placeholder="Enter captcha" className="input bg-white" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FDDAA8] text-white">Sign in</button>
                            </div>

                            <p className='text-[#cc9d5a]'>New here? Create a new account ! <Link className='text-blue-700'>Click here</Link></p>
                            <div className='text-center'>
                                <p>Or sing in with</p>
                                <div className='flex mt-2 gap-6 justify-center items-center'>
                                    <PiFacebookLogo className='text-4xl font-bold'></PiFacebookLogo><BsGoogle className='text-3xl font-bold'></BsGoogle><BsGithub className='text-3xl font-bold'></BsGithub>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;