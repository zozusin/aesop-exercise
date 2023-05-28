import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Col, Row, Button, Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.js";

function App() {
  let [shoesCard, setShoesCard] = useState([0, 0, 0]);
  let [aesop] = useState(data);
  let [index, setIndex] = useState(0);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Aesop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          {shoesCard.map((a, i) => {
            return <Shoes aesop={aesop} index={i} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

const Shoes = (props) => {
  return (
    <Col sm>
      <img
        src="https://www.aesop.com/medias/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-B500BT13RF-500mL-Web-Large-888x1100px.png?context=bWFzdGVyfGltYWdlc3w1NjM5OTR8aW1hZ2UvcG5nfGhkYS9oOGEvMTA2OTg0MDYzOTU5MzQvQWVzb3BfSGFuZF9SZXN1cnJlY3Rpb25fQXJvbWF0aXF1ZV9IYW5kX1dhc2hfQjUwMEJUMTNSRl81MDBtTF9XZWJfTGFyZ2VfODg4eDExMDBweC5wbmd8ZTRmZTgyMGNlMzI0NTM0MDUyZmUyZDBlYzNhZTY4NmFkNWFlZTRmN2E2NTEwN2MxMzgxOGVlZjkzMzgwMjdlYg"
        width="80%"
      />
      <h4>{props.aesop[props.index].title}</h4>
      <p>{props.aesop[props.index].price}</p>
    </Col>
  );
};

// 사진은 각자다르게 어떻게 넣지?
// 배경화면에 사진을 4개 넣고 싶을 때는 어떻게 하지?
// ("https://www.aesop.com/medias/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-B500BT13RF-500mL-Web-Large-888x1100px.png?context=bWFzdGVyfGltYWdlc3w1NjM5OTR8aW1hZ2UvcG5nfGhkYS9oOGEvMTA2OTg0MDYzOTU5MzQvQWVzb3BfSGFuZF9SZXN1cnJlY3Rpb25fQXJvbWF0aXF1ZV9IYW5kX1dhc2hfQjUwMEJUMTNSRl81MDBtTF9XZWJfTGFyZ2VfODg4eDExMDBweC5wbmd8ZTRmZTgyMGNlMzI0NTM0MDUyZmUyZDBlYzNhZTY4NmFkNWFlZTRmN2E2NTEwN2MxMzgxOGVlZjkzMzgwMjdlYg");
// ("https://www.aesop.com/medias/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-B500BT13RF-500mL-Web-Large-888x1100px.png?context=bWFzdGVyfGltYWdlc3w1NjM5OTR8aW1hZ2UvcG5nfGhkYS9oOGEvMTA2OTg0MDYzOTU5MzQvQWVzb3BfSGFuZF9SZXN1cnJlY3Rpb25fQXJvbWF0aXF1ZV9IYW5kX1dhc2hfQjUwMEJUMTNSRl81MDBtTF9XZWJfTGFyZ2VfODg4eDExMDBweC5wbmd8ZTRmZTgyMGNlMzI0NTM0MDUyZmUyZDBlYzNhZTY4NmFkNWFlZTRmN2E2NTEwN2MxMzgxOGVlZjkzMzgwMjdlYg");

export default App;
