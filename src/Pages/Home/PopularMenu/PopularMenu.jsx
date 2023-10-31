import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import useMenu from '../../../hooks/useMenu';
import Items from '../../../Components/Items/Items';

const PopularMenu = () => {

    
    const [menu] = useMenu()
    const popularItem = menu?.filter(item=>item?.category==='popular');

   

    return (
        <div>
            <Sectiontitle subheading='Check it out' heading='From our menu'></Sectiontitle>
            <Items Item={popularItem}></Items>
            <button className="btn block mx-auto border-0 border-b-4 btn-outline text-center mb-4 uppercase">View full menu</button>
        </div>
    );
};

export default PopularMenu;