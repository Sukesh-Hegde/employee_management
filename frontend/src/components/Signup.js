import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeContext from "../context/employeeContext";
const Signup = () => {
  const host = process.env.REACT_APP_BACKEND_URL;

  const context = useContext(EmployeeContext);
  console.log(host);
  
  const { showAlert } = context;

  const [credential, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credential;

    const response = await fetch(`${host}/api/auth/createUser`, {
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
    console.log(json);
    

    if (json.success) {
      navigate("/login");
      showAlert("Signed in Successfully", "success");
    } else {
      // Show error alert
      showAlert("Invalid credentials", "danger");
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
            <h2 className="card-title text-center mb-4">Sign Up</h2>
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
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={onChange}
                  required
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
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={onChange}
                  required
                  minLength={5}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="cpassword"
                  name="cpassword"
                  placeholder="Re-enter your password"
                  onChange={onChange}
                  required
                  minLength={5}
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

export default Signup;
