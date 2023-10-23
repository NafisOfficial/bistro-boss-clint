import React from 'react';
import { FaFacebookF,FaInstagram,FaWhatsapp } from 'react-icons/fa';

const Footer = () => {


    const currentYear = new Date().getFullYear();



    return (
        <div>
            <footer className="text-white flex ">
                <aside className='bg-[#1F2937] w-2/4 text-center py-6'>
                    <h1 className='uppercase'>Contact Us</h1>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </aside>
                <nav className='bg-[#111827] text-white w-2/4 text-center py-6'>
                    <header className="footer-title">Follow us</header>
                    <p>Join us on social media</p>
                    <div className="flex justify-center text-white gap-4">
                        <FaFacebookF></FaFacebookF>
                        <FaInstagram></FaInstagram>
                        <FaWhatsapp></FaWhatsapp>
                    </div>
                </nav>
            </footer>
            <footer className="text-center text-white bg-[#151515] p-4 text-base-content">
                <aside>
                    <p>Copyright © {currentYear} CulinaryCloud. All rights reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;