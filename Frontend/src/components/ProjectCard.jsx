import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({title, description, tech, image, link = '#'}) => (
  <article className="bg-white dark:bg-gray-800 rounded-lg p-0 overflow-hidden card">
    <div className="relative">
      <img className="w-full project-img" src={image || 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=60'} alt={title} />
  <div className="absolute left-3 top-3 bg-white/80 dark:bg-gray-700/80 px-2 py-1 rounded text-xs font-semibold text-green-800 dark:text-green-200">{tech}</div>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-sm text-muted dark:text-gray-300 mb-3">{description}</p>
      <div className="flex justify-between items-center">
        <Link to={link} className="text-green-600 dark:text-green-300 hover:underline">View</Link>
        <a className="text-sm text-gray-500 dark:text-gray-400" href="https://github.com/Sonukr2006">GitHub</a>
      </div>
    </div>
  </article>
)

export default ProjectCard
