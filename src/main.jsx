import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import RSTUHub from './pages/RSTUHub'
import RSTUDetail from './pages/RSTUDetail'
import ProdukHub from './pages/ProdukHub'
import ProdukDetail from './pages/ProdukDetail'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rstu" element={<RSTUHub />} />
        <Route path="/rstu/:topic" element={<RSTUDetail />} />
        <Route path="/produk" element={<ProdukHub />} />
        <Route path="/produk/:product" element={<ProdukDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
