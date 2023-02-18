import React from 'react'
import Footer from './footer'
import Header from './header'

function Layout({children}) {
  return (
    <>
        <Header></Header>
        {children}
        <Footer></Footer>
    </>
  )
}

export default Layout