import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
function AdminMap({ dup1, product, nav, setDup }) {
  return (
    <>
      {dup1 == "" ? (
        <h1>Nothing to see here....</h1>
      ) : (
        dup1.map((a, index) => (
          <Card className="m-2 p-3 rounded-4 hover d-inline p-0 m-0 shadow">
            <div onClick={() => nav(`/adminhome/ProductDetails/${a.id}`)} className="d-flex ">
              {" "}
              <img
                className=" w-25"
                style={{ maxHeight: "125px", maxWidth: "75px" }}
                src={a.img}
              />{" "}
              <div className="d-inline-flex ms-5 flex-column">
                <h1>{a.name}</h1> <h2>${a.price}</h2>
              </div>{" "}
            </div>
            <Button
              onClick={() => {
                product.splice(index, 1);
                setDup([...product]);
              }}
            >
              Delete
            </Button>{" "}
          </Card>
        ))
      )}
    </>
  );
}

export default AdminMap;
