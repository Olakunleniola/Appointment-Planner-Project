# Appointment Planner Project

## Overview
The Appointment Planner Project is a React-based project completed during the Codecademy boot camp. This application allows users to create contacts and appointments, providing a comprehensive solution for managing appointments associated with specific contacts.

## Project Structure

### / Route
+ The root route renders a main component featuring a header.
- The header includes a NavLink facilitating navigation between the /contacts, and /appointments routes.
+  A main component with an \<outlet/> renders the components of other routes dynamically.
- The index route of / redirects to the /contacts route for a seamless user experience.

### /contacts Route
+ The /contacts route renders a form that collects input fields such as name, phone number, email address, and a submit button to create a contact.
- Contacts created are displayed in a section below the form.

### /appointments Route
+ The /appointments route renders a form with fields for title, contact (contacts created in the /contacts route are displayed here in a select option), date, time, and a submit button.
Upon submission, an appointment is created and rendered in a section below the form.
- All appointments created with a contact are listed in this section.

## Download and Installation

To download and explore the project:

1. Clone the repository from GitHub:


```bash
    git clone https://github.com/Olakunleniola/Appointment-Planner-Project.git
```

2. Install project dependencies:

```bash
    npm install
```
3. Run the application:

```bash
    npm start
```

## Live Demo

You can experience the live version of the project [here]().

## Technologies Used
+ React

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow the standard procedures for contributing to open-source projects.

## License
This project is licensed under the [MIT License]().