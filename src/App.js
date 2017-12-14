import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }} />
        </Row>
      </Container>
    );
  }
}

export default App;
