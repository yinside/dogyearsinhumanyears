import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Dog Years Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about helping dog owners better understand their furry companions' aging process through science-backed calculations and educational content.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Every dog owner has wondered: "How old is my dog in human years?" While the old "multiply by 7" rule is widely known, it's not scientifically accurate. Different breeds age at different rates, and size plays a crucial role in determining lifespan.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to provide the most accurate, science-based dog age calculations available, helping you better understand your pet's life stage and health needs.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-4xl">🎯</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Accuracy First</h3>
                  <p className="text-gray-600">Based on veterinary research and breed-specific data</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🐕</div>
              <p className="text-gray-600 italic">"Understanding your dog's age helps you provide better care at every life stage."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl mb-4">🧬</div>
              <h3 className="text-xl font-semibold mb-3">Scientific Approach</h3>
              <p className="opacity-90">
                Our calculations are based on peer-reviewed veterinary research and breed-specific aging patterns.
              </p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Breed-Specific Data</h3>
              <p className="opacity-90">
                We account for size categories and breed characteristics that significantly impact aging rates.
              </p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3">Educational Content</h3>
              <p className="opacity-90">
                Beyond calculations, we provide valuable insights about dog health and aging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Built by Dog Lovers
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team consists of dog enthusiasts, veterinary professionals, and web developers who are passionate about improving the lives of dogs and their owners through better understanding and education.
          </p>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
            <div className="text-6xl mb-4">🐾</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Join Our Community
            </h3>
            <p className="text-gray-600 mb-6">
              Connect with fellow dog owners, share experiences, and learn more about caring for your furry family members.
            </p>
            <Link 
              href="/articles"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-200"
            >
              Read Our Articles
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Have Questions or Suggestions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We'd love to hear from you! Whether you have feedback about our calculator, suggestions for new features, or questions about dog care.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-200 text-lg"
          >
            Get in Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}