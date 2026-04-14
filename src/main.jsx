import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import RSTUHub from './pages/RSTUHub'
import RSTUDetail from './pages/RSTUDetail'
import ProdukHub from './pages/ProdukHub'
import ProdukDetail from './pages/ProdukDetail'
import PbtInovasiHub from './pages/PbtInovasiHub'
import PbtInovasiDetail from './pages/PbtInovasiDetail'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rstu" element={<RSTUHub />} />
        <Route path="/rstu/:topic" element={<RSTUDetail />} />
        <Route path="/produk" element={<ProdukHub />} />
        <Route path="/produk/:product" element={<ProdukDetail />} />
        <Route path="/pbt" element={<PbtInovasiHub />} />
        <Route path="/pbt/:pbtId" element={<PbtInovasiDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
