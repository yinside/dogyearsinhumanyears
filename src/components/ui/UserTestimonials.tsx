'use client';

import { useState, useEffect } from 'react';
import { Dog, Heart, Flower, Play, Pause } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  dogName: string;
  dogAge: string;
  content: string;
  emotion: 'excited' | 'worried' | 'nostalgic';
  avatar: React.ReactNode;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    dogName: 'Buddy',
    dogAge: '6 months',
    content: 'Buddy is only 6 months old, and using this calculator I discovered he\'s equivalent to a 10-year-old human! It\'s amazing. I\'m so excited to watch him grow up and imagine what he\'ll be like. Watching him learn new skills every day is like watching a child grow.',
    emotion: 'excited',
avatar: <Dog className="w-10 h-10 text-orange-500" />
  },
  {
    id: 2,
    name: 'Michael Chen',
    dogName: 'Max',
    dogAge: '8 years',
    content: 'Max is already 8 years old, which equals 51 human years. Seeing this number makes me a bit sad, realizing he\'s entered middle age. I\'ve started cherishing every day with him even more, giving him the best care, hoping he stays healthy and lives long.',
    emotion: 'worried',
avatar: <Dog className="w-10 h-10 text-blue-500" />
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    dogName: 'Luna',
    dogAge: 'Passed away',
    content: 'Luna was with us for 12 years, equivalent to 74 human years when she passed. Though she\'s no longer here, using this calculator brings back memories of her life - from a playful puppy to a gentle old dog. Every stage was filled with beautiful memories. Thank you Luna for all the love.',
    emotion: 'nostalgic',
avatar: <Heart className="w-10 h-10 text-gray-400" />
  },
  {
    id: 4,
    name: 'David Wilson',
    dogName: 'Charlie',
    dogAge: '2 years',
    content: 'Charlie just turned 2, which is already 24 in human years! He\'s in his prime now, full of energy, and I have to take him running every day. Seeing him so vibrant fills me with excitement, and I look forward to spending many more wonderful times together.',
    emotion: 'excited',
avatar: <Dog className="w-10 h-10 text-green-500" />
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    dogName: 'Bella',
    dogAge: '10 years',
    content: 'Bella is 10 years old now, which makes her over 60 in human years. I\'ve noticed she walks much slower lately and doesn\'t play as much as before. I\'m starting to worry about her health, getting nervous every vet visit, just hoping she can stay with us longer.',
    emotion: 'worried',
avatar: <Dog className="w-10 h-10 text-purple-500" />
  },
  {
    id: 6,
    name: 'Robert Davis',
    dogName: 'Daisy',
    dogAge: 'Passed away',
    content: 'Daisy passed away a year ago after living 14 years, equivalent to 78 human years - quite a long life. Every time I use this calculator, I remember her mischievous puppy days and the warmth of her quietly staying by my side in her later years. Though I miss her, I feel satisfied with the life she lived.',
    emotion: 'nostalgic',
avatar: <Flower className="w-10 h-10 text-pink-400" />
  }
];

const getEmotionColor = (emotion: string) => {
  switch (emotion) {
    case 'excited':
      return 'border-green-200 bg-green-50';
    case 'worried':
      return 'border-orange-200 bg-orange-50';
    case 'nostalgic':
      return 'border-purple-200 bg-purple-50';
    default:
      return 'border-gray-200 bg-gray-50';
  }
};

const getEmotionLabel = (emotion: string) => {
  switch (emotion) {
    case 'excited':
      return 'Excited for Growth';
    case 'worried':
      return 'Worried about Aging';
    case 'nostalgic':
      return 'Cherished Memories';
    default:
      return '';
  }
};

export default function UserTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Real User Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from other dog owners and feel the deep bond between humans and their beloved pets
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className={`p-8 rounded-xl border-2 ${getEmotionColor(testimonial.emotion)} shadow-lg`}>
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center">{testimonial.avatar}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600">
                              Dog: {testimonial.dogName} · {testimonial.dogAge}
                            </p>
                          </div>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/70">
                            {getEmotionLabel(testimonial.emotion)}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {testimonial.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label="Previous testimonial"
          >
            <span className="text-xl text-gray-600">‹</span>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label="Next testimonial"
          >
            <span className="text-xl text-gray-600">›</span>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <span className="flex items-center gap-1">
              {isAutoPlaying ? (
                <><Pause className="w-4 h-4" /> Pause Auto-play</>
              ) : (
                <><Play className="w-4 h-4" /> Start Auto-play</>
              )}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}