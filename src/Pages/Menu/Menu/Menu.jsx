import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBanner from '../../../assets/menu/banner3.jpg'
import menuBanner2 from '../../../assets/menu/dessert-bg.jpeg'
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import useMenu from '../../../hooks/useMenu';
import Items from '../../../Components/Items/Items';


const Menu = () => {

    const [menu] = useMenu();
    const offered = menu?.filter(data => data?.category === "offered");

    const favoriteFood = <>
        <button className="btn block mx-auto border-0 border-b-4 btn-outline text-center mb-4 uppercase">Offer your favorite food</button>
    </>

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover bgImg={menuBanner} title="Our menu" subtitle='WOULD YOU LIKE TO TRY A DISH'></Cover>
            <Sectiontitle subheading="Don't miss" heading="Today's offer"></Sectiontitle>
            <div>
                <Items Item={offered}></Items>
                {favoriteFood}
            </div>
            <div className='my-12'>
                <Cover bgImg={menuBanner2} title="Desserts" subtitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
            </div>
        </div>
    );
};

export default Menu;