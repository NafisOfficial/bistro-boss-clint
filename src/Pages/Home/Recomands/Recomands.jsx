
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import RecomandsCard from '../RecomandsCard/RecomandsCard';
import useMenu from '../../../hooks/useMenu';

const Recomands = () => {

    const [menu] = useMenu();

    const recomands = menu?.filter(data=>data.category==='salad');
    const recoData = recomands?.slice(0,3);

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