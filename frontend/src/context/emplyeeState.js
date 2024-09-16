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

  // // Get all Notes
  // const getNotes = async () => {
  //   const response = await fetch(`${host}/api/notes/fetchallnotes`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": localStorage.getItem("token"),
  //     },
  //   });
  //   const json = await response.json();
  //   setNotes(json);
  // };

  // // Add a Note
  // const addNote = async (title, description, tag) => {
  //   const response = await fetch(`${host}/api/notes/addnote`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": localStorage.getItem("token"),
  //     },
  //     body: JSON.stringify({ title, description, tag }),
  //   });

  //   const note = await response.json();
  //   setNotes(notes.concat(note));
  // };

  // // Delete a Note
  // const deleteNote = async (id) => {
  //   const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": localStorage.getItem("token"),
  //     },
  //   });
  //   const json = await response.json();

  //   const newNotes = notes.filter((note) => {
  //     return note._id !== id;
  //   });
  //   setNotes(newNotes);
  //   showAlert("Note deleted Successfully", "success");
  // };

  // // Edit a Note
  // const editNote = async (id, title, description, tag) => {
  //   const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": localStorage.getItem("token"),
  //     },
  //     body: JSON.stringify({ title, description, tag }),
  //   });
  //   const json = await response.json();

  //   let newNotes = JSON.parse(JSON.stringify(notes));
  //   for (let index = 0; index < newNotes.length; index++) {
  //     const element = newNotes[index];
  //     if (element._id === id) {
  //       newNotes[index].title = title;
  //       newNotes[index].description = description;
  //       newNotes[index].tag = tag;
  //       break;
  //     }
  //   }
  //   setNotes(newNotes);
  // };

  return (
    <EmployeeContext.Provider
      value={{

      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeState;
