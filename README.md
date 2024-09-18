# Employee Management System (MERN Stack)

explainatin video Link : https://youtu.be/_Ht93vyjG9g

This project is an Employee Management System developed using the MERN stack (MongoDB, Express, React, Node.js). The system allows users to manage employee information with features such as create, read, update, and delete (CRUD). It also supports authentication using JWT for secure login and user sessions.

## Features
Employee CRUD functionality (Create, Read, Update, Delete)
User authentication with JWT
Protected routes based on user login status
Real-time search feature to filter employee data
Responsive UI with Bootstrap
State management using Redux and Redux Toolkit
RESTful API built with Express.js and MongoDB

# Technologies Used
## Frontend
React (react, react-dom): Core UI library used to build the frontend.
React Router DOM (react-router-dom): For handling routing and navigation.
React Redux (react-redux, @reduxjs/toolkit): For state management and data flow.
Bootstrap: Used for styling and responsive design.
## Backend
Node.js: Server-side runtime environment.
Express (express, express-validator): Web framework for building the backend API and validation.
MongoDB: NoSQL database to store employee and user data.
Mongoose: ODM (Object Data Modeling) library for MongoDB.
JWT (jsonwebtoken): For user authentication and secure session handling.
bcrypt: For password hashing and security.
CORS (cors): To allow cross-origin requests from the frontend.
dotenv: To manage environment variables.


## Usage
Authentication: The app requires users to log in. If a user does not have an account, they can sign up. Once logged in, the user can access the employee management system.

Employee Management: The user can add, view, update, and delete employee records. The employees are displayed in a table with their details such as name, email, mobile number, designation, gender, course, and created date.

Search: A search bar allows users to search employees by their name in real-time.

Protected Routes: Only authenticated users can access employee management pages. If the user is not authenticated, they will be redirected to the login page.

## Future Enhancements
Implement pagination for large datasets.
Add more filters (by designation, course, etc.).
Include user roles (Admin, Manager, etc.) with role-based access control.

## ScreenShots
![Screenshot 2024-09-18 at 12 18 04 PM](https://github.com/user-attachments/assets/4fd1e326-e992-49a6-b972-398c6e5472ab)

![Screenshot 2024-09-18 at 12 18 16 PM](https://github.com/user-attachments/assets/33d914e5-6562-458d-a844-ea66512383ac)

![Screenshot 2024-09-18 at 12 23 08 PM](https://github.com/user-attachments/assets/c44bf2bb-4c5f-4a1d-a561-6c64ba56d23a)

![Screenshot 2024-09-18 at 12 23 24 PM](https://github.com/user-attachments/assets/ea2aae9e-2c3b-4cc0-b24d-f258584fe57f)

![Screenshot 2024-09-18 at 12 23 40 PM](https://github.com/user-attachments/assets/470cb39f-958a-4d02-8ea1-69c42f2c12ed)

![Screenshot 2024-09-18 at 12 24 01 PM](https://github.com/user-attachments/assets/2ea14715-bb2a-4d2e-8478-6c4c20b3337a)

![Screenshot 2024-09-18 at 12 24 16 PM](https://github.com/user-attachments/assets/856c9e49-ab6e-4284-b0b2-aedf72be51ab)



