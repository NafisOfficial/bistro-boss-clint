import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBanner from '../../../assets/menu/banner3.jpg'
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover bgImg={menuBanner} title="Our menu" subtitle='WOULD YOU LIKE TO TRY A DISH'></Cover>
            <Sectiontitle subheading="Don't miss" heading="Today's offer"></Sectiontitle>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;