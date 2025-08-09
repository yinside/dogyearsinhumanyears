'use client';

import Link from 'next/link';

const InterestingFacts = () => {
  const facts = [
    {
      id: '1',
      icon: '🐕',
      title: 'Size Matters',
      description: 'Smaller dogs typically live longer than larger breeds. A Chihuahua can live 14-16 years, while a Great Dane averages 8-10 years.'
    },
    {
      id: '2', 
      icon: '🧬',
      title: 'Genetic Factors',
      description: 'Mixed breed dogs often live longer than purebreds due to hybrid vigor, which reduces the risk of inherited genetic disorders.'
    },
    {
      id: '3',
      icon: '🏃',
      title: 'Exercise Impact',
      description: 'Regular exercise can add 1-2 years to your dog\'s life by maintaining healthy weight and cardiovascular function.'
    },
    {
      id: '4',
      icon: '🦷',
      title: 'Dental Health',
      description: 'Dogs with good dental hygiene live longer. Dental disease can lead to heart, liver, and kidney problems if left untreated.'
    },
    {
      id: '5',
      icon: '🥗',
      title: 'Nutrition Matters',
      description: 'A balanced diet with proper portions can extend your dog\'s life by preventing obesity and related health issues.'
    },
    {
      id: '6',
      icon: '👨‍⚕️',
      title: 'Preventive Care',
      description: 'Regular vet checkups and vaccinations can detect health issues early and add years to your dog\'s life.'
    }
  ];



  return (
    <section id="facts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interesting Facts About Dog Aging
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover fascinating insights about how our canine companions age and what factors influence their lifespan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact) => (
          <div 
            key={fact.id}
            className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4 text-center">
              {fact.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              {fact.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-center">
              {fact.description}
            </p>
            
            {/* Decorative element */}
            <div className="mt-4 flex justify-center">
              <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
            </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
          <p className="text-lg mb-6 opacity-90">
            Explore our comprehensive articles about dog health, aging, and care tips from veterinary experts.
          </p>
          <Link 
            href="/articles"
            className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            Read Our Articles
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InterestingFacts;