import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import RSTU from './pages/RSTU'
import Produk from './pages/Produk'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rstu" element={<RSTU />} />
        <Route path="/produk" element={<Produk />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
