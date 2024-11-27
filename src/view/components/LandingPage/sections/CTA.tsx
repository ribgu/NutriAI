import { ArrowIcon } from '@/view/components/Icons/Icons'

export default function CTA() {
  return (
    <section className='py-20 bg-primary'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-4xl font-bold text-white mb-6'>
          Comece Sua Jornada de Saúde Hoje
        </h2>
        <p className='text-lg text-white/90 mb-8 max-w-2xl mx-auto'>
          Junte-se a milhares de usuários que transformaram suas vidas com orientação nutricional personalizada alimentada por IA.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button className='bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center'>
            Começar Agora
            <ArrowIcon className='ml-2 h-5 w-5' />
          </button>
          <button className='border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors'>
            Agendar Demonstração
          </button>
        </div>
      </div>
    </section>
  )
}