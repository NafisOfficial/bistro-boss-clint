import React, { useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import coverphoto from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';

const Orderfood = () => {
    const [tabIndex, setTabindex] = useState(0);
    const [menu] = useMenu();
    return (
        <div>
            <Cover bgImg={coverphoto} title="Order Food" subtitle="WOULD YOU LIKE TO TRY A DISH"></Cover>
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Orderfood;