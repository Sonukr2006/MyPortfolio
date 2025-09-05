import React from 'react'
import { Link } from 'react-router-dom'

const ProjectDetail = () => {
  return (
    <div className="container-custom px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
        <div className="flex items-start gap-6 mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-green-800 mb-2">KisanConnect</h1>
            <p className="text-muted">Weather updates, crop guidance and an AI-chat assistant tailored for Indian farmers.</p>
          </div>
          <div className="text-right">
            <a className="inline-block px-3 py-1 rounded bg-green-700 text-white" href="#">Live demo (coming)</a>
            <br />
            <a className="inline-block mt-2 text-sm text-gray-500" href="#">GitHub: /your-repo/kisanconnect</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <img className="w-full rounded project-img" src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1000&q=60" alt="KisanConnect desktop" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Problem</h3>
            <p className="text-sm text-muted mb-4">Many smallholder farmers need localized weather info and simple, bilingual guidance. Mobile-friendly access and an easy chat interface help reduce friction.</p>

            <h3 className="font-semibold text-lg mb-2">Approach</h3>
            <ul className="list-disc pl-5 text-sm text-muted mb-4">
              <li>Built a responsive React frontend with Tailwind CSS.</li>
              <li>Integrated a lightweight weather API for current conditions.</li>
              <li>Added an AI chat UI (placeholder) to answer common farmer questions; can be wired to an AI backend.</li>
            </ul>

            <h3 className="font-semibold text-lg mb-2">Tech</h3>
            <div className="flex gap-2 flex-wrap text-xs text-gray-600">
              <span className="px-2 py-1 bg-gray-100 rounded">React</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Tailwind</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Vite</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Screenshots</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img className="w-full rounded" src="https://images.unsplash.com/photo-1516912912232-7b7b76ba8aa1?auto=format&fit=crop&w=800&q=60" alt="mobile" />
            <img className="w-full rounded" src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=60" alt="desktop" />
          </div>
        </div>

        <div className="mb-6 bg-gray-50 p-4 rounded">
          <h3 className="font-semibold text-lg mb-2">Run locally</h3>
          <p className="text-sm text-muted mb-2">To run the demo locally, clone the repo, install dependencies and start the Vite dev server:</p>
          <pre className="bg-white p-3 rounded text-sm overflow-auto">git clone https://github.com/your-repo/kisanconnect.git</pre>
        </div>

        <div className="flex justify-between items-center">
          <Link to="/projects" className="text-gray-600 hover:underline">← Back to projects</Link>
          <div className="text-sm text-muted">Last updated: Sep 2025</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
