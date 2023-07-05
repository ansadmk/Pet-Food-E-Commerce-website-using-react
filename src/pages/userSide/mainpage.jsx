import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Users } from "../../Context/Users";

function mainpage() {
  const { cur, setCur,state,product,arr,setArr } = useContext(Users);
  const arr1=[...state]
  const {  } = useContext(Users);
  if (cur!="") {
    
    const userobj=arr1.filter(a=>a.id==cur)
    var len=userobj[0].userProduct.length
  }
  const nav = useNavigate();

  return (
    <>
      <Navbar className=" container  position-sticky" expand="lg">
        <Container className="mt-5 bg-black p-4 rounded-4">
          <Navbar.Brand className="text-white m-auto">Pet Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="collap" className="bg-white ms-1" />
          <Navbar.Collapse id="collap">
            <Nav className="m-auto me-0">
              <div className="me-2  " onClick={() => nav(`/main/0`)}>
                <Button   className="  me-2 mb-2 bg-black border-0 hover  ">
                  Home
                </Button>
              </div>
              <div className="me-2  ">
                <Button
                  onClick={() =>{
                    cur != "" ? nav(`/main/cart/${cur}`)  : alert("Must Login!")}
                  }
                  className="  me-2 mb-2 bg-black border-0 hover "
                >
                  {cur!="" ? <h6 className="mt-1">Cart({len})</h6>:<h6 className="mt-1">Cart</h6>}
                </Button>
              </div>
              <Link className="me-2    mb-2" to="/main/pro/Cat">
                {" "}
                <Button className="bg-black border-0 hover" onClick={()=>setArr(b=>b=product.filter((a) => a.category == "cat"))}>Cat</Button>
              </Link>
              <Link className="me-2 mb-2" to="/main/pro/Dog">
                <Button className="bg-black border-0 hover" onClick={()=>setArr(b=>b=product.filter((a) => a.category == "dog"))}>Dog</Button>
              </Link>
              <Link className="me-2 mb-2" to="/main/pro/all">
                <Button className="bg-black border-0 hover" onClick={()=>setArr(b=>b=[...product])}>Products</Button>
              </Link>
               <div className="d-flex gap-2">{cur != "" ? (
                <Button
                  className="bg-white  border-0 text-black hover"
                  onClick={() => {
                    nav("/");
                    setCur((c) => (c = ""));
                  }}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    className="bg-white border-0 text-black hover"
                    onClick={() => {
                      nav("/register");
                    }}
                  >
                    Signup
                  </Button>
                  <Button
                    className="bg-white border-0  text-black  hover"
                    onClick={() => {
                      nav("/login");
                    }}
                  >
                    Login
                  </Button>
                </>
              )}</div>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default mainpage;
