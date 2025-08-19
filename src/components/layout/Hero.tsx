import { Dog, Heart, Bone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 py-20 lg:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="block">Dog Years in</span>
            <span className="block warm-text-gradient">Human Years</span>
            <span className="block">Calculator</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Convert your dog's age to human years with our scientifically accurate calculator. 
            Discover how old your dog is in human years and learn fascinating facts about canine aging.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#calculator"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Dog className="mr-2 w-5 h-5" />
              Calculate Now
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full border-2 border-orange-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Learn How It Works
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">10M+</div>
              <div className="text-gray-600">Calculations Made</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">340+</div>
              <div className="text-gray-600">Dog Breeds Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating dog icons */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Dog className="w-12 h-12 text-orange-400" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce-slow opacity-20">
        <Heart className="w-8 h-8 text-orange-400" />
      </div>
      <div className="absolute bottom-20 left-20 animate-pulse-slow opacity-20">
        <Bone className="w-16 h-16 text-orange-400" />
      </div>
      <div className="absolute bottom-40 right-10 animate-float opacity-20">
        <Dog className="w-8 h-8 text-orange-400" />
      </div>
    </section>
  );
};

export default Hero;