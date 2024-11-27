import Image from 'next/image'
import { StarIcon } from '@/view/components/Icons/Icons'

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Entusiasta de Fitness',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    content: 'O NutriAI transformou completamente minha abordagem à alimentação saudável. As recomendações personalizadas são perfeitas!'
  },
  {
    name: 'Pedro Santos',
    role: 'Profissional Ocupado',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    content: 'O recurso de chat com IA é como ter um nutricionista no bolso. Me ajudou a fazer melhores escolhas alimentares mesmo com minha agenda agitada.'
  },
  {
    name: 'Julia Costa',
    role: 'Atleta Amadora',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: 'O planejamento de refeições e recursos de acompanhamento me ajudaram a otimizar minha nutrição para um melhor desempenho. Super recomendo!'
  }
]

export default function Testimonials() {
  return (
    <section id='testimonials' className='py-20 bg-neutral-light'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-neutral-dark mb-4'>
            O que Nossos Usuários Dizem
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Junte-se a milhares de usuários satisfeitos que transformaram sua jornada de saúde com o NutriAI.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='bg-white p-6 rounded-xl shadow-md'>
              <div className='flex items-center mb-4'>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className='rounded-full'
                />
                <div className='ml-4'>
                  <h3 className='font-semibold text-neutral-dark'>{testimonial.name}</h3>
                  <p className='text-sm text-gray-600'>{testimonial.role}</p>
                </div>
              </div>
              <div className='flex mb-4'>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className='h-5 w-5 text-yellow-400 fill-current' />
                ))}
              </div>
              <p className='text-gray-600'>{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}