import { MessageSquareIcon, SendIcon } from '@/view/components/Icons/Icons'

import Image from 'next/image'

export default function AIChat() {
  return (
    <section id='ai-chat' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-12 items-center'>
          <div className='mb-12 lg:mb-0'>
            <h2 className='text-4xl font-bold text-neutral-dark mb-6'>
              Suporte Nutricional com IA 24/7
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
              Obtenha respostas instantâneas para suas dúvidas sobre nutrição, sugestões de refeições e conselhos personalizados do nosso sistema avançado de chat com IA.
            </p>
            
            <div className='bg-neutral-light p-6 rounded-xl shadow-md'>
              <div className='flex items-start mb-4'>
                <MessageSquareIcon className='h-8 w-8 text-primary mr-3 mt-1' />
                <div className='bg-white p-4 rounded-lg shadow-sm'>
                  <p className='text-gray-600'>O que devo comer antes do meu treino matinal?</p>
                </div>
              </div>
              
              <div className='flex items-start mb-4'>
                <Image
                  src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'
                  alt='Assistente IA'
                  width={32}
                  height={32}
                  className='rounded-full mr-3'
                />
                <div className='bg-primary/10 p-4 rounded-lg'>
                  <p className='text-gray-800'>Com base no seu perfil e intensidade do treino, recomendo uma refeição leve contendo carboidratos complexos e proteína. Experimente uma banana com pasta de amendoim ou aveia com frutas vermelhas.</p>
                </div>
              </div>
              
              <div className='flex items-center mt-4'>
                <input
                  type='text'
                  placeholder='Pergunte algo sobre nutrição...'
                  className='flex-1 p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:border-primary'
                />
                <button className='bg-primary text-white p-3 rounded-r-lg hover:bg-primary-light transition-colors'>
                  <SendIcon className='h-5 w-5' />
                </button>
              </div>
            </div>
          </div>
          
          <div className='relative h-[600px]'>
            <Image
              src='https://images.unsplash.com/photo-1498837167922-ddd27525d352'
              alt='Preparação de refeição saudável'
              fill
              className='object-cover rounded-2xl shadow-xl'
            />
          </div>
        </div>
      </div>
    </section>
  )
}