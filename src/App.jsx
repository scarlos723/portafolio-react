import React from 'react'
import { Introduction } from './components/Introdution'
import { Router } from '@reach/router'
import { Navbar } from './components/Navbar'

import { GlobalStyles } from './GlobalStyles'
import { Education } from './components/Education'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Router>
        <Introduction path='/' />
        <Education path='/education' />
      </Router>

    </>
  )
}
