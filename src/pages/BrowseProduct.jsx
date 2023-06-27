import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Users } from "../Context/Users";
import { useContext, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import Map from "../Components/Map";

function BrowseProduct() {
  const [arr, setArr] = useState("");
  const { product } = useContext(Users);

  const { p } = useParams();

  if (p == "Cat") {
    var catprod = product.filter((a) => a.catgory == "cat");
  } else if (p == "Dog") {
    var dogprod = product.filter((a) => a.catgory == "dog");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (p == "Cat") {
      var arr1 = catprod.filter(
        (a) => a.name == e.target.get.value || a.catgory == e.target.get.value
      );
    } else if (p == "Dog") {
      var arr1 = dogprod.filter(
        (a) => a.name == e.target.get.value || a.catgory == e.target.get.value
      );
    } else {
      var arr1 = product.filter(
        (a) => a.name == e.target.get.value || a.catgory == e.target.get.value
      );
    }
    setArr((a) => (a = arr1));
    e.target.reset();
  };
  return (
    <div>
      <h1 className="text-center mt-3">Browse Products of {p}</h1>
      <form className="d-flex container mt-5" onSubmit={handleSubmit}>
        <Form.Control
          id="get"
          className=" ms-0 me-1 m-auto border-5 shadow border-dark-subtle w-50"
        />{" "}
        <Button variant="dark" type="submit">
          search
        </Button>
        <Button variant="dark" onClick={() => setArr("")} className="ms-2">
          all
        </Button>
      </form>
      <Row className=" container m-auto mt-5 gap-0">
        {p == "Cat" ? (
          arr == "" ? (
            <Map value={catprod} />
          ) : (
            <Map value={arr} />
          )
        ) : p == "all" ? (
          arr == "" ? (
            <Map value={product} />
          ) : (
            <Map value={arr} />
          )
        ) : p == "Dog" ? (
          arr == "" ? (
            <Map value={dogprod} />
          ) : (
            <Map value={arr} />
          )
        ) : null}
      </Row>
    </div>
  );
}

export default BrowseProduct;
