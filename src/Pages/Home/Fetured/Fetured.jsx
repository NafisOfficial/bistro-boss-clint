import React from 'react';
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import './style.css'
import img1 from '../../../assets/home/featured.jpg'

const Fetured = () => {
    return (
        <div className='featured-item pt-6 my-20 text-white bg-fixed'>
            <Sectiontitle subheading='Check it out' heading='From our menu'></Sectiontitle>
            <div className='md:flex justify-center items-center pb-16 pt-12 px-44 gap-8 md:ml-16'>
                <div>
                    <img className='' src={img1} alt="featured" />
                </div>
                <div>
                    <h4>March 20,2023</h4>
                    <h3 className='uppercase'>Where can i get some?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi ipsa ipsam aliquid iure voluptatibus distinctio architecto assumenda nihil, natus, itaque dolor fuga? Alias minima totam harum? Similique beatae et tempora dicta nostrum eligendi rem quisquam earum labore mollitia nemo eos, minima a excepturi debitis aliquam explicabo totam possimus ea?</p>
                    <button className="btn border-0 border-b-4 border-white text-white btn-outline text-center mt-2 uppercase">read more</button>
                </div>
            </div>
        </div>
    );
};

export default Fetured;