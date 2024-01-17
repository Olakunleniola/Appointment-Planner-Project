import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({addAppointments, appointments, contacts }) => {
  /*
  Define state variables for 
  appointment info
  */

  const [title, setTitle] = useState("")
  const [contact, setContact] = useState("")
  const [date, setDate] = useState("")
  const [time, setTIme] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointments(title, contact, date,time);
    setContact("");
    setDate("");
    setTitle("");
    setTIme("")   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={title}
          contact={contact}
          time={time}
          date={date}
          setTitle={setTitle}
          setTime={setTIme}
          setDate={setDate}
          setContact={setContact}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList ObjectList={appointments} />
      </section>
    </div>
  );
};