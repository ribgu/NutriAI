import { BrainIcon, CameraIcon, LineChartIcon, UtensilsIcon, ClockIcon, HeartIcon } from '@/view/components/Icons/Icons'

const features = [
  {
    icon: BrainIcon,
    title: 'Recomendações com IA',
    description: 'Receba conselhos nutricionais personalizados baseados no seu perfil e objetivos'
  },
  {
    icon: CameraIcon,
    title: 'Reconhecimento de Alimentos',
    description: 'Analise o conteúdo nutricional instantaneamente tirando uma foto da sua refeição'
  },
  {
    icon: LineChartIcon,
    title: 'Acompanhamento de Progresso',
    description: 'Monitore sua jornada de saúde com análises e insights detalhados'
  },
  {
    icon: UtensilsIcon,
    title: 'Planejamento de Refeições',
    description: 'Receba planos de refeições personalizados que se adequam ao seu estilo de vida'
  },
  {
    icon: ClockIcon,
    title: 'Suporte em Tempo Real',
    description: 'Acesso 24/7 a orientação nutricional e respostas alimentadas por IA'
  },
  {
    icon: HeartIcon,
    title: 'Bem-estar Integral',
    description: 'Abordagem completa combinando nutrição, exercícios e estilo de vida'
  }
]

export default function Features() {
  return (
    <section id='features' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-neutral-dark mb-4'>
            Recursos Poderosos para Sua Jornada de Saúde
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Descubra como o NutritionAI combina tecnologia de ponta com orientação personalizada para ajudar você a alcançar seus objetivos de saúde.
          </p>
        </div>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow'>
              <feature.icon className='h-12 w-12 text-primary mb-4' />
              <h3 className='text-xl font-semibold text-neutral-dark mb-2'>
                {feature.title}
              </h3>
              <p className='text-gray-600'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}