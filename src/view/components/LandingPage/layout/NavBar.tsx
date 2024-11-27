'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MenuIcon, CloseIcon, BrainIcon } from '@/view/components/Icons/Icons'
import PrimaryButton from '@/view/components/Buttons/PrimaryButton'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='navbar bg-base-100/80 backdrop-blur-md fixed z-50 shadow-sm'>
      <div className='navbar-start'>
        <div className='flex-shrink-0 flex items-center'>
          <BrainIcon className='h-8 w-8 text-primary' />
          <span className='ml-2 text-xl font-bold'>NutritionAI</span>
        </div>
      </div>
      
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li><Link href='#features'>Recursos</Link></li>
          <li><Link href='#how-it-works'>Como Funciona</Link></li>
          <li><Link href='#ai-chat'>Chat IA</Link></li>
          <li><Link href='#testimonials'>Depoimentos</Link></li>
        </ul>
      </div>
      
      <div className='navbar-end'>
        <PrimaryButton className='hidden lg:flex'>
          Começar Agora
        </PrimaryButton>
        <div className='dropdown dropdown-end lg:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          {isOpen && (
            <ul className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
              <li><Link href='#features'>Recursos</Link></li>
              <li><Link href='#how-it-works'>Como Funciona</Link></li>
              <li><Link href='#ai-chat'>Chat IA</Link></li>
              <li><Link href='#testimonials'>Depoimentos</Link></li>
              <li><PrimaryButton className='mt-2'>Começar Agora</PrimaryButton></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}