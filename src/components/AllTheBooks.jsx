import React from "react";
import { Card, CardBody, CardImg, CardTitle, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

class AllTheBooks extends React.Component {
  render() {
    return (
      <Container>
        <Row className="gy-3">
          {fantasy.map(book => {
            return (
              <Col xs={12} md={4} xl={3}>
                <Card style={{ width: "18rem" }}>
                  <CardImg variant="top" src={book.img} />
                  <CardBody>
                    <CardTitle className="mb-3">{book.title}</CardTitle>
                    <span className="rounded-pill px-3 py-2 bg-info">${book.price}</span>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
