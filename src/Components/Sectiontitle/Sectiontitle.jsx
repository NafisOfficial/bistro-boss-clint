import React from 'react';

const Sectiontitle = ({subheading,heading}) => {
    return (
        <div className='my-4'>
            <p className='text-yellow-500 text-xl text-center'>---{subheading}---</p>
            <h1 className='uppercase border-y-4 w-1/3 text-4xl mx-auto py-2 text-center'>{heading}</h1>
        </div>
    );
};

export default Sectiontitle;