import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dog Years in Human Years Calculator',
  description: 'Our privacy policy explains how we collect, use, and protect your information. We do not sell your personal data. Read our full privacy policy here.',
};

export default function Privacy() {
  return (
    <div className="container-main" style={{ paddingTop: '15px', paddingBottom: '30px' }}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> &raquo; Privacy Policy
      </div>

      <div className="section-box">
        <h1>Privacy Policy</h1>
        <p style={{ fontSize: '14px', color: '#555' }}>
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
        <p className="text-small text-muted">Last updated: January 15, 2026</p>
      </div>

      <div className="section-box">
        <div style={{ background: '#f0f0ff', border: '1px solid #b3b3ff', padding: '12px', marginBottom: '15px' }}>
          <strong>Quick Summary:</strong> We don&apos;t collect personal information unless you voluntarily provide
          it through our contact form. We use cookies for basic website functionality and analytics to improve your experience.
        </div>

        <h2>Information We Collect</h2>

        <h3>Information You Provide</h3>
        <ul style={{ margin: '10px 0 10px 25px', lineHeight: '1.8' }}>
          <li><strong>Contact Form:</strong> When you contact us, we collect your name, email address, and message content.</li>
          <li><strong>Dog Age Calculator:</strong> The information you enter (dog&apos;s age, breed size) is processed locally in your browser and not stored on our servers.</li>
        </ul>

        <h3>Information Automatically Collected</h3>
        <ul style={{ margin: '10px 0 10px 25px', lineHeight: '1.8' }}>
          <li><strong>Usage Data:</strong> We collect anonymous information about how you use our website, including pages visited and time spent.</li>
          <li><strong>Device Information:</strong> We may collect information about your device, browser type, and operating system.</li>
          <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul style={{ margin: '10px 0 10px 25px', lineHeight: '1.8' }}>
          <li>To respond to your inquiries and provide customer support</li>
          <li>To improve our website and services</li>
          <li>To analyze website usage and performance</li>
          <li>To ensure the security and proper functioning of our website</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
        <ul style={{ margin: '10px 0 10px 25px', lineHeight: '1.8' }}>
          <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website.</li>
          <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety.</li>
          <li><strong>Analytics:</strong> We use Google Analytics to understand how visitors use our site. This data is anonymized and aggregated.</li>
        </ul>

        <h2>Cookies and Tracking</h2>
        <p>We use cookies and similar tracking technologies to:</p>
        <ul style={{ margin: '10px 0 10px 25px', lineHeight: '1.8' }}>
          <li>Remember your preferences and settings</li>
          <li>Analyze website traffic and usage patterns</li>
          <li>Improve website performance and user experience</li>
        </ul>
        <p>You can control cookies through your browser settings. However, disabling cookies may affect some website functionality.</p>

        <h2>Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>

        <h2>Your Rights</h2>
        <ul style={{ margin: '10px 0 10px 25px', lineHeight: '1.8' }}>
          <li>Access the personal information we have about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt-out of certain communications</li>
        </ul>

        <h2>Children&apos;s Privacy</h2>
        <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date.</p>

        <h2>Contact Us</h2>
        <div style={{ background: '#f7f7f7', border: '1px solid #cccccc', padding: '12px' }}>
          <p><strong>Email:</strong> privacy@dogyearsinhumanyears.com</p>
          <p><strong>Subject:</strong> Privacy Policy Inquiry</p>
        </div>
      </div>
    </div>
  );
}