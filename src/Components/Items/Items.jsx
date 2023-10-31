import React from 'react';
import MenuItem from '../../Pages/Shared/MenuItem/MenuItem';

const Items = ({Item}) => {
    return (
        <div className='grid md:grid-cols-2 gap-4 mb-4'>
            {Item?.map(dt => <MenuItem key={dt._id} name={dt.name} image={dt.image} recipe={dt.recipe} price={dt.price}></MenuItem>)}
        </div>
    );
};

export default Items;