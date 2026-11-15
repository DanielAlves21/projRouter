import { useState } from 'react'
import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom'
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
import './App.css'

function App() {

  return (
    <>
      <Suspense fallback={<h2>Carregando página...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>  
    </>  
  )
}

export default App
