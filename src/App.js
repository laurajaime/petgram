import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailID = urlParams.get('detail')

  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        {
          detailID
          ? <PhotoCardWithQuery id={detailID}/> 
          : (
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/pet/:id' element={<Home/>} />
              </Routes>
          )
        }
      </BrowserRouter>
    </div>
  )
}
