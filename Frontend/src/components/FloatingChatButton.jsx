import React, { useState } from 'react'
import ModalChat from './ModalChat'

const FloatingChatButton = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
  <button aria-label="Open chat" onClick={() => setOpen(true)} className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-700 dark:bg-green-800 text-white shadow-lg flex items-center justify-center hover:bg-green-800">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
      {open && <ModalChat onClose={() => setOpen(false)} />}
    </>
  )
}

export default FloatingChatButton
