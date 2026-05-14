import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './Root.css';


const Root = () => {
    const navigation = useNavigate();
    const isNavigating = Boolean(navigation.location); 
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <SideBar></SideBar>
                {isNavigating && <p>Loading...</p>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;