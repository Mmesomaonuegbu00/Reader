'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface NavitemsProps {
  id: string
  title: string
  icontype: React.ReactNode
  megaMenu: {
    heading: string
    items: { label: string; href: string }[]
  }[]
  activeDropdown: string | null
  setActiveDropdown: React.Dispatch<React.SetStateAction<string | null>>
  isMobile?: boolean
}

const Navitems: React.FC<NavitemsProps> = ({
  title,
  icontype,
  megaMenu,
  id,
  activeDropdown,
  setActiveDropdown,
}) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isOpen = activeDropdown === id

  const handleToggle = () => {
    if (isMobile && setActiveDropdown && id) {
      setActiveDropdown(isOpen ? null : id)
    }
  }

  return (
    <li
      className="relative cursor-pointer"
      onClick={handleToggle}
      onMouseEnter={() => {
        if (!isMobile && setActiveDropdown && id) setActiveDropdown(id)
      }}
      onMouseLeave={() => {
        if (!isMobile && setActiveDropdown) setActiveDropdown(null)
      }}
    >
      <div className="flex items-center gap-1 text-base font-semibold text-gray-800">
        {title}
        {icontype}
      </div>

      {megaMenu && isOpen && (
        <div
          className={`${
            isMobile ? 'mt-4' : 'absolute top-full left-0'
          } bg-transparent xl:bg-white rounded-lg z-50`}
        >
          <div className="p-4">
            {megaMenu.map((group, index) => (
              <div key={index} className="mb-4">
                
                <ul className="flex flex-col justify-center space-y-2">
                  {group.items.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-700 hover:text-green-600 block"
                      >
                        {item.label}
                      </Link>
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
