import { GlobalStyle } from './css/GlobalStyle';
import { Router } from './router/Router';
import React from 'react';

export const App = () => {
  return <>
    <GlobalStyle />
    <Router />
  </>
}
