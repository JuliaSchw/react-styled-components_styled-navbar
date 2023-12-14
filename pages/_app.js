import Link from "next/link";
import GlobalStyle from "../styles";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: aliceblue;
  &:hover {
    border-bottom: solid 2px grey;
  }
  padding: 1rem;
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled.a`
  padding: 5px 10px;
  border-radius: 3px;
  border: solid 1px lightgray;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: lightblue;
    border: solid 1px lightblue;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledNav>
        <StyledList>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink href="/contact">Contact</StyledLink>
          </li>
        </StyledList>
      </StyledNav>
      <Component {...pageProps} />
    </>
  );
}
