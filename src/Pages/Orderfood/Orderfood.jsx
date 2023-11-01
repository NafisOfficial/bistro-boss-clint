import React, { useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import coverphoto from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTabPannel from '../../Components/OrderTabPannel/OrderTabPannel';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const Orderfood = () => {
    const catagories = ["salad","pizza","soup","dessert","drinks"]
    const {catagory} = useParams();
    const initialIndex = catagories.indexOf(catagory);
    const [tabIndex, setTabindex] = useState(initialIndex);
    const [menu] = useMenu();

    const salad = menu?.filter(data => data?.category === "salad");
    const pizza = menu?.filter(data => data?.category === "pizza");
    const soup = menu?.filter(data => data?.category === "soup");
    const dessert = menu?.filter(data => data?.category === "dessert");
    const drinks = menu?.filter(data => data?.category === "drinks");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Order</title>
            </Helmet>
            <Cover bgImg={coverphoto} title="Order Food" subtitle="WOULD YOU LIKE TO TRY A DISH"></Cover>
            <div className='my-10'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTabPannel items={salad}></OrderTabPannel>
                    </TabPanel>
                    <TabPanel>
                    <OrderTabPannel items={pizza}></OrderTabPannel>
                    </TabPanel>
                    <TabPanel>
                    <OrderTabPannel items={soup}></OrderTabPannel>                       
                    </TabPanel>
                    <TabPanel>
                    <OrderTabPannel items={dessert}></OrderTabPannel>
                    </TabPanel>
                    <TabPanel>
                    <OrderTabPannel items={drinks}></OrderTabPannel>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Orderfood;