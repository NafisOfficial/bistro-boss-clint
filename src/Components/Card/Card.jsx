import React from 'react';

const Card = ({image,name,recipe,price}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-4">
                <figure><img src={image} alt="Shoes" className='w-full' /></figure>
                <p className='bg-black text-white w-16 text-center px-2 py-1 absolute top-4 right-4'>{price}$</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='h-20'>{recipe}</p>
                    <div className="card-actions justify-end">
                    <button className="btn block mx-auto border-0 border-b-4 border-yellow-500 text-yellow-500 btn-outline text-center mb-4 uppercase">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;