import React from 'react';
import banner from '../../../assets/home/chef-service.jpg'

const SecondaryBanner = () => {
    return (
        <div>
            <div className='w-4/5 mx-auto static'>
                <img src={banner} alt="" className=' ' />
                <div className='w-8/12 text-center mx-auto bg-white py-12 absolute ms-16 -mt-64'>
                    <h1 className='text-2xl'>Bistro Boss</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur eum consequatur assumenda quia blanditiis omnis praesentium, sapiente voluptatibus nesciunt, dolorum laboriosam molestias modi esse exercitationem amet recusandae perspiciatis ad? Nihil debitis ad voluptates tempora cum?</p>
                </div>
            </div>
        </div>
    );
};

export default SecondaryBanner;