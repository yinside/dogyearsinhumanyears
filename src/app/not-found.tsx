'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Dog, Bone, Heart, Gift, Home, CircleDot, BookOpen, Lightbulb } from 'lucide-react';

const NotFound = () => {
  const [dogAge, setDogAge] = useState(1);
  const [isWagging, setIsWagging] = useState(false);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    // Random dog age between 1-15
    setDogAge(Math.floor(Math.random() * 15) + 1);
    
    // Start wagging animation (slower)
    const waggingInterval = setInterval(() => {
      setIsWagging(prev => !prev);
    }, 800);

    // Change fun fact every 1 minute
    const factInterval = setInterval(() => {
      setCurrentFactIndex(prev => (prev + 1) % dogFacts.length);
    }, 60000);

    return () => {
      clearInterval(waggingInterval);
      clearInterval(factInterval);
    };
  }, []);

  const calculateHumanAge = (age: number) => {
    if (age <= 2) {
      return age * 12;
    }
    return 24 + (age - 2) * 4;
  };

  const dogFacts = [
    "Dogs can learn over 150 words!",
    "A dog's sense of smell is 10,000 times stronger than humans!",
    "Dogs dream just like humans do!",
    "Puppies are born deaf and blind!",
    "Dogs have three eyelids!",
    "A dog's nose print is unique, like a human fingerprint!"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Dog */}
        <div className="mb-8 relative">
          <div className="mb-4 animate-bounce flex justify-center">
            <Dog className="w-36 h-36 text-orange-500" />
          </div>
          <div className={`absolute -bottom-2 right-1/2 transform translate-x-1/2 transition-transform duration-300 ${isWagging ? 'rotate-12' : '-rotate-12'}`}>
            <Bone className="w-16 h-16 text-amber-500" />
          </div>
        </div>

        {/* 404 Message */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-orange-500 mb-4 flex items-center justify-center gap-4">
            4<Heart className="w-16 h-16 md:w-20 md:h-20" />4
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! This page went to the dog park!
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Looks like this page is playing fetch somewhere else. Don't worry, even the best dogs sometimes get lost!
          </p>
        </div>

        {/* Fun Dog Age Calculation */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 max-w-md mx-auto">
          <div className="mb-4 flex justify-center">
            <Gift className="w-16 h-16 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            While you're here...
          </h3>
          <p className="text-gray-600 mb-4">
            Did you know a {dogAge}-year-old dog is about <span className="font-bold text-orange-600">{calculateHumanAge(dogAge)} years old</span> in human years?
          </p>
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg p-4">
            <p className="text-sm text-gray-700 italic transition-opacity duration-500 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              Fun fact: {dogFacts[currentFactIndex]}
            </p>
          </div>
        </div>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Home className="mr-2 w-5 h-5" />
            Go Home
          </Link>
          <Link
            href="/#calculator"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full border-2 border-orange-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Dog className="mr-2 w-5 h-5" />
            Calculate Dog Age
          </Link>
          <Link
            href="/articles"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full border-2 border-orange-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <BookOpen className="mr-2 w-5 h-5" />
            Read Articles
          </Link>
        </div>

        {/* Floating Elements */}
        <div className="relative">
          <div className="absolute -top-20 -left-10 animate-float opacity-30">
            <Heart className="w-12 h-12 text-orange-400" />
          </div>
          <div className="absolute -top-16 -right-8 animate-bounce-slow opacity-30">
            <Bone className="w-8 h-8 text-orange-400" />
          </div>
          <div className="absolute -bottom-10 left-8 animate-pulse-slow opacity-30">
            <CircleDot className="w-16 h-16 text-orange-400" />
          </div>
          <div className="absolute -bottom-8 -right-12 animate-float opacity-30">
            <Dog className="w-8 h-8 text-orange-400" />
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="text-gray-500 text-sm">
          <p>Lost? Try searching for what you need or contact us if you think this is an error.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;