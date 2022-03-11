import React from "react";
import { Container } from "react-bootstrap";

/*
 * Footer component includes link to repository
 */
export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <Container>
          <div className="text-center" id="footer-text">
            Find this project's code on{" "}
            <a href="https://github.com/emeshnick/actor-search">Github</a>
          </div>
        </Container>
      </div>
    );
  }
}
