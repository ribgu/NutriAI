'use client'

import React, { useState } from 'react'
import { BedDouble, GlassWater, LayoutDashboard, LogOut, Utensils } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sidebar, SidebarBody, SidebarLink } from '../Sidebar/Sidebar'
import { useAuth } from '@/contexts/AuthContext'

interface AppLayoutProps {
  children: React.ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [open, setOpen] = useState(false)
  const { user, isLoading, signOut } = useAuth()

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault()
    signOut()
  }

  const links = [
    {
      label: 'Dashboard',
      href: '#',
      icon: (
        <LayoutDashboard className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
      ),
    },
    {
      label: 'Refeições',
      href: '/meals',
      icon: (
        <Utensils className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
      ),
    },
    {
      label: 'Água',
      href: '/water',
      icon: (
        <GlassWater className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
      ),
    },
    {
      label: 'Sono',
      href: '/sleep',
      icon: (
        <BedDouble className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
      ),
    },
    {
      label: 'Logout',
      href: '/login',
      icon: (
        <LogOut className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
      ),
      onClick: handleLogout
    },
  ]

  const userName = user?.name ?? 'Carregando...'

  return (
    <div className="flex h-screen">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: isLoading ? 'Carregando...' : (userName ?? 'Usuário não autenticado'),
                href: '#',
                icon: (
                  <Image
                    src="https://64.media.tumblr.com/01b9b5b72a804dcb44c31bf8938fca68/c81805076c43c391-78/s1280x1920/6f546795bac3d1020e546cca1d942c807d6e28d5.jpg"
                    className="h-5 w-5 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main Content */}
      <main className="flex-grow bg-white dark:bg-neutral-800 p-4 rounded-tl-2xl">
        {children}
      </main>
    </div>
  )
}

const Logo = () => (
  <Link
    href="#"
    className="font-normal h-16 flex space-x-2 items-center text-end text-sm text-black py-1 relative z-20"
  >
    <LogoIcon />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium text-base text-black text-end dark:text-white whitespace-pre mt-2"
    >
      NutriAI
    </motion.span>
  </Link>
)

const LogoIcon = () => (
  <Image src="nutriai.svg" alt="Logo" width={28} height={28} className="py-4" />
)

export default AppLayout
