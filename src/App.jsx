import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Sobre from './components/Sobre/Sobre'
import Projetos from './components/Projetos/Projetos'
import Formacao from './components/Formacao/Formacao'
import Experiencia from './components/Experiencia/Experiencia'
import Footer from './components/Footer/Footer'
import './index.css'
import React from 'react'

export default function App() {
  return (
    <div className="bg-[#0d0d0f] min-h-screen text-[#c5c5c9]">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Formacao />
        <Experiencia />
        <Footer />
      </main>
    </div>
  )
}
