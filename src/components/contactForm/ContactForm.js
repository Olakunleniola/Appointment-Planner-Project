import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={name}
        onChange={({target}) => setName(target.value)}
        placeholder="Enter Your Name"
        required
      />
      <input 
        type="text"
        value={phone}
        onChange={({target}) => setPhone(target.value)}
        placeholder="Enter Your Phone Number"
        pattern="^\d{3}-\d{3}-\d{4}"
        title="Please enter a valid U.S. phone number (e.g., 123-456-7890)"
        required
      />
      <input 
        type="text"
        value={email}
        onChange={({target}) => setEmail(target.value)}
        placeholder="Enter Your Email Address"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

