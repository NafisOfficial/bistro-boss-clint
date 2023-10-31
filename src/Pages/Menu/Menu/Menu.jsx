import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBanner from '../../../assets/menu/banner3.jpg'
import menuBanner2 from '../../../assets/menu/dessert-bg.jpeg'
import menuBanner3 from '../../../assets/menu/pizza-bg.jpg'
import menuBanner4 from '../../../assets/menu/salad-bg.jpg'
import menuBanner5 from '../../../assets/menu/soup-bg.jpg'
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import useMenu from '../../../hooks/useMenu';
import Items from '../../../Components/Items/Items';


const Menu = () => {

    const [menu] = useMenu();
    const offered = menu?.filter(data => data?.category === "offered");
    const dessert = menu?.filter(data => data?.category === "dessert");
    const pizza = menu?.filter(data => data?.category === "pizza");
    const salad = menu?.filter(data => data?.category === "salad");
    const soup = menu?.filter(data => data?.category === "soup");

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
            <div>
                <Items Item={dessert}></Items>
                {favoriteFood}
            </div>
            <div className='my-12'>
                <Cover bgImg={menuBanner3} title="Pizza" subtitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
            </div>
            <div>
                <Items Item={pizza}></Items>
                {favoriteFood}
            </div>
            <div className='my-12'>
                <Cover bgImg={menuBanner4} title="Salad" subtitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
            </div>
            <div>
                <Items Item={salad}></Items>
                {favoriteFood}
            </div>
            <div className='my-12'>
                <Cover bgImg={menuBanner5} title="Soup" subtitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
            </div>
            <div>
                <Items Item={soup}></Items>
                {favoriteFood}
            </div>
        </div>
    );
};

export default Menu;