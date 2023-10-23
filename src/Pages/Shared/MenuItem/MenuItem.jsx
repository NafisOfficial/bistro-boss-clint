import React from 'react';

const MenuItem = ({ image, name, recipe,price }) => {

    return (
        <div className='flex space-x-4'>
            <img src={image} style={{borderRadius:'0 200px 200px 200px'}} alt="" className='w-[100px]' />
            <div>
                <h1 className='uppercase'>{name} -----------</h1>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;