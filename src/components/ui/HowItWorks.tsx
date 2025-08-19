import { Edit, Ruler, Calculator, Target } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Enter Your Dog's Age",
      description: "Input your dog's current age in years. You can use decimals for more precision (e.g., 2.5 years).",
icon: <Edit className="w-10 h-10 text-blue-500" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      title: "Select Dog Size",
      description: "Choose your dog's size category. Smaller dogs generally live longer and age differently than larger breeds.",
icon: <Ruler className="w-10 h-10 text-green-500" />,
      color: "from-green-500 to-green-600"
    },
    {
      step: 3,
      title: "Advanced Calculation",
      description: "Our algorithm uses veterinary research to calculate the equivalent human age based on size-specific aging patterns.",
icon: <Calculator className="w-10 h-10 text-purple-500" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 4,
      title: "Get Results",
      description: "Receive your dog&apos;s human age equivalent along with their current life stage and health insights.",
icon: <Target className="w-10 h-10 text-orange-500" />,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our Calculator Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dog age calculator uses scientifically-backed formulas that account for breed size and 
            the non-linear nature of dog aging to provide the most accurate results.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-orange-200 to-orange-300 z-0"></div>
              )}
              
              <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10">
                <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto`}>
                  {step.step}
                </div>
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Science Behind It */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Science Behind Dog Aging
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Non-Linear Aging</h4>
                    <p className="text-gray-600">Dogs don&apos;t age at a constant rate. They mature quickly in their first two years, then age more gradually.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Size Matters</h4>
                    <p className="text-gray-600">Smaller dogs typically live longer and age differently than larger breeds due to metabolic differences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Veterinary Research</h4>
                    <p className="text-gray-600">Our formulas are based on extensive veterinary studies and real-world data from thousands of dogs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Reference</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700 mb-2">Small & Medium Dogs:</div>
                  <div className="flex justify-between items-center py-1 border-b border-orange-200">
                    <span className="text-gray-600 text-sm">1 year old</span>
                    <span className="font-semibold text-orange-600">≈ 15 human years</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-orange-200">
                    <span className="text-gray-600 text-sm">2 years old</span>
                    <span className="font-semibold text-orange-600">≈ 24 human years</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-600 text-sm">Each year after</span>
                    <span className="font-semibold text-orange-600">+4-5 years</span>
                  </div>
                </div>
                
                <div className="space-y-2 pt-3 border-t border-orange-200">
                  <div className="text-sm font-medium text-gray-700 mb-2">Large Dogs:</div>
                  <div className="flex justify-between items-center py-1 border-b border-orange-200">
                    <span className="text-gray-600 text-sm">1 year old</span>
                    <span className="font-semibold text-orange-600">≈ 12 human years</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-orange-200">
                    <span className="text-gray-600 text-sm">2 years old</span>
                    <span className="font-semibold text-orange-600">≈ 22.5 human years</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-600 text-sm">Each year after</span>
                    <span className="font-semibold text-orange-600">+6.5 years</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 mt-3">
                  *Based on scientific veterinary research
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;