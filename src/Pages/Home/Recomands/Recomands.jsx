import React, { useEffect, useState } from 'react';
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import RecomandsCard from '../RecomandsCard/RecomandsCard';

const Recomands = () => {

    const [recoData,setRecomdata] = useState(null)

    useEffect(()=>{
        fetch('../../../../public/menu.json')
        .then(res=>res.json())
        .then(data=>{
            const recomandsData = data.filter(dt=>dt.category==='salad')
            const splicedRecom = recomandsData?.slice(0,3)
            setRecomdata(splicedRecom);
        })
    },[])



    return (
        <div>
            <Sectiontitle subheading="Sould try" heading="CHEF RECOMMENDS"></Sectiontitle>
            <div className='grid grid-cols-3 gap-4 mt-12 mb-6'>
                {recoData?.map(dt=><RecomandsCard key={dt._id} image={dt.image} name={dt?.name} recipe={dt?.recipe}></RecomandsCard>)}
            </div>
        </div>
    );
};

export default Recomands;