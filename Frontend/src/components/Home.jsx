import React from 'react'
import ProjectCard from './ProjectCard'
import Hero from './Hero'
import Achievements from './Achievements'


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
      { title: 'SMART BIHAR HACKATHON ', org: 'GOVT. OF BIHAR + IITPATNA', year: '2024', link: 'https://drive.google.com/file/d/1wP4dI3MndpqkBWcG3fgE8GjPZ_fOpwgD/view?usp=sharing' },
      { title: 'BUG HUNT', org: 'CGC UNIVERSITY, MOHALI', year: '2025', link: 'https://drive.google.com/file/d/1Rl0FOdY-_nTo7XNAp-_LoSV3GEteXiU2/view?usp=sharing' },
      { title: 'SMART INDIA HACKATHON', org: 'GOVT. OF INDIA', year: '2025', link: 'https://drive.google.com/file/d/1Xrt1poncIaSrEgv5GESwPm8DNj4v4aHN/view?usp=sharing' },
      { title: 'IT Essentials Certificate', org: 'Cisco', year: '2024', link: 'https://drive.google.com/file/d/1CcXkxKrLolF6BkaI2fwE8lQvDRi-4l1T/view?usp=sharing' },
      { title: 'Intern - Website Maker', org: 'Intern Certify', year: '2024', link: 'https://drive.google.com/file/d/19bfJaSsk-7GAozB0O9WxNlVK8Px9Q7RN/view?usp=sharing' },
      { title: 'Foundation Course in AI Applications', org: 'NIELIT', year: '2024', link: '/assets/MarkSheet_1740245.pdf' },
      { title: 'Programming Fundamentals using Python', org: 'INFOSYS', year: '2025', link: 'https://drive.google.com/file/d/103JLhV_-n9C2arEiCm6ITIo8ki4fxgEs/view?usp=drive_link' },
      { title: 'Basics of Flutter', org: 'THINKNEXT', year: '2025', link: 'https://drive.google.com/file/d/1BKcws4iLusGi8XDpxnzF9aX1pwmMuVFn/view?usp=sharing' },
    ]} />
  </div>
)

export default Home
