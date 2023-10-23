import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import SecondaryBanner from '../SecondaryBanner/SecondaryBanner';
import PopularMenu from '../PopularMenu/PopularMenu';
import Contact from '../Contact/Contact';
import Recomands from '../Recomands/Recomands';
import Fetured from '../Fetured/Fetured';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <SecondaryBanner></SecondaryBanner>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Recomands></Recomands>
            <Fetured></Fetured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;