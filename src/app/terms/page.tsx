import { AlertTriangle, Dog } from 'lucide-react';

export default function Terms() {
  const lastUpdated = "January 15, 2024";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Please read these terms carefully before using our Dog Years Calculator website and services.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
              <div className="flex">
                <div className="flex items-center justify-center w-8 h-8 mr-3 flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">Important Notice</h3>
                  <p className="text-amber-800">
                    Our calculator provides educational estimates only. Always consult with a qualified veterinarian 
                    for professional advice about your pet's health and care.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using the Dog Years Calculator website ("Service"), you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Dog Years Calculator provides:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>A web-based calculator to estimate dog age in human years</li>
              <li>Educational content about dog aging and health</li>
              <li>Articles and resources related to pet care</li>
              <li>Information about different dog breeds and their characteristics</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Educational Purpose Only</h2>
            <p className="text-gray-700 mb-6">
              <strong>IMPORTANT:</strong> Our calculator and content are for educational and informational purposes only. 
              The age calculations are estimates based on general breed characteristics and scientific research. They should 
              not be used as a substitute for professional veterinary advice, diagnosis, or treatment. Always seek the advice 
              of a qualified veterinarian with any questions you may have regarding your pet's health.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              When using our service, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Use the service for lawful purposes only</li>
              <li>Provide accurate information when using our calculator</li>
              <li>Not attempt to interfere with the proper functioning of the website</li>
              <li>Not use automated systems to access the service without permission</li>
              <li>Respect the intellectual property rights of the content</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              The content, organization, graphics, design, compilation, magnetic translation, digital conversion, 
              and other matters related to the Site are protected under applicable copyrights, trademarks, and other 
              proprietary rights. The copying, redistribution, use, or publication by you of any such content or any 
              part of the Site is strictly prohibited.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-6">
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
              this Company excludes all representations, warranties, conditions, and terms whether express, implied, 
              statutory, or otherwise, including but not limited to warranties of merchantability, fitness for a 
              particular purpose, and non-infringement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              In no event shall Dog Years Calculator, its officers, directors, employees, or agents be liable to you 
              for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting 
              from any use of this website or the information contained herein.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Accuracy of Information</h2>
            <p className="text-gray-700 mb-6">
              While we strive to provide accurate and up-to-date information, we make no representations or warranties 
              of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability 
              of the information, products, services, or related graphics contained on the website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites or services that are not owned or controlled by 
              Dog Years Calculator. We have no control over and assume no responsibility for the content, privacy policies, 
              or practices of any third-party websites or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the 
              Service, to understand our practices.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these terms at any time. We will notify users of any changes by posting 
              the new Terms of Service on this page and updating the "Last updated" date. Your continued use of the 
              Service after any such changes constitutes your acceptance of the new Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
            <p className="text-gray-700 mb-6">
              We may terminate or suspend your access to our Service immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which our company is 
              established, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
            <p className="text-gray-700 mb-6">
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed 
              and interpreted to accomplish the objectives of such provision to the greatest extent possible under 
              applicable law and the remaining provisions will continue in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@dogyearscalculator.com<br/>
                <strong>Subject:</strong> Terms of Service Inquiry
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-8">
              <div className="flex">
                <div className="flex items-center justify-center w-8 h-8 mr-3 flex-shrink-0">
                  <Dog className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Thank You</h3>
                  <p className="text-green-800">
                    Thank you for using Dog Years Calculator. We're committed to helping you better understand 
                    your furry friend's aging process while prioritizing their health and well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}