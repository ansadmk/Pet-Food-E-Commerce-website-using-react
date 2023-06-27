import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Users } from "../Context/Users";

function mainpage() {
  const { state, cur ,setCur } = useContext(Users);

  console.log(state);
  console.log(cur);
  const nav = useNavigate();

  return (
    <>
      <Navbar className=" container  d-sticky" expand="lg">
        <Container className="mt-5 bg-black p-4 rounded-4">
          <Navbar.Brand className="text-white m-auto">Pet Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="collap" className="bg-white ms-1" />
          <Navbar.Collapse id="collap">
            <Nav className="m-auto me-0">
              <div
                className="me-2  "
                onClick={() =>
                  cur != "" ? nav(`/main/${cur}`) : nav("/main/0")
                }
              >
                <Button className="  me-2 mb-2 bg-black border-0 ">Home</Button>
              </div>
              <div className="me-2  ">
                <Button
                  onClick={() =>
                    cur != "" ? nav(`/main/cart/${cur}`) : alert("Must Login!")
                  }
                  className="  me-2 mb-2 bg-black border-0 "
                >
                  Cart
                </Button>
              </div>
              <Link className="me-2  mb-2" to="/main/pro/Cat">
                {" "}
                <Button className="bg-black border-0">Cat</Button>
              </Link>
              <Link className="me-2 mb-2" to="/main/pro/Dog">
                <Button className="bg-black border-0">Dog</Button>
              </Link>
              <Link className="me-2 mb-2" to="/main/pro/all">
                <Button className="bg-black border-0">Products</Button>
              </Link>

              {cur != "" ? (
                <Button
                  className="bg-white border-0 text-black"
                  onClick={() => {
                    nav("/"); setCur(c=>c='')
                  }}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    className="bg-white border-0 text-black"
                    onClick={() => {
                      nav("/register");
                    }}
                  >
                    Signup
                  </Button>
                  <Button
                    className="bg-white border-0 text-black ms-2"
                    onClick={() => {
                      nav("/login");
                    }}
                  >
                    Login
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default mainpage;
