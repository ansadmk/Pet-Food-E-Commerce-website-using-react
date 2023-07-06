import React, { useContext } from "react";
import { Col, Row, Button, Card } from "react-bootstrap";
import { Users } from "../../Context/Users";
import { Outlet, useNavigate } from "react-router-dom";

function adminhome() {
  const {setCur}=useContext(Users)
  console.log("addprod");
  const nav = useNavigate();
  return (
    <Row className="h-100 ">
      <Col className="bg-dark" lg={2} md={3} sm={4} xs={4}>
        <h1 className="text-white text-center mt-5">Admin</h1>
        <div className="d-flex flex-column h-100 gap-3 mt-5">
          <Button
            className="bg-dark border-0 hover"
            onClick={() => nav("/adminhome/userlist")}
          >
            Users
          </Button>
          <Button
            className="bg-dark border-0 hover"
            onClick={() => nav("/adminhome/Productlist")}
          >
            Products
          </Button>
        </div>
      </Col>
      <Col className="h-100">
        <Row className=" h-25 d-flex align-items-center ">
          <h1 className="text-center">Hello Admin </h1>{" "}
          <div className="text-center">
            <Button onClick={() => {setCur(b=>b="");nav("/login");}} className="container w-25">
              Logout
            </Button>
          </div>
        </Row>
        <Outlet />
      </Col>
    </Row>
  );
}

export default adminhome;
