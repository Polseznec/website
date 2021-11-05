import styled from "styled-components";

export const LandingTitle = styled.div`
  z-index: 1000;
  position: absolute;
  font-size: 2em;
  display: inline-block;
`;

export const FooterLink = styled.a`
  background: linear-gradient(
    90deg,
    rgba(181, 255, 198, 1) 0%,
    rgba(181, 210, 255, 1) 100%
  );
  margin: 0;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-transform: uppercase;
  display: block;
  font-size: 70px;
  position: relative;
  color: whitesmoke;
  text-decoration: none;
  z-index: 1;
  transition: all 0.4s ease-in-out;
  padding-left: -12px;
  &:hover {
    background: linear-gradient(90deg, #b5ccff 0%, #ffb5c8 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 100px;
    padding-left: -12px;
  }
`;
