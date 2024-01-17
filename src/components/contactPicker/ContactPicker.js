import React from "react";

export const ContactPicker = ({contactNameList, handleChange, value, name}) => {
  return (
    <>
      <select onChange={handleChange} value={value} name={name}>
          <option value="" key={-1} >No Contact Selected</option>
          {
            contactNameList && 
            contactNameList.map((name,index) => 
            <option key={index} value={name}>{name}</option>
            )
          }
      </select>
    </>
  );
};
