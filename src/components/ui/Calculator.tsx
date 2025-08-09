'use client';

import { useState, useRef } from 'react';

const Calculator = () => {
  const [dogAge, setDogAge] = useState(3);
  const [dogAgeMonths, setDogAgeMonths] = useState(0);
  const [dogSize, setDogSize] = useState('medium');
  const [dogName, setDogName] = useState('');
  const [humanAge, setHumanAge] = useState<number | null>(null);
  const [ageStage, setAgeStage] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Dog size images and data
  const dogSizes = [
    {
      id: 'small',
      name: 'Small Dogs',
      weight: 'Under 20 lbs',
      examples: 'Chihuahua, Pomeranian, Yorkshire Terrier',
      emoji: '🐕',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'medium',
      name: 'Medium Dogs',
      weight: '20-50 lbs',
      examples: 'Beagle, Border Collie, Bulldog',
      emoji: '🐕‍🦺',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'large',
      name: 'Large Dogs',
      weight: 'Over 50 lbs',
      examples: 'German Shepherd, Golden Retriever, Great Dane',
      emoji: '🐕‍🦮',
      color: 'from-purple-400 to-violet-500'
    }
  ];

  const calculateHumanAge = () => {
    const totalAge = dogAge + dogAgeMonths / 12;
    if (totalAge <= 0) return;

    let result = 0;
    let stage = '';

    // Different calculation based on dog size
    if (dogSize === 'small') {
      // Small dogs (under 20 lbs)
      if (totalAge <= 1) {
        result = totalAge * 15;
        stage = 'Puppy';
      } else if (totalAge <= 2) {
        result = 15 + (totalAge - 1) * 9;
        stage = 'Young Adult';
      } else {
        result = 24 + (totalAge - 2) * 4;
        stage = totalAge < 8 ? 'Adult' : totalAge < 12 ? 'Senior' : 'Elderly';
      }
    } else if (dogSize === 'medium') {
      // Medium dogs (20-50 lbs)
      if (totalAge <= 1) {
        result = totalAge * 15;
        stage = 'Puppy';
      } else if (totalAge <= 2) {
        result = 15 + (totalAge - 1) * 9;
        stage = 'Young Adult';
      } else {
        result = 24 + (totalAge - 2) * 5;
        stage = totalAge < 7 ? 'Adult' : totalAge < 10 ? 'Senior' : 'Elderly';
      }
    } else {
      // Large dogs (over 50 lbs)
      if (totalAge <= 1) {
        result = totalAge * 12;
        stage = 'Puppy';
      } else if (totalAge <= 2) {
        result = 12 + (totalAge - 1) * 10.5;
        stage = 'Young Adult';
      } else {
        result = 22.5 + (totalAge - 2) * 6.5;
        stage = totalAge < 6 ? 'Adult' : totalAge < 8 ? 'Senior' : 'Elderly';
      }
    }

    setHumanAge(Math.round(result));
    setAgeStage(stage);
    setIsCalculated(true);
  };

  // Social sharing functions
  const shareToTwitter = () => {
    const dogNameText = dogName ? `${dogName}` : 'My dog';
    const text = `${dogNameText} is ${humanAge} years old in human years! 🐕 Calculate your dog's age at`;
    const url = 'https://dogyearsinhumanyears.com';
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareToFacebook = () => {
    const url = 'https://dogyearsinhumanyears.com';
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const copyToClipboard = async () => {
    const dogNameText = dogName ? `${dogName}` : 'My dog';
    const text = `${dogNameText} is ${humanAge} years old in human years! Calculate your dog's age at https://dogyearsinhumanyears.com`;
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const downloadResult = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 800, 600);
    gradient.addColorStop(0, '#FFF7ED');
    gradient.addColorStop(1, '#FED7AA');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);

    // Add text
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    const dogNameText = dogName ? `${dogName}` : 'My dog';
    ctx.fillText(`${dogNameText} is`, 400, 200);
    
    ctx.fillStyle = '#EA580C';
    ctx.font = 'bold 72px Arial';
    ctx.fillText(`${humanAge} years old`, 400, 300);
    
    ctx.fillStyle = '#1F2937';
    ctx.font = '32px Arial';
    ctx.fillText('in human years!', 400, 360);
    
    ctx.font = '24px Arial';
    ctx.fillText('Calculate your dog\'s age at dogyearsinhumanyears.com', 400, 500);

    // Download
    const link = document.createElement('a');
    link.download = `${dogName || 'dog'}-age-result.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Puppy': return 'text-green-600';
      case 'Young Adult': return 'text-blue-600';
      case 'Adult': return 'text-orange-600';
      case 'Senior': return 'text-amber-600';
      case 'Elderly': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStageEmoji = (stage: string) => {
    switch (stage) {
      case 'Puppy': return '🐶';
      case 'Young Adult': return '🐕';
      case 'Adult': return '🐕‍🦺';
      case 'Senior': return '🐕‍🦺';
      case 'Elderly': return '🐕‍🦺';
      default: return '🐕';
    }
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-amber-100/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-200/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
            🐕 Dog Age Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Use our advanced calculator with Apple-style controls to discover your dog's age in human years
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="backdrop-blur-xl bg-white/70 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="space-y-8">
              {/* Age Slider */}
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-gray-800">
                  📅 Age: {dogAge} years {dogAgeMonths > 0 && `${dogAgeMonths} months`}
                </label>
                <div className="space-y-4">
                  {/* Years Slider */}
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="20"
                      value={dogAge}
                      onChange={(e) => setDogAge(parseInt(e.target.value))}
                      className="w-full h-3 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full appearance-none cursor-pointer slider-thumb"
                      style={{
                        background: `linear-gradient(to right, #fb923c 0%, #fb923c ${(dogAge / 20) * 100}%, #fed7aa ${(dogAge / 20) * 100}%, #fed7aa 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>0 years</span>
                      <span>20 years</span>
                    </div>
                  </div>
                  
                  {/* Months Slider */}
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="11"
                      value={dogAgeMonths}
                      onChange={(e) => setDogAgeMonths(parseInt(e.target.value))}
                      className="w-full h-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full appearance-none cursor-pointer slider-thumb-small"
                      style={{
                        background: `linear-gradient(to right, #fdba74 0%, #fdba74 ${(dogAgeMonths / 11) * 100}%, #fef3c7 ${(dogAgeMonths / 11) * 100}%, #fef3c7 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>0 months</span>
                      <span>11 months</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dog Size Selection */}
               <div className="space-y-4">
                 <label className="block text-lg font-semibold text-gray-800">
                   📏 Dog Size
                 </label>
                 <div className="grid grid-cols-3 gap-3">
                   {dogSizes.map((size) => (
                     <button
                       key={size.id}
                       onClick={() => setDogSize(size.id)}
                       className={`p-3 rounded-2xl border-2 transition-all duration-300 text-center ${
                         dogSize === size.id
                           ? `border-orange-500 bg-gradient-to-r ${size.color} text-white shadow-lg transform scale-105`
                           : 'border-gray-200 bg-white/60 hover:border-orange-300 hover:bg-white/80'
                       }`}
                     >
                       <div className="flex flex-col items-center space-y-2">
                         <div className="text-2xl">{size.emoji}</div>
                         <div className="flex-1">
                           <div className={`font-semibold text-sm ${dogSize === size.id ? 'text-white' : 'text-gray-800'}`}>
                             {size.name}
                           </div>
                           <div className={`text-xs ${dogSize === size.id ? 'text-white/90' : 'text-gray-600'}`}>
                             {size.weight}
                           </div>
                           <div className={`text-xs ${dogSize === size.id ? 'text-white/80' : 'text-gray-500'} mt-1`}>
                             {size.examples}
                           </div>
                         </div>
                       </div>
                     </button>
                   ))}
                 </div>
               </div>

              {/* Calculate Button */}
              <button
                onClick={calculateHumanAge}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-6 px-8 rounded-2xl hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg"
              >
                ✨ Calculate Human Age
              </button>
            </div>

            {/* Result Section */}
            <div className="flex items-center justify-center">
              {isCalculated && humanAge !== null ? (
                <div className="text-center bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl w-full border border-white/30">
                  <div className="text-8xl mb-6">{getStageEmoji(ageStage)}</div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                    {humanAge} years old
                  </div>
                  <div className={`text-xl font-semibold ${getStageColor(ageStage)} mb-4`}>
                    Life Stage: {ageStage}
                  </div>
                  <div className="text-gray-600 mb-6">
                    {dogName ? dogName : 'Your dog'} is equivalent to a {humanAge}-year-old human
                  </div>
                  
                  {/* Dog Name Input */}
                   <div className="mb-6">
                     <input
                       type="text"
                       value={dogName}
                       onChange={(e) => setDogName(e.target.value)}
                       placeholder="🐾 Enter your pet's name..."
                       className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-3 focus:ring-orange-500/30 focus:border-orange-500 text-center transition-all duration-300 shadow-sm text-gray-700 placeholder-gray-400"
                     />
                   </div>
                  
                  {/* Social Sharing */}
                   <div className="space-y-4">
                     <div className="text-sm font-semibold text-gray-700 mb-3">🎉 Share this amazing result:</div>
                     <div className="flex flex-wrap justify-center gap-3">
                       <button
                         onClick={shareToTwitter}
                         className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                       >
                         <span>🐦</span>
                         <span>Twitter</span>
                       </button>
                       <button
                         onClick={shareToFacebook}
                         className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                       >
                         <span>📘</span>
                         <span>Facebook</span>
                       </button>
                       <button
                         onClick={copyToClipboard}
                         className="flex items-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                       >
                         <span>📋</span>
                         <span>Copy Link</span>
                       </button>
                       <button
                         onClick={downloadResult}
                         className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                       >
                         <span>💾</span>
                         <span>Download</span>
                       </button>
                     </div>
                   </div>
                </div>
              ) : (
                <div className="text-center text-gray-400 bg-white/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50">
                  <div className="text-8xl mb-6">🐕</div>
                  <div className="text-xl">
                    Set your dog's age and size to see the magic! ✨
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hidden Canvas for Download */}
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      </div>
      
      {/* Custom CSS for sliders */}
      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fb923c, #f59e0b);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(251, 146, 60, 0.4);
          border: 3px solid white;
          transition: all 0.2s ease;
        }
        
        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 20px rgba(251, 146, 60, 0.6);
        }
        
        .slider-thumb-small::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fdba74, #fbbf24);
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(253, 186, 116, 0.4);
          border: 2px solid white;
          transition: all 0.2s ease;
        }
        
        .slider-thumb-small::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(253, 186, 116, 0.6);
        }
      `}</style>
    </section>
  );
};

export default Calculator;