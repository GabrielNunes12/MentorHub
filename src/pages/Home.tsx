import { Link } from 'react-router-dom'
import { useCalendly } from '../hooks/useCalendly'

const Home = () => {
  const { openCalendly } = useCalendly()
  const stats = [
    { label: 'Students Mentored', value: '20+' },
    { label: 'Success Rate', value: '95%' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Companies Helped', value: '1+' },
  ]

  const features = [
    {
      title: 'Personalized Guidance',
      description: 'Customized mentoring tailored to your specific goals and learning style.',
      icon: '🎯',
    },
    {
      title: 'Industry Expertise',
      description: 'Learn from someone with years of real-world experience in the field.',
      icon: '💼',
    },
    {
      title: 'Career Growth',
      description: 'Accelerate your career with strategic advice and insider knowledge.',
      icon: '📈',
    },
    {
      title: 'Network Building',
      description: 'Get connected with professionals and expand your professional network.',
      icon: '🤝',
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Transform Your <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Career</span> Today
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Get personalized mentorship from an experienced industry professional. Accelerate your growth, achieve your goals, and unlock your full potential.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openCalendly}
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  Schedule Free Consultation
                </button>
                <Link
                  to="/services"
                  className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-500 dark:hover:bg-opacity-10 transition-all duration-300 text-center"
                >
                  Explore Services
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white dark:border-gray-800 flex items-center justify-center text-white font-semibold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">20+</span> students transformed
                </p>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="relative h-96 md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-6xl font-bold">
                👨‍💼
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose MentorHub?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get the guidance you need to succeed in your career and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of professionals who have achieved their goals with personalized mentorship.
          </p>
          <button
            onClick={openCalendly}
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Schedule Your Free Consultation
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
