import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Dog Years in Human Years Calculator',
  description: 'Read the terms of service for the Dog Years in Human Years Calculator. Our calculator provides educational estimates only. Always consult a veterinarian for professional advice.',
};

export default function Terms() {
  return (
    <div className="container-main" style={{ paddingTop: '15px', paddingBottom: '30px' }}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> &raquo; Terms of Service
      </div>

      <div className="section-box">
        <h1>Terms of Service</h1>
        <p style={{ fontSize: '14px', color: '#555' }}>
          Please read these terms carefully before using our Dog Years Calculator website and services.
        </p>
        <p className="text-small text-muted">Last updated: January 15, 2026</p>
      </div>

      <div className="section-box">
        <div style={{ background: '#fffdf0', border: '1px solid #d5c800', padding: '12px', marginBottom: '15px' }}>
          <strong>Important Notice:</strong> Our calculator provides educational estimates only.
          Always consult with a qualified veterinarian for professional advice about your pet&apos;s health and care.
        </div>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the Dog Years Calculator website (&quot;Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree, please do not use this service.</p>

        <h2>2. Description of Service</h2>
        <p>Dog Years Calculator provides:</p>
        <ul style={{ margin: '10px 0 10px 25px', lineHeight: '1.8' }}>
          <li>A web-based calculator to estimate dog age in human years</li>
          <li>Educational content about dog aging and health</li>
          <li>Articles and resources related to pet care</li>
          <li>Information about different dog breeds and their characteristics</li>
        </ul>

        <h2>3. Educational Purpose Only</h2>
        <p><strong>IMPORTANT:</strong> Our calculator and content are for educational and informational purposes only. The age calculations are estimates based on general breed characteristics and scientific research. They should not be used as a substitute for professional veterinary advice, diagnosis, or treatment.</p>

        <h2>4. User Responsibilities</h2>
        <ul style={{ margin: '10px 0 10px 25px', lineHeight: '1.8' }}>
          <li>Use the service for lawful purposes only</li>
          <li>Provide accurate information when using our calculator</li>
          <li>Not attempt to interfere with the proper functioning of the website</li>
          <li>Not use automated systems to access the service without permission</li>
          <li>Respect the intellectual property rights of the content</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights.</p>

        <h2>6. Disclaimer of Warranties</h2>
        <p>The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions, and terms whether express, implied, statutory, or otherwise.</p>

        <h2>7. Limitation of Liability</h2>
        <p>In no event shall Dog Years Calculator, its officers, directors, employees, or agents be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any use of this website.</p>

        <h2>8. Accuracy of Information</h2>
        <p>While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the information on the website.</p>

        <h2>9. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites or services. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.</p>

        <h2>10. Privacy Policy</h2>
        <p>Your privacy is important to us. Please review our <Link href="/privacy">Privacy Policy</Link>, which also governs your use of the Service.</p>

        <h2>11. Modifications to Terms</h2>
        <p>We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms of Service on this page.</p>

        <h2>12. Termination</h2>
        <p>We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever.</p>

        <h2>13. Contact Information</h2>
        <div style={{ background: '#f7f7f7', border: '1px solid #cccccc', padding: '12px' }}>
          <p><strong>Email:</strong> legal@dogyearsinhumanyears.com</p>
          <p><strong>Subject:</strong> Terms of Service Inquiry</p>
        </div>

        <div style={{ background: '#f0fff0', border: '1px solid #b3d9b3', padding: '12px', marginTop: '15px' }}>
          <strong>Thank You:</strong> Thank you for using Dog Years Calculator. We&apos;re committed to helping you
          better understand your furry friend&apos;s aging process while prioritizing their health and well-being.
        </div>
      </div>
    </div>
  );
}