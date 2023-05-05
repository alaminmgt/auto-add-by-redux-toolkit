import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbars from "./components/Navbars";
import Header from "./components/Header";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header/>
          </Col>
        </Row>
      </Container>
      <Container className="m-auto">
        <Row className="justify-content-md-center ">
          <Col sm={12} lg="6">
            <Navbars/>
          </Col>
        </Row>
      </Container>
      <Container className="m-auto">
        <Row className="justify-content-md-center ">
          <Col sm={12} lg="6">
            <UserDetails/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
