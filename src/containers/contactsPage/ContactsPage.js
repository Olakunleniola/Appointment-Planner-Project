import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContacts}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    const isDuplicate = contacts.some((itm) => itm.name === name);
    setDuplicate(isDuplicate);
  }, [name, contacts])


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContacts(name, phone, email)
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name}
          email={email}
          phone={phone} 
          setEmail={setEmail}
          setName={setName}
          setPhone={setPhone}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList ObjectList={contacts} />
      </section>
    </div>
  );
};
