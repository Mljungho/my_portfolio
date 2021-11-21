import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react';
import axios from 'axios';
import CvCard from './CvCard'

class Cv extends Component {
  state = {
    cv: []
  };

  render() {
    const { cv } = this.state;

    let cvList = cv.map((cv) => {
      return (
        <div id={`cv-${cv.id}`} key={cv.id}>
          <CvCard cv = {cv} />
        </div>
      );
    });

    return (
      <Container>
        <h1 id="cv-header">My CV and contact information</h1>
        <Grid>{cvList}</Grid>
      </Container>
    );
  };

  componentDidMount() {
    axios.get("./data/cv.json").then((response) => {
      this.setState({ cv: response.data });
    });
  };
};

export default Cv;