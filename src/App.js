import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { GlobalStyle } from './styles/GlobalStyles'

import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

export const App = () => {
  const urlParams = new URLSearchParams(location.search);
  const detailId = urlParams.get('detail');

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
