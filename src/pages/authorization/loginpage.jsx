import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Card, Button } from "react-bootstrap";
import { Users } from "../../Context/Users";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function loginpage() {
  const { setCur, state } = useContext(Users);
  const nav = useNavigate();
  // window.onpopstate = () => {
  //   nav(`/login`);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dup = [...state];
    const result = dup.filter(
      (a) =>
        a.username == e.target.user.value && a.password == e.target.pass.value
    );
    if (result == "") {
      alert("Wrong password or username");
    } else {
      setCur((a) => (a = result[0].id));
      nav(`/main/${result[0].firstname +""+ result[0].lastname}`);
      console.log("sucess");
    }

    e.target.reset();
    return result[0].id;
  };

  return (
    <div>
      <h1 className="mt-5 text-center">Login</h1>
      <Card className="container p-5  mt-5" style={{maxWidth:"400px"}}>
        <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
          <Form.Control type="text" id="user" placeholder="@Username" />
          <Form.Control type="password" id="pass" placeholder="@password" />
          <Button type="submit">Login</Button>
        </form>
        <Link to="/register" className="mt-2">
          Don't have an account?
        </Link>
      </Card>
      <div className="text-center mt-3">
        <Button onClick={() => nav("/")}>Back to Home</Button>
      </div>
    </div>
  );
}

export default loginpage;
