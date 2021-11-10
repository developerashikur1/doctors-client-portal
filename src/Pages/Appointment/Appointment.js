import React from 'react';
import Navigation from '../Home/Shared/Navigation/Navigation';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AvaiableAppointment from './AvailableAppointment/AvaiableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvaiableAppointment date={date}></AvaiableAppointment>
        </div>
    );
};

export default Appointment;