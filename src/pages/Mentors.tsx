import { useLanguage } from '../hooks/useLanguage'
import type { Mentor } from '../types'
import myPhoto from '../assets/images/my-photo.png'
import romuloPhoto from '../assets/images/romulo.png'

// Map mentor IDs to images
const mentorImages: Record<string, string> = {
    gabriel: myPhoto,
    romulo: romuloPhoto
}

const Mentors = () => {
    const { t, translations } = useLanguage()
    // @ts-ignore - Temporary ignore until we fix the type inference fully or types are updated
    const mentors = translations.mentors as Mentor[]

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                            {t('navbar.mentors')} <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Team</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            {t('mentorsPage.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Mentors Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mentors && mentors.map((mentor) => (
                            <div key={mentor.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                                {/* Image */}
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                    <img
                                        src={mentorImages[mentor.id]}
                                        alt={mentor.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <h3 className="text-2xl font-bold text-white mb-1">{mentor.name}</h3>
                                        <p className="text-blue-200 font-medium">{mentor.role}</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                                        {mentor.bio}
                                    </p>

                                    {/* Skills/Abilities */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-3">Abilities & Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {mentor.skills.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action */}
                                    {/* <button className="w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-50 transition-colors">
                    View Full Profile
                  </button> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mentors
