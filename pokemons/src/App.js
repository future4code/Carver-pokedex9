import React from "react";
import Router from "./routers/Router";
import GlobalState from "./global/GlobalState";
import styled, { createGlobalStyle  } from "styled-components";
import * as Styled from './styled-components/styled-components';

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
          <Router />
        </Styled.DisplayPrincipal>
    </GlobalState>
  );
}