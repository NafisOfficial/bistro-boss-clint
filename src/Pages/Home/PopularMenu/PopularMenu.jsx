import React, { useEffect, useState } from 'react';
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {


    const [popularItem,setPopularItem] = useState(null)

    useEffect(()=>{
        fetch('../../../../public/menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data?.filter(item=>item?.category==='popular');
            setPopularItem(popularItems);
        })
    },[])



    return (
        <div>
            <Sectiontitle subheading='Check it out' heading='From our menu'></Sectiontitle>
            <div className='grid md:grid-cols-2 gap-4 mb-4'>
                {popularItem?.map(dt=><MenuItem key={dt._id} name={dt.name} image={dt.image} recipe={dt.recipe} price={dt.price}></MenuItem>)}
            </div>
            <button className="btn block mx-auto border-0 border-b-4 btn-outline text-center mb-4 uppercase">View full menu</button>
        </div>
    );
};

export default PopularMenu;