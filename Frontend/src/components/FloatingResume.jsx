import React from 'react'

const FloatingResume = () => (
  <a href="/assets/resume.pdf" className="fixed bottom-6 left-6 z-50">
    <button className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center border border-green-100 hover:shadow-xl">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
      </svg>
    </button>
  </a>
)

export default FloatingResume
