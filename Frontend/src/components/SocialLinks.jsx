import React from 'react'
import { Linkedin, Github, Twitter, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const SocialLinks = () => {
  const links = [
    { href: 'https://www.linkedin.com/in/sonu-kumar-00451228a/', label: 'LinkedIn', Icon: Linkedin },
    { href: 'https://github.com/Sonukr2006', label: 'GitHub', Icon: Github },
    { href: '#', label: 'Twitter', Icon: Twitter },
    { href: 'mailto:sonukr96710@gmail.com', label: 'Email', Icon: Mail }
  ]

  return (
    <div className="flex items-center justify-center gap-4 pr-9">
      {links.map((l, i) => (
        <Link key={i} to={l.href} aria-label={l.label} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-green-700">
          <l.Icon className="w-5 h-5" />
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks
