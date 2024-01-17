import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const contactNameList = contacts.map(itm => itm.name)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title || ""}
          placeholder="Enter the Title"
          onChange={({target}) => setTitle(target.value)}
          required
        />
        <ContactPicker 
          contactNameList={contactNameList} 
          value={contact}
          handleChange={({target}) => setContact(target.value)}
          name="contact"
        />
        <input
          type="date"
          value={date}
          onChange={({target}) => setDate(target.value)}
          min={getTodayString()}
          required
        />
        <input
          type="text"
          value={time || ""}
          placeholder="Enter the Time"
          onChange={({target}) => setTime(target.value)}
          required
        />
        <button type="submit">Add appointment</button>
      </form>
    </>
  );
};
