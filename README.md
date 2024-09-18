## Employee Management System (MERN Stack)
This project is an Employee Management System developed using the MERN stack (MongoDB, Express, React, Node.js). The system allows users to manage employee information with features such as create, read, update, and delete (CRUD). It also supports authentication using JWT for secure login and user sessions.

## Features
Employee CRUD functionality (Create, Read, Update, Delete)
User authentication with JWT
Protected routes based on user login status
Real-time search feature to filter employee data
Responsive UI with Bootstrap
State management using Redux and Redux Toolkit
RESTful API built with Express.js and MongoDB

## Technologies Used
# Frontend
React (react, react-dom): Core UI library used to build the frontend.
React Router DOM (react-router-dom): For handling routing and navigation.
React Redux (react-redux, @reduxjs/toolkit): For state management and data flow.
Bootstrap: Used for styling and responsive design.
# Backend
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
