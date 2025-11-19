import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from './Header'
import MainBody from './MainBody'
import Footer from './Footer'




function App() {
  return (
    <>
    <Header />

    <MainBody />

    <Footer />
    </>
  )
}

export default App
