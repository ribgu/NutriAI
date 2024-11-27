import { ArrowRightIcon } from '@/view/components/Icons/Icons'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='pt-24 pb-12 bg-gradient-to-b from-neutral-light to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8 items-center'>
          <div className='mb-12 lg:mb-0'>
            <h1 className='text-5xl font-bold text-neutral-dark mb-6'>
              Seu Assistente
              <span className='text-primary'> Nutricional </span>
              com IA
            </h1>
            <p className='text-lg text-gray-600 mb-8'>
              Transforme sua jornada de saúde com orientação nutricional personalizada, alimentada por inteligência artificial. Obtenha planos de refeições personalizados, análise de alimentos em tempo real e conselhos especializados ao seu alcance.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <button className='bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-light transition-colors flex items-center justify-center'>
                Comece sua Jornada
                <ArrowRightIcon className='ml-2 h-5 w-5' />
              </button>
              <button className='border-2 border-primary text-primary px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-colors'>
                Ver Demonstração
              </button>
            </div>
          </div>
          <div className='relative h-[500px]'>
            <Image
              src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
              alt='Arranjo de comida saudável'
              fill
              className='object-cover rounded-2xl shadow-xl'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}