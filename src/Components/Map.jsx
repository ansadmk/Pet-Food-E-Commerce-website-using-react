import { Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Map({ value }) {
  const nav = useNavigate();
  return (
    <>
      {value.map((a) => (
        <Col className="" lg={3}>
          <Card
            style={{ maxHeight: "500px", maxWidth: "300px" }}
            onClick={() => nav(`/main/Details/${a.id}`)}
          >
            <Card.Img
              src={a.img}
              style={{ maxHeight: "350px", maxWidth: "300px" }}
            />
            <Card.Body>
              <Card.Title>{a.name}</Card.Title>
              <Card.Title>${a.price}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default Map;
