import React from 'react'

const AchievementItem = ({ title, org, year, link }) => (
  <div className="p-3 bg-white/80 dark:bg-gray-800/60 rounded-lg shadow-sm flex justify-between items-start">
    <div>
    <div className="font-semibold text-gray-900 dark:text-gray-100">{title}</div>
    <div className="text-sm text-muted dark:text-gray-300">{org} • {year}</div>
    </div>
    {link && (
      <a href={link} target="_blank" rel="noreferrer" className="text-green-600 text-sm">View</a>
    )}
  </div>
)

const Achievements = ({ items = [] }) => {
  return (
    <section className="container-custom px-4 mt-8">
      <h2 className="text-2xl font-bold mb-4">Achievements & Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.length === 0 ? (
          <div className="text-muted">No items yet. Add course certificates, hackathon wins, or workshops here.</div>
        ) : (
          items.map((it, idx) => <AchievementItem key={idx} {...it} />)
        )}
      </div>
    </section>
  )
}

export default Achievements
