'use client'
import React, { useState } from 'react'

interface NavitemsProps {
  title: string
  icontype: React.ReactNode
  megaMenu?: { heading: string; items: { label: string; href: string }[] }[]
}

const Navitems: React.FC<NavitemsProps> = ({ title, icontype, megaMenu }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <li
      className="relative group flex items-center gap-1.5 text-black text-base hover:text-green-800 cursor-pointer font-medium"
      onClick={toggleDropdown}
      onMouseEnter={() => setIsOpen(true)} // Open dropdown on hover (desktop)
      onMouseLeave={() => setIsOpen(false)} // Close dropdown when not hovered (desktop)
    >
      <div className="flex items-center gap-1">
        {title}
        {icontype}
      </div>

      {megaMenu && isOpen && (
        <div className="absolute top-full left-0 w-[100%] xl:w-[500px] p-6 bg-white shadow-xl rounded-lg z-50">
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            {megaMenu.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-2 text-gray-700">{section.heading}</h3>
                <ul className="flex flex-col space-y-1">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.href} className="text-sm hover:text-green-500 transition">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  )
}

export default Navitems