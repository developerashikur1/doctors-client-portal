import React from 'react';
import AppointmentBannar from '../AppointmentBannar/AppointmentBannar';
import Bannar from '../Bannar/Bannar';
import Maintance from '../Maintance/Maintance';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
        <Navigation></Navigation>
        <Bannar></Bannar>
        <Maintance></Maintance>
        <Services></Services>
        <AppointmentBannar></AppointmentBannar>
        </div>
    );
};

export default Home;


