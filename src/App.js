import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContact] = useState([])
 const [appointments, setAppointment] = useState([])

  /*
  Implement functions to add data to
  contacts and appointments
  */
 function addContacts(name, phone, email ){
    const arr = {name, phone, email};
    setContact((prev) => [...prev, arr]);
 }
 
 function addAppointments(title, contact, date, time ){  
  const arr = {title, contact, date, time}; 
  setAppointment((prev) => [...prev, arr ]);
 }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage addContacts={addContacts} contacts={contacts} />}/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage addAppointments={addAppointments} appointments={appointments} contacts={contacts} />}/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
