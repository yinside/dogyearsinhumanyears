export default function Privacy() {
  const lastUpdated = "January 15, 2024";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <div className="flex">
                <div className="text-2xl mr-3">ℹ️</div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Quick Summary</h3>
                  <p className="text-blue-800">
                    We don't collect personal information unless you voluntarily provide it through our contact form. 
                    We use cookies for basic website functionality and analytics to improve your experience.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Information You Provide</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Contact Form:</strong> When you contact us, we collect your name, email address, and message content.</li>
              <li><strong>Dog Age Calculator:</strong> The information you enter (dog's age, breed, size) is processed locally in your browser and not stored on our servers.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Automatically Collected</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Usage Data:</strong> We collect information about how you use our website, including pages visited and time spent.</li>
              <li><strong>Device Information:</strong> We may collect information about your device, browser type, and operating system.</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our website and services</li>
              <li>To analyze website usage and performance</li>
              <li>To ensure the security and proper functioning of our website</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety.</li>
              <li><strong>Analytics:</strong> We use Google Analytics to understand how visitors use our site. This data is anonymized and aggregated.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve website performance and user experience</li>
            </ul>
            <p className="text-gray-700 mb-6">
              You can control cookies through your browser settings. However, disabling cookies may affect some website functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Access the personal information we have about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of certain communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal 
              information from children under 13. If you are a parent or guardian and believe your child has provided 
              us with personal information, please contact us.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices 
              or content of these external sites. We encourage you to review the privacy policies of any third-party 
              sites you visit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the 
              new privacy policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@dogyearscalculator.com<br/>
                <strong>Subject:</strong> Privacy Policy Inquiry
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}