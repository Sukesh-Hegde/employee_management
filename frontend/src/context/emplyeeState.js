import { useState } from "react";
import EmployeeContext from "./employeeContext";

const EmployeeState = (props) => {
  // const host = process.env.REACT_APP_BACKEND_URL;

  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };


  return (
    <EmployeeContext.Provider
      value={{
        alert,
        showAlert
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeState;
