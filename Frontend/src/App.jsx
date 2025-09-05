import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import FloatingResume from './components/FloatingResume'
import ProjectDetail from './pages/ProjectDetail'
import FloatingChatButton from './components/FloatingChatButton'
import SocialLinks from './components/SocialLinks'

export default function App(){
  const [theme, setTheme] = useState(()=>{
    try{ return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') }
    catch(e){ return 'light' }
  })

  useEffect(()=>{
    try{ localStorage.setItem('theme', theme) }catch(e){}
    if(theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  },[theme])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100">
      <nav className="bg-white sticky top-0 z-10 dark:bg-gray-800 shadow-sm">
        <div className="container-custom px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-green-800 dark:text-green-300">SK❤️</Link>
          <div className="space-x-6 hidden md:block">
            <Link to="/projects" className="text-gray-700 dark:text-gray-200 hover:text-green-700">Projects</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-green-700">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <button
              aria-label="Toggle theme"
              onClick={()=> setTheme(t=> t === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
            <div className="md:hidden">{/* mobile menu placeholder */}</div>
          </div>
        </div>
      </nav>

      <main className="container-custom px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/kisanconnect" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <FloatingResume />
      <FloatingChatButton />

      <footer className="bg-white border-t py-6 mt-10 ">
        <div className="container-custom flex items-center justify-between min-w-48">
          <div className="text-sm text-gray-600 pl-9">Built with ❤️ — Portfolio</div>
          <SocialLinks />
        </div>
      </footer>
    </div>
  )
}
