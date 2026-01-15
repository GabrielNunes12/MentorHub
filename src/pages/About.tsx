const About = () => {
  const timeline = [
    { year: '2019', event: 'Started my professional career in tech' },
    { year: '2024', event: 'Became a team lead at a Mutant' },
    { year: '2024-2025', event: 'Went to a biggest bank in Brazil (Intermedium bank)' },
    { year: '2025-present', event: 'Senior developer in Europe' },
  ]

  const expertise = [
    'Career Development',
    'Personal Branding',
    'Management Skills',
    'Work-Life Balance',
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A passionate mentor dedicated to helping professionals achieve their goals and unlock their potential.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-8xl">
                👋
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Hi, I'm your mentor!
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                With over 5 years of experience in the tech industry, I've built a career that spans from individual contributor to team leadership. My journey has been filled with challenges, victories, and invaluable lessons that I'm passionate about sharing.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I believe that everyone has the potential to excel in their career. Through personalized guidance, honest feedback, and strategic planning, I help professionals navigate their career path and achieve their ambitions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                My mentorship philosophy is centered on understanding your unique needs, building on your strengths, and addressing your challenges with practical, actionable advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            My Journey
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-blue-600 to-cyan-600 mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.year}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-lg text-white font-semibold text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Certifications & Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((cert) => (
              <div
                key={cert}
                className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Certification {cert}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Professional development & industry expertise
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
