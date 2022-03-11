import React from "react";
import { Container } from "react-bootstrap";
class About extends React.Component {
  render() {
    return (
      <Container className="main-container">
        <h1 className="header">About Star Signs</h1>
        <p>
          Star Signs leans into two of the guiltiest of guilty pleasures:
          <strong> celebrity gossip and astrology.</strong> Add a dash of
          horoscope to your tabloids, or throw in a household name to your birth
          chart reading.
          <br></br>
          <br></br>
          This app uses the TMDB api to get information about actors. You can
          learn more about the api{" "}
          <a href="https://developers.themoviedb.org/3">here</a>.
        </p>
        <p id="signature">Created in 2022 by Elijah Meshnick</p>
      </Container>
    );
  }
}

export default About;
