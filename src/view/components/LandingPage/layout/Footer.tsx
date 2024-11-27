import { BrainIcon, GithubIcon, XIcon, LinkedinIcon } from '@/view/components/Icons/Icons'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-neutral-dark text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='col-span-1 md:col-span-2'>
            <div className='flex items-center mb-4'>
              <BrainIcon className='h-8 w-8 text-primary' />
              <span className='ml-2 text-xl font-bold'>NutriAI</span>
            </div>
            <p className='text-gray-400 mb-4'>
              Transforme sua jornada de saúde com orientação nutricional alimentada por IA e recomendações personalizadas.
            </p>
            <div className='flex space-x-4'>
              <Link href='#' className='text-gray-400 hover:text-primary transition-colors'>
                <XIcon className='h-6 w-6' />
              </Link>
              <Link href='#' className='text-gray-400 hover:text-primary transition-colors'>
                <GithubIcon className='h-6 w-6' />
              </Link>
              <Link href='#' className='text-gray-400 hover:text-primary transition-colors'>
                <LinkedinIcon className='h-6 w-6' />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className='text-lg font-semibold mb-4'>Produto</h3>
            <ul className='space-y-2'>
              <li><Link href='#features' className='text-gray-400 hover:text-primary transition-colors'>Recursos</Link></li>
              <li><Link href='#how-it-works' className='text-gray-400 hover:text-primary transition-colors'>Como Funciona</Link></li>
              <li><Link href='#pricing' className='text-gray-400 hover:text-primary transition-colors'>Preços</Link></li>
              <li><Link href='#testimonials' className='text-gray-400 hover:text-primary transition-colors'>Depoimentos</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className='text-lg font-semibold mb-4'>Suporte</h3>
            <ul className='space-y-2'>
              <li><Link href='#' className='text-gray-400 hover:text-primary transition-colors'>Central de Ajuda</Link></li>
              <li><Link href='#' className='text-gray-400 hover:text-primary transition-colors'>Política de Privacidade</Link></li>
              <li><Link href='#' className='text-gray-400 hover:text-primary transition-colors'>Termos de Serviço</Link></li>
              <li><Link href='#' className='text-gray-400 hover:text-primary transition-colors'>Fale Conosco</Link></li>
            </ul>
          </div>
        </div>
        
        <div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400'>
          <p>&copy; {new Date().getFullYear()} NutriAI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}