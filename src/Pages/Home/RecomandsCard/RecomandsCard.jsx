import React from 'react';

const RecomandsCard = ({image,name,recipe}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                    <button className="btn block mx-auto border-0 border-b-4 border-yellow-500 text-yellow-500 btn-outline text-center mb-4 uppercase">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecomandsCard;