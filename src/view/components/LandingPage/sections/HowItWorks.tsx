import { UserPlusIcon, MessageSquareIcon, LineChartIcon, SparklesIcon } from '@/view/components/Icons/Icons'

const steps = [
  {
    icon: UserPlusIcon,
    title: 'Crie seu Perfil',
    description: 'Conte-nos sobre seus objetivos, preferências e estilo de vida'
  },
  {
    icon: MessageSquareIcon,
    title: 'Converse com a IA',
    description: 'Obtenha orientação nutricional personalizada e sugestões de refeições instantâneas'
  },
  {
    icon: LineChartIcon,
    title: 'Acompanhe o Progresso',
    description: 'Monitore sua jornada e ajuste seu plano conforme necessário'
  },
  {
    icon: SparklesIcon,
    title: 'Alcance Resultados',
    description: 'Atinja seus objetivos de saúde com suporte consistente da IA'
  }
]

export default function HowItWorks() {
  return (
    <section id='how-it-works' className='py-20 bg-neutral-light'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-neutral-dark mb-4'>
            Como o NutritionAI Funciona
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Começar com o NutritionAI é fácil. Siga estes passos simples para iniciar sua jornada de saúde personalizada.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {steps.map((step, index) => (
            <div key={index} className='relative'>
              {index < steps.length - 1 && (
                <div className='hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-primary-light transform translate-y-[-50%] translate-x-[50%]' />
              )}
              <div className='bg-white p-6 rounded-xl shadow-md relative z-10'>
                <div className='bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto'>
                  <step.icon className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-neutral-dark mb-2 text-center'>
                  {step.title}
                </h3>
                <p className='text-gray-600 text-center'>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}