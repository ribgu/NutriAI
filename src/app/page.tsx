'use server'

import Footer from '@/view/components/LandingPage/layout/Footer'
import Navbar from '@/view/components/LandingPage/layout/NavBar'
import AIChat from '@/view/components/LandingPage/sections/AIChat'
import CTA from '@/view/components/LandingPage/sections/CTA'
import Features from '@/view/components/LandingPage/sections/Features'
import Hero from '@/view/components/LandingPage/sections/Hero'
import HowItWorks from '@/view/components/LandingPage/sections/HowItWorks'
import Testimonials from '@/view/components/LandingPage/sections/Testimonials'

export default async function Home() {
  return (
    <main className='min-h-screen bg-background'>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AIChat />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}