import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Header from './Components/Header'
import Signup from './Auth/Signup'
import Index from './Auth/Index'
import Login from './Auth/Login'
import Books from './Book/Books'
import Footer from './Components/Footer'
import BooksDetail from './Book/BooksDetails'
import ThemeContextProvider from './context/ThemeContext'

function App() {

  return (
    <>
    <ThemeContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/notfound' element={<NotFound />} />

          <Route path='/auth'>
            <Route index element={<Index />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
          </Route>
          <Route path='/books'>
            <Route index element={<Books />} />
            <Route path=':title' element={<BooksDetail />} />

          </Route>

        </Routes>
        <Footer />
      </BrowserRouter>
      </ThemeContextProvider>
    </>
  )
}

export default App
