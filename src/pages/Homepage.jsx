import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { Users } from "../Context/Users";
import { useContext } from "react";

function Homepage() {
  const nav = useNavigate();
  const { id } = useParams();
  const {cur}=useContext(Users)

  return (
    <div className=" d-flex flex-column justify-content-center  text-center h-75">
      <h1 className="fw-bold">Welcome {id == 0 || cur=="" ? " " : id} </h1>
      <div className="mt-4">
        <Button
          className="me-2 bg-dark border-0"
          onClick={() => nav("/main/pro/Cat")}
        >
          Browse Cat Foods 🐱
        </Button>
        <Button
          className="bg-dark border-0"
          onClick={() => nav("/main/pro/Dog")}
        >
          Browse Dog Foods 🐶{" "}
        </Button>
      </div>
    </div>
  );
}

export default Homepage;
