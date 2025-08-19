'use client';

import { useState, useRef } from 'react';
import { Dog, Calendar, Target, BarChart3, Gift, Download, Copy, Share2, Facebook, Twitter } from 'lucide-react';

const Calculator = () => {
  const [dogAge, setDogAge] = useState(3);
  const [dogAgeMonths, setDogAgeMonths] = useState(0);
  const [dogSize, setDogSize] = useState('medium');
  const [dogName, setDogName] = useState('');
  const [humanAge, setHumanAge] = useState<number | null>(null);
  const [ageStage, setAgeStage] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);
  const [inputMethod, setInputMethod] = useState<'age' | 'birthday'>('age');
  const [dogBirthday, setDogBirthday] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Dog size images and data
  const dogSizes = [
    {
      id: 'small',
      name: 'Small Dogs',
      weight: 'Under 20 lbs',
      examples: 'Chihuahua, Pomeranian, Yorkshire Terrier',
      icon: <Dog className="w-6 h-6" />,
      color: 'from-green-400 to-emerald-500',
      backgroundSvg: (
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" fill="none">
          {/* 吉娃娃特征：苹果形头部，大眼睛，尖立大耳朵 */}
          <path d="M35 20c-8 0-15 6-15 15v10c0 8 6 15 15 15h30c8 0 15-6 15-15V35c0-8-6-15-15-15H35z" fill="currentColor"/>
          {/* 大而圆的眼睛 */}
          <circle cx="42" cy="32" r="4" fill="white" opacity="0.8"/>
          <circle cx="58" cy="32" r="4" fill="white" opacity="0.8"/>
          <circle cx="42" cy="32" r="2" fill="currentColor"/>
          <circle cx="58" cy="32" r="2" fill="currentColor"/>
          {/* 尖立的大耳朵（相对头部比例较大） */}
          <path d="M25 15c-3 0-5 2-5 5v15c0 2 1 4 3 5l8-10c1-2 1-4 0-6L25 15z" fill="currentColor"/>
          <path d="M75 15l-6 9c-1 2-1 4 0 6l8 10c2-1 3-3 3-5V20c0-3-2-5-5-5z" fill="currentColor"/>
          {/* 小而尖的嘴巴 */}
          <path d="M45 42c-2 0-4 1-4 3v3c0 2 2 3 4 3h10c2 0 4-1 4-3v-3c0-2-2-3-4-3H45z" fill="currentColor"/>
          {/* 小鼻子 */}
          <ellipse cx="50" cy="40" rx="2" ry="1" fill="currentColor"/>
          {/* 紧凑的身体 */}
          <path d="M40 60c0-3 2-5 5-5h10c3 0 5 2 5 5v15c0 3-2 5-5 5H45c-3 0-5-2-5-5V60z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'medium',
      name: 'Medium Dogs',
      weight: '20-50 lbs',
      examples: 'Beagle, Border Collie, Bulldog',
      icon: <Dog className="w-6 h-6" />,
      color: 'from-blue-400 to-cyan-500',
      backgroundSvg: (
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" fill="none">
          {/* 边境牧羊犬特征：匀称头部，中等眼睛，半立耳 */}
          <path d="M30 18c-10 0-18 8-18 18v12c0 10 8 18 18 18h40c10 0 18-8 18-18V36c0-10-8-18-18-18H30z" fill="currentColor"/>
          {/* 中等大小的眼睛 */}
          <ellipse cx="40" cy="32" rx="3" ry="2.5" fill="white" opacity="0.8"/>
          <ellipse cx="60" cy="32" rx="3" ry="2.5" fill="white" opacity="0.8"/>
          <circle cx="40" cy="32" r="1.5" fill="currentColor"/>
          <circle cx="60" cy="32" r="1.5" fill="currentColor"/>
          {/* 半立耳朵 */}
          <path d="M22 12c-4 0-7 3-7 7v18c0 3 2 6 5 7l10-15c2-3 2-6 0-9L22 12z" fill="currentColor"/>
          <path d="M78 12l-8 8c-2 3-2 6 0 9l10 15c3-1 5-4 5-7V19c0-4-3-7-7-7z" fill="currentColor"/>
          {/* 中等长度的嘴巴 */}
          <path d="M42 42c-3 0-6 2-6 5v4c0 3 3 5 6 5h16c3 0 6-2 6-5v-4c0-3-3-5-6-5H42z" fill="currentColor"/>
          {/* 鼻子 */}
          <ellipse cx="50" cy="40" rx="2.5" ry="1.5" fill="currentColor"/>
          {/* 匀称的身体 */}
          <path d="M35 66c0-4 3-7 7-7h16c4 0 7 3 7 7v18c0 4-3 7-7 7H42c-4 0-7-3-7-7V66z" fill="currentColor"/>
          {/* 毛发轮廓 */}
          <path d="M28 50c-2 0-3 1-3 3v8c0 2 1 3 3 3h44c2 0 3-1 3-3v-8c0-2-1-3-3-3H28z" fill="currentColor" opacity="0.6"/>
        </svg>
      )
    },
    {
      id: 'large',
      name: 'Large Dogs',
      weight: 'Over 50 lbs',
      examples: 'German Shepherd, Golden Retriever, Great Dane',
      icon: <Dog className="w-6 h-6" />,
      color: 'from-purple-400 to-violet-500',
      backgroundSvg: (
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" fill="none">
          {/* 德国牧羊犬特征：威严头部，杏仁形眼睛，大立耳 */}
          <path d="M25 15c-12 0-22 10-22 22v15c0 12 10 22 22 22h50c12 0 22-10 22-22V37c0-12-10-22-22-22H25z" fill="currentColor"/>
          {/* 杏仁形眼睛 */}
          <ellipse cx="38" cy="32" rx="4" ry="2" fill="white" opacity="0.8"/>
          <ellipse cx="62" cy="32" rx="4" ry="2" fill="white" opacity="0.8"/>
          <ellipse cx="38" cy="32" rx="2" ry="1" fill="currentColor"/>
          <ellipse cx="62" cy="32" rx="2" ry="1" fill="currentColor"/>
          {/* 大而立的尖耳朵 */}
          <path d="M15 8c-5 0-9 4-9 9v20c0 4 3 8 7 9l15-20c3-4 3-8 0-12L15 8z" fill="currentColor"/>
          <path d="M85 8l-13 6c-3 4-3 8 0 12l15 20c4-1 7-5 7-9V17c0-5-4-9-9-9z" fill="currentColor"/>
          {/* 较长的嘴巴 */}
          <path d="M38 45c-4 0-8 3-8 7v6c0 4 4 7 8 7h24c4 0 8-3 8-7v-6c0-4-4-7-8-7H38z" fill="currentColor"/>
          {/* 大鼻子 */}
          <ellipse cx="50" cy="42" rx="3" ry="2" fill="currentColor"/>
          {/* 强壮的身体 */}
          <path d="M30 74c0-6 5-11 11-11h18c6 0 11 5 11 11v20c0 6-5 11-11 11H41c-6 0-11-5-11-11V74z" fill="currentColor"/>
          {/* 胸部轮廓 */}
          <path d="M25 58c-3 0-5 2-5 5v12c0 3 2 5 5 5h50c3 0 5-2 5-5V63c0-3-2-5-5-5H25z" fill="currentColor" opacity="0.7"/>
          {/* 威严的眉毛 */}
          <path d="M32 28c2-1 4-1 6 0l4 2c1 1 1 2 0 3l-4 2c-2 1-4 1-6 0l-4-2c-1-1-1-2 0-3l4-2z" fill="currentColor"/>
          <path d="M58 28c2-1 4-1 6 0l4 2c1 1 1 2 0 3l-4 2c-2 1-4 1-6 0l-4-2c-1-1-1-2 0-3l4-2z" fill="currentColor"/>
        </svg>
      )
    }
  ];

  // Calculate age from birthday
  const calculateAgeFromBirthday = (birthday: string) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    const ageInMilliseconds = today.getTime() - birthDate.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    
    const years = Math.floor(ageInYears);
    const months = Math.floor((ageInYears - years) * 12);
    
    return { years, months, totalAge: ageInYears };
  };

  const calculateHumanAge = () => {
    let totalAge: number;
    
    if (inputMethod === 'birthday') {
      if (!dogBirthday) return;
      const ageData = calculateAgeFromBirthday(dogBirthday);
      totalAge = ageData.totalAge;
      // Update the age sliders to reflect the calculated age
      setDogAge(ageData.years);
      setDogAgeMonths(ageData.months);
    } else {
      totalAge = dogAge + dogAgeMonths / 12;
    }
    
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

  // Generate dynamic social sharing text
  const generateShareText = () => {
    const dogNameText = dogName ? `${dogName}` : 'My dog';
    const ageStageText = getStageText(ageStage);
    
    // Different messages based on age stage
    const stageMessages = {
      'Puppy': [
        `${ageStageText} ${dogNameText} is just a baby at ${humanAge} human years! Still learning the ropes of being adorable`,
        `Puppy power! ${ageStageText} ${dogNameText} is ${humanAge} in human years and already stealing hearts`,
        `${dogNameText} is ${humanAge} human years old and in full puppy mode! Energy level: MAXIMUM!`
      ],
      'Young Adult': [
        `${ageStageText} ${dogNameText} is ${humanAge} in human years - prime time for adventures and mischief!`,
        `Look who's all grown up! ${ageStageText} ${dogNameText} is ${humanAge} human years and ready to take on the world!`,
        `${dogNameText} is ${humanAge} in human years - the perfect age for zoomies and belly rubs!`
      ],
      'Adult': [
        `${ageStageText} ${dogNameText} is ${humanAge} in human years - wise, loyal, and still thinks they're a lap dog!`,
        `Mature and magnificent! ${ageStageText} ${dogNameText} is ${humanAge} human years of pure awesomeness`,
        `${dogNameText} is ${humanAge} in human years and has mastered the art of being the goodest dog!`
      ],
      'Senior': [
        `${ageStageText} ${dogNameText} is ${humanAge} in human years - a distinguished senior with stories to tell!`,
        `Aging like fine wine! ${ageStageText} ${dogNameText} is ${humanAge} human years of wisdom and love`,
        `${dogNameText} is ${humanAge} in human years - proof that old dogs are the best dogs!`
      ],
      'Elderly': [
        `${ageStageText} ${dogNameText} is ${humanAge} in human years - a precious elder deserving all the treats!`,
        `Respect your elders! ${ageStageText} ${dogNameText} is ${humanAge} human years of pure love and cuddles`,
        `${dogNameText} is ${humanAge} in human years - living proof that love only grows stronger with age!`
      ]
    };
    
    // Size-based additions
    const sizeAdditions = {
      'small': [' (Small but mighty!)', ' (Tiny package, huge personality!)', ' (Small dog, big attitude!)'],
      'medium': [' (The perfect size!)', ' (Just right!)', ' (Medium and magnificent!)'],
      'large': [' (Big dog, bigger heart!)', ' (Gentle giant!)', ' (Large and in charge!)']
    };
    
    const messages = stageMessages[ageStage as keyof typeof stageMessages] || [
      `${ageStageText} ${dogNameText} is ${humanAge} years old in human years!`
    ];
    
    const sizeAdds = sizeAdditions[dogSize as keyof typeof sizeAdditions] || [''];
    
    // Random selection
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomSizeAdd = sizeAdds[Math.floor(Math.random() * sizeAdds.length)];
    
    return randomMessage + randomSizeAdd;
  };

  // Social sharing functions
  const shareToTwitter = () => {
    const text = generateShareText() + ' Calculate your dog\'s age at';
    const url = 'https://www.dogyearsinhumanyears.com';
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareToFacebook = () => {
    const url = 'https://www.dogyearsinhumanyears.com';
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const copyToClipboard = async () => {
    const text = generateShareText() + ' Calculate your dog\'s age at https://www.dogyearsinhumanyears.com';
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

    // Add text with dynamic content
    const shareText = generateShareText();
    const dogNameText = dogName ? `${dogName}` : 'My dog';
    const ageStageText = getStageText(ageStage);
    
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 36px Arial';
    ctx.textAlign = 'center';
    
    // Split the share text into multiple lines for better display
    const words = shareText.split(' ');
    let line = '';
    let y = 180;
    const maxWidth = 700;
    
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, 400, y);
        line = words[n] + ' ';
        y += 45;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 400, y);
    
    // Add age in large text
    ctx.fillStyle = '#EA580C';
    ctx.font = 'bold 72px Arial';
    ctx.fillText(`${ageStageText} ${humanAge}`, 400, y + 80);
    
    ctx.fillStyle = '#1F2937';
    ctx.font = '32px Arial';
    ctx.fillText('human years old!', 400, y + 130);
    
    ctx.font = '24px Arial';
    ctx.fillText('Calculate your dog\'s age at www.dogyearsinhumanyears.com', 400, 500);

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

  const getStageIcon = (stage: string) => {
    switch (stage) {
      case 'Puppy': return <Dog className="w-20 h-20 text-green-500" />;
      case 'Young Adult': return <Dog className="w-20 h-20 text-blue-500" />;
      case 'Adult': return <Dog className="w-20 h-20 text-orange-500" />;
      case 'Senior': return <Dog className="w-20 h-20 text-amber-500" />;
      case 'Elderly': return <Dog className="w-20 h-20 text-red-500" />;
      default: return <Dog className="w-20 h-20 text-gray-500" />;
    }
  };

  const getStageText = (stage: string) => {
    switch (stage) {
      case 'Puppy': return 'Puppy';
      case 'Young Adult': return 'Young Adult';
      case 'Adult': return 'Adult';
      case 'Senior': return 'Senior';
      case 'Elderly': return 'Elderly';
      default: return 'Dog';
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6 flex items-center justify-center gap-4">
            <Dog className="w-12 h-12 text-orange-600" />
            Dog Age Calculator
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
              {/* Input Method Selection */}
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-600" />
                  How would you like to input your dog's age?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setInputMethod('age')}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center ${
                      inputMethod === 'age'
                        ? 'border-orange-500 bg-gradient-to-r from-orange-400 to-amber-400 text-white shadow-lg transform scale-105'
                        : 'border-gray-200 bg-white/60 hover:border-orange-300 hover:bg-white/80'
                    }`}
                  >
                    <div className="text-2xl mb-2">
                      <BarChart3 className="w-6 h-6 mx-auto" />
                    </div>
                    <div className={`font-semibold ${
                      inputMethod === 'age' ? 'text-white' : 'text-gray-800'
                    }`}>
                      Manual Age
                    </div>
                    <div className={`text-sm ${
                      inputMethod === 'age' ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      Use sliders
                    </div>
                  </button>
                  <button
                    onClick={() => setInputMethod('birthday')}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center ${
                      inputMethod === 'birthday'
                        ? 'border-orange-500 bg-gradient-to-r from-orange-400 to-amber-400 text-white shadow-lg transform scale-105'
                        : 'border-gray-200 bg-white/60 hover:border-orange-300 hover:bg-white/80'
                    }`}
                  >
                    <div className="text-2xl mb-2">
                      <Calendar className="w-6 h-6 mx-auto" />
                    </div>
                    <div className={`font-semibold ${
                      inputMethod === 'birthday' ? 'text-white' : 'text-gray-800'
                    }`}>
                      Birthday
                    </div>
                    <div className={`text-sm ${
                      inputMethod === 'birthday' ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      Select date
                    </div>
                  </button>
                </div>
              </div>

              {/* Age Input - Conditional Rendering */}
              {inputMethod === 'age' ? (
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    Age: {dogAge} years {dogAgeMonths > 0 && `${dogAgeMonths} months`}
                  </label>
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
              ) : (
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Gift className="w-5 h-5 text-orange-600" />
                    Dog's Birthday
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={dogBirthday}
                      onChange={(e) => setDogBirthday(e.target.value)}
                      max={new Date().toISOString().split('T')[0]}
                      lang="en"
                      className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 rounded-2xl focus:ring-3 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 shadow-sm text-gray-700 text-lg font-medium"
                    />
                  </div>
                  {dogBirthday && (
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                      <div className="text-sm text-orange-800 flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" />
                        <span className="font-semibold">Calculated Age:</span>
                        {(() => {
                          const ageData = calculateAgeFromBirthday(dogBirthday);
                          return ` ${ageData.years} years ${ageData.months > 0 ? `${ageData.months} months` : ''}`;
                        })()}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Dog Size Selection */}
              <div className="space-y-4">
                 <label className="block text-lg font-semibold text-gray-800 flex items-center gap-2">
                   <Dog className="w-5 h-5 text-orange-600" />
                   Dog Size
                 </label>
                 <div className="grid grid-cols-3 gap-3">
                   {dogSizes.map((size) => (
                     <button
                       key={size.id}
                       onClick={() => setDogSize(size.id)}
                       className={`relative p-3 rounded-2xl border-2 transition-all duration-300 text-center overflow-hidden ${
                         dogSize === size.id
                           ? `border-orange-500 bg-gradient-to-r ${size.color} text-white shadow-lg transform scale-105`
                           : 'border-gray-200 bg-white/60 hover:border-orange-300 hover:bg-white/80'
                       }`}
                     >
                       {/* Background SVG */}
                       {size.backgroundSvg}
                       
                       <div className="relative z-10 flex flex-col items-center space-y-2">
                         <div className="text-2xl">{size.icon}</div>
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
                disabled={inputMethod === 'birthday' && !dogBirthday}
                className={`w-full font-bold py-6 px-8 rounded-2xl transform transition-all duration-300 shadow-xl text-lg ${
                  inputMethod === 'birthday' && !dogBirthday
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 hover:scale-105'
                }`}
              >
                {inputMethod === 'birthday' ? (
                  <span className="flex items-center justify-center gap-2">
                    <Gift className="w-5 h-5" />
                    Calculate from Birthday
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Calculate Human Age
                  </span>
                )}
              </button>
            </div>

            {/* Result Section */}
            <div className="flex items-center justify-center">
              {isCalculated && humanAge !== null ? (
                <div className="text-center bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl w-full border border-white/30">
                  <div className="mb-6 flex justify-center">{getStageIcon(ageStage)}</div>
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
                     <div className="relative">
                       <Dog className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                       <input
                         type="text"
                         value={dogName}
                         onChange={(e) => setDogName(e.target.value)}
                         placeholder="Enter your pet's name..."
                         className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-3 focus:ring-orange-500/30 focus:border-orange-500 text-center transition-all duration-300 shadow-sm text-gray-700 placeholder-gray-400"
                       />
                     </div>
                   </div>
                  
                  {/* Social Sharing */}
                   <div className="space-y-4">
                     <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center justify-center gap-2">
                       <Share2 className="w-4 h-4" />
                       Share this amazing result:
                     </div>
                     <div className="flex flex-wrap justify-center gap-3">
                       <button
                         onClick={shareToTwitter}
                         className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                       >
                         <Twitter className="w-4 h-4" />
                         <span>Twitter</span>
                       </button>
                       <button
                         onClick={shareToFacebook}
                         className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                       >
                         <Facebook className="w-4 h-4" />
                         <span>Facebook</span>
                       </button>
                       <button
                         onClick={copyToClipboard}
                         className="flex items-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                       >
                         <Copy className="w-4 h-4" />
                         <span>Copy Link</span>
                       </button>
                       <button
                         onClick={downloadResult}
                         className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                       >
                         <Download className="w-4 h-4" />
                         <span>Download</span>
                       </button>
                     </div>
                   </div>
                </div>
              ) : (
                <div className="text-center text-gray-400 bg-white/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50">
                  <div className="mb-6 flex justify-center">
                    <Dog className="w-20 h-20 text-gray-400" />
                  </div>
                  <div className="text-xl flex items-center justify-center gap-2">
                    Set your dog's age and size to see the magic!
                    <BarChart3 className="w-5 h-5" />
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