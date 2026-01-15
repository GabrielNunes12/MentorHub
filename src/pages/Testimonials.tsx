const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Clara Gabrielle',
      role: 'Mid-level Software Engineer',
      company: 'Mutant',
      image: '👩‍💻',
      content:
        'The mentorship I received was transformative. I was struggling with career direction, but through personalized guidance, I was able to land a dream job at a top tech company. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'StartUp Inc',
      image: '👨‍💼',
      content:
        'I improved my leadership skills significantly. The mentor provided actionable advice that directly impacted my team performance and company results.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      company: 'Design Studio',
      image: '👩‍🎨',
      content:
        'The interview preparation sessions were invaluable. I landed 3 job offers and negotiated a 25% salary increase. The confidence boost alone was worth it!',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Data Analyst',
      company: 'Analytics Pro',
      image: '👨‍🔬',
      content:
        'Career coaching helped me transition from a junior analyst to a senior role within 18 months. The guidance was clear, practical, and results-driven.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Marketing Manager',
      company: 'Brand Solutions',
      image: '👩‍💼',
      content:
        'The monthly retainer program allowed me to have ongoing support for my career growth. It made all the difference in my professional development.',
      rating: 5,
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'DevOps Engineer',
      company: 'Cloud Systems',
      image: '👨‍💻',
      content:
        'I went from struggling with imposter syndrome to being confident in my abilities. The mentor\'s support and guidance were exceptional.',
      rating: 5,
    },
  ]

  const stats = [
    { label: 'Student Satisfaction', value: '98%' },
    { label: 'Career Goals Achieved', value: '95%' },
    { label: 'Salary Increase Average', value: '+32%' },
    { label: 'Promotion Rate', value: '78%' },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Success <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real results from real mentees who transformed their careers with personalized guidance.
            </p>
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

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Success Story Starts Here
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of professionals who have achieved their goals with personalized mentorship.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Start Your Journey Today
          </a>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
