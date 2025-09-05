import React, { useState, useEffect, useRef } from 'react'

const texts = {
  en: {
    title: 'AI Agent',
    greeting: 'Hello! I am here to help — ask me anything.',
    demoReply: 'This is a demo reply. Connect to an AI backend for real responses.',
    placeholder: "What's on your mind? 💬",
    close: 'Close'
  },
  hi: {
    title: 'AI एजेंट',
    greeting: 'नमस्ते किसान भाई! मैं आपकी कैसे मदद कर सकता हूँ?',
    demoReply: 'यह एक डेमो उत्तर है — असली AI बैकएंड जोड़ें।',
    placeholder: 'क्या सोच रहे हैं? 💬',
    close: 'बंद करें'
  }
}

const ModalChat = ({ onClose }) => {
  const [lang, setLang] = useState(() => {
    // default to English
    try { const stored = localStorage.getItem('kisan_lang'); return stored || 'en' } catch { return 'en' }
  })
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    // set initial greeting when component mounts or language changes
    setMessages([{ from: 'ai', text: texts[lang].greeting }])
    try { localStorage.setItem('kisan_lang', lang) } catch {}
  }, [lang])

  useEffect(() => {
    // scroll to bottom when messages update
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages])

  const send = e => {
    e && e.preventDefault()
    if (!input.trim()) return
    setMessages(m => [...m, { from: 'user', text: input }])
    const userText = input
    setInput('')
    setTimeout(() => {
      // demo reply using selected language
      setMessages(m => [...m, { from: 'ai', text: texts[lang].demoReply }])
    }, 700)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full md:w-3/4 lg:w-1/2 bg-white dark:bg-gray-900/90 rounded-t-lg md:rounded-lg shadow-xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b gap-4 border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="font-semibold text-lg">{texts[lang].title}</div>
            <select aria-label="Select language" value={lang} onChange={e => setLang(e.target.value)} className="text-sm border rounded px-2 py-1 bg-white dark:bg-gray-800 dark:text-gray-100">
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
          <button onClick={onClose} className="text-gray-600 dark:text-gray-200" aria-label={texts[lang].close}>{texts[lang].close}</button>
        </div>
        <div ref={scrollRef} className="p-4 h-72 md:h-80 overflow-y-auto bg-gray-50 dark:bg-gray-900/60">
          {messages.map((m, i) => (
            <div key={i} className={`mb-3 flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-3 py-2 rounded-lg ${m.from === 'user' ? 'bg-green-100 dark:bg-green-800/60 text-gray-800 dark:text-gray-100' : 'bg-white dark:bg-gray-800/70 border dark:border-gray-700'}`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={send} className="p-4 border-t flex gap-2 border-gray-200 dark:border-gray-700">
          <input value={input} onChange={e => setInput(e.target.value)} className="flex-1 p-2 border rounded bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600" placeholder={texts[lang].placeholder} />
          <button type="submit" className="px-4 py-2 bg-green-700 text-white rounded">Send</button>
        </form>
      </div>
    </div>
  )
}

export default ModalChat
