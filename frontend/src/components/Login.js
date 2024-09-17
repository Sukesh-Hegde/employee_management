import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeContext from "../context/employeeContext";

const Login = () => {
  const host = process.env.REACT_APP_BACKEND_URL;

  const context = useContext(EmployeeContext);
  const { showAlert } = context;

  const [credential, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = credential;

    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:name,
        email: email,
        password: password,
      }),
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.token);
      localStorage.setItem("name", json.name); 

      showAlert("Logged in Successfully", "success");
      navigate("/");
    } else {
      showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-50">
      <div className="col-md-6">
        <div className="card shadow-lg p-4">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">LogIn</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  onChange={onChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  value={credential.email}
                  onChange={onChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                  value={credential.password}
                  onChange={onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block w-100 mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
