import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-main">
        <div className="footer-content">
          <p>
            <strong>Dog Years in Human Years</strong> &mdash; The most accurate dog age calculator on the web.
          </p>

          <div className="footer-links">
            <Link href="/">Home</Link> |
            <Link href="/#calculator">Calculator</Link> |
            <Link href="/#age-chart">Age Chart</Link> |
            <Link href="/#faq">FAQ</Link> |
            <Link href="/guides">Guides</Link> |
            <Link href="/about">About Us</Link> |
            <Link href="/contact">Contact</Link> |
            <Link href="/privacy">Privacy Policy</Link> |
            <Link href="/terms">Terms of Service</Link>
          </div>

          <p>
            &copy; 2013&ndash;{currentYear} DogYearsInHumanYears.com. All rights reserved.
          </p>

          <div className="footer-disclaimer">
            <p>
              <strong>Medical Disclaimer:</strong> This calculator is for informational and entertainment purposes only.
              It is not intended to be a substitute for professional veterinary advice, diagnosis, or treatment.
              Always seek the advice of your veterinarian with any questions you may have regarding your pet&apos;s health.
            </p>
            <p style={{ marginTop: '8px' }}>
              This site is a participant in various affiliate advertising programs designed to provide a means for sites
              to earn advertising fees by advertising and linking to partner sites.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;