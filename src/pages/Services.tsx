import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Career Coaching',
      price: '$99',
      duration: '1 hour',
      description: 'Personalized career guidance to help you navigate your professional path.',
      features: [
        'Career path assessment',
        'Goal setting & planning',
        'Industry insights',
        'Actionable advice',
      ],
    },
    {
      id: 2,
      name: 'Resume & LinkedIn Review',
      price: '$49',
      duration: '30 minutes',
      description: 'Get professional feedback on your resume and LinkedIn profile.',
      features: [
        'Resume optimization',
        'LinkedIn profile enhancement',
        'ATS keyword optimization',
        'Professional formatting',
      ],
    },
    {
      id: 3,
      name: 'Interview Preparation',
      price: '$79',
      duration: '45 minutes',
      description: 'Master interview techniques and boost your confidence.',
      features: [
        'Mock interviews',
        'Answer strategies',
        'Body language coaching',
        'Q&A preparation',
      ],
    },
    {
      id: 4,
      name: 'Salary Negotiation',
      price: '$129',
      duration: '1.5 hours',
      description: 'Negotiate your worth with confidence and get better compensation.',
      features: [
        'Market research',
        'Negotiation strategies',
        'Offer evaluation',
        'Counter-offer techniques',
      ],
    },
    {
      id: 5,
      name: 'Leadership Mentorship',
      price: '$149',
      duration: '1 hour',
      description: 'Develop leadership skills and manage teams effectively.',
      features: [
        'Leadership development',
        'Team management',
        'Conflict resolution',
        'Executive coaching',
      ],
    },
    {
      id: 6,
      name: 'Monthly Retainer',
      price: '$299',
      duration: '4 hours/month',
      description: 'Ongoing mentorship with flexible scheduling throughout the month.',
      features: [
        'Weekly check-ins',
        'Career planning',
        'Unlimited questions',
        'Priority support',
      ],
      popular: true,
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the perfect mentorship package tailored to your needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  service.popular
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                }`}
              >
                {service.popular && (
                  <div className="bg-yellow-400 text-gray-900 py-2 px-4 font-bold text-center text-sm">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold mb-2">{service.price}</div>
                    <p className={`text-sm ${service.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                      {service.duration}
                    </p>
                  </div>

                  <p className={`mb-6 ${service.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-xl">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full py-3 rounded-lg font-semibold text-center transition-colors ${
                      service.popular
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Service Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-700">
                  <th className="py-4 px-4 font-bold text-gray-900 dark:text-white">Features</th>
                  <th className="py-4 px-4 text-center text-gray-900 dark:text-white">Career Coaching</th>
                  <th className="py-4 px-4 text-center text-gray-900 dark:text-white">Resume Review</th>
                  <th className="py-4 px-4 text-center text-gray-900 dark:text-white">Interview Prep</th>
                  <th className="py-4 px-4 text-center text-gray-900 dark:text-white">Monthly Retainer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'One-on-one sessions',
                  'Career assessment',
                  'Resume review',
                  'Interview coaching',
                  'Unlimited messages',
                  'Priority support',
                ].map((feature, index) => (
                  <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 px-4 font-medium text-gray-900 dark:text-white">
                      {feature}
                    </td>
                    <td className="py-4 px-4 text-center">✓</td>
                    <td className="py-4 px-4 text-center">✓</td>
                    <td className="py-4 px-4 text-center">✓</td>
                    <td className="py-4 px-4 text-center">✓</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Still not sure? Schedule a free consultation.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let's discuss your goals and find the perfect mentorship package for you.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
