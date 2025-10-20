import React from 'react'
import ProjectCard from './ProjectCard'
import Hero from './Hero'
import Achievements from './Achievements'
const inforsysLink = 'https://drive.google.com/file/d/103JLhV_-n9C2arEiCm6ITIo8ki4fxgEs/view?usp=drive_link'

const Home = () => (
  <div>
    <Hero />

    <div className="container-custom px-4">
      <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
      <p className="text-muted mb-6">Selected works — focused on UX, performance and measurable outcomes.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard title="MealMend" description="MealMend: Collects waste food, donates, recycles into compost, supports communities." tech="Html, CSS, JS" image="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=60" link="https://github.com/Sonukr2006/MealMend-Backend" />
        <ProjectCard title="AI Chatbot Demo" description="Frontend chat UI with language support (EN/HI)" tech="React, WebSocket" image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60" />
        <ProjectCard title="Auto-genr-Pass" description="Small utility project" tech="React" image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60" />
      </div>
      
      <section className="mt-10">
        <h3 className="text-xl font-semibold mb-3">Tech & Tools</h3>
        <p className="text-muted mb-4">Technologies I use frequently — useful to implement modern, fast web apps.</p>
        <div className="flex flex-wrap gap-2">
          {['React', 'Tailwind CSS', 'Vite', 'JavaScript', 'TypeScript', 'React Router', 'Open-Meteo', 'lucide-react', 'Node.js'].map((t,i)=> (
            <span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700">{t}</span>
          ))}
        </div>
      </section>
    </div>

    <Achievements items={[
      { title: 'Hackathon ', org: 'HackForGood', year: '2024', link: '#' },
      { title: 'IT Essentials Certificate', org: 'Cisco', year: '2024', link: '/assets/SonuKumar-IT%20Essentials-certificate.pdf' },
      { title: 'Intern - Website Maker', org: 'Intern Certify', year: '2024', link: '/assets/Intern%20Certify%20Certification%20_20241130_155155_0000.pdf' },
      { title: 'Foundation Course in AI Applications', org: 'NIELIT', year: '2024', link: '/assets/MarkSheet_1740245.pdf' },
      { title: 'Programming Fundamentals using Python', org: 'INFOSYS', year: '2025', link: {inforsysLink} }
    ]} />
  </div>
)

export default Home
