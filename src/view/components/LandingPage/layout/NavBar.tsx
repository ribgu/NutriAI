'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import PrimaryButton from '@/view/components/Buttons/PrimaryButton'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <span className='text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
              NutriAI
            </span>
          </div>

          {/* Desktop Menu */}
          <div className='hidden lg:flex space-x-8'>
            {['Recursos', 'Como Funciona', 'Chat IA', 'Depoimentos'].map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className='relative text-gray-700 hover:text-primary transition-colors duration-200 group'
              >
                {item}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full' />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className='hidden lg:flex'>
            <PrimaryButton className='hover:scale-105 transition-transform duration-200'>
              Começar Agora
            </PrimaryButton>
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='p-2 rounded-md focus:outline-none'
            >
              <div className='w-6 h-5 flex flex-col justify-between'>
                <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`} />
                <span className={`w-full h-0.5 bg-gray-600 transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`} />
                <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white/90 backdrop-blur-md`}>
        <div className='px-4 pt-2 pb-4 space-y-3'>
          {['Recursos', 'Como Funciona', 'Chat IA', 'Depoimentos'].map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className='block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className='pt-2'>
            <PrimaryButton className='w-full justify-center hover:scale-105 transition-transform duration-200'>
              Começar Agora
            </PrimaryButton>
          </div>
        </div>
      </div>
    </nav>
  )
}