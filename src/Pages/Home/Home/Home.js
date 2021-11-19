import React from 'react';
import AppointmentBannar from '../AppointmentBannar/AppointmentBannar';
import Bannar from '../Bannar/Bannar';
import Doctors from '../Doctors/Doctors';
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
        <Doctors></Doctors>
        </div>
    );
};

export default Home;


