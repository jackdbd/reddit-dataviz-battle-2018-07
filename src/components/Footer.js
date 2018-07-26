import React from "react";
import styled from "styled-components";

const FooterGrid = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(321px, 1fr));
  grid-gap: 10px;
  background-color: ${props => props.backgroundColor};
`;
const Div = styled.div`
  border-style: dashed;
`;

const Ul = styled.ul`
  list-style-type: none;
`;

const Footer = props => {
  const { backgroundColor } = props;
  return (
    <FooterGrid backgroundColor={backgroundColor}>
      <Div>
        <h5>About</h5>
        <span>
          Code (TODO):{" "}
          <a
            href="https://github.com/jackdbd/dataviz-challenge-munich"
            target="_blank"
            rel="noopener noreferrer"
          >
            repo on GitHub
          </a>
        </span>
        <br />
        <span>
          Me:{" "}
          <a
            href="https://twitter.com/jackdbd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <span> / </span>
          <a
            href="https://www.linkedin.com/in/giacomodebidda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <span> / </span>
          <a
            href="https://www.giacomodebidda.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </span>
      </Div>

      <Div>
        <h5>Built with</h5>
        <Ul>
          <li>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
          </li>
          <li>
            <a
              href="https://github.com/russellgoldenberg/scrollama"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scrollama
            </a>
          </li>
          <li>
            <a
              href="https://d3js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              D3
            </a>
          </li>
          <li>
            <a
              href="https://vx-demo.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              vx
            </a>
          </li>
        </Ul>
      </Div>
    </FooterGrid>
  );
};

export default Footer;
