import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    let navigate = useNavigate();

    useEffect(() => {
      if (localStorage.getItem("token")) {
        // getNotes();
      } else {
        navigate("/login");
      }
      // eslint-disable-next-line
    }, []);
  return (
    <div className="container my-3">
      <h1>welcome to home</h1>
    </div>
  );
}
