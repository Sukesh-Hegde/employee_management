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
  }, []);
  return <div className="container ">
    <h2>Crud App with Json Server</h2>
  </div>;
}
