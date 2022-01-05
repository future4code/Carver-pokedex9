import React from "react";
import Router from "./routers/Router";
import GlobalState from "./global/GlobalState";
import styled, { createGlobalStyle  } from "styled-components";
import Header from "./components/Header/Header";
import * as Styled from './styled-components/styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    max-width: 100vw;
  }
`;

export default function App() {
  return (
    <GlobalState>
      <GlobalStyle />
        <Styled.DisplayPrincipal>
          <Header/>
          <Router />
        </Styled.DisplayPrincipal>
    </GlobalState>
  );
}