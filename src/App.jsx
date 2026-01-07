import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Aboutus from "./components/about"
import Service from './components/service'
import Contact from "./components/conact"
import Footer from './components/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/hero'
import Products from './components/products'
import products from './data'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
      <BrowserRouter>
      <Routes>
        <Route
        path='/' element={
          <>
          <Hero/>
          <Products/>
          </>
        }/>
        <Route
        path='/about' element={<Aboutus/>}/>
        <Route 
        path='/products' element={<Products/>}/>
        <Route
        path='/service' element={<Service/>}/>
        <Route
        path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    
     <Footer/>

    </>
    
  )
}

export default App
