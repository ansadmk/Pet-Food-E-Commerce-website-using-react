import { useNavigate, useParams } from "react-router-dom";
import { Users } from "../Context/Users";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function ProductDetails() {
  const nav = useNavigate();
  const { product,cur } = useContext(Users);
  const { pid } = useParams();
  const dataprod = product.filter((a) => a.id == pid);

  return (
    <div
      style={{ maxHeight: "800px", maxWidth: "500px" }}
      className="m-auto border-0 mt-5 d-flex gap-5 "
    >
      <img
        src={dataprod[0].img}
        style={{ maxHeight: "500px", maxWidth: "300px" }}
        className="rounded-4 img-fluid ms-3"
      />
      <div className="d-flex flex-column gap-5">
        <div className="">
          <h1>{dataprod[0].name}</h1>
          <h3 className="text-success">${dataprod[0].price}</h3>
        </div>
        <Button
          className="mt-3 bg-dark border-0 justify-self-end"
          onClick={() => {
            cur==""? alert("Must login"):
            nav(`/main/cart/${dataprod[0].id}`);
            
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;
