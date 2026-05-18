import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Dog Years in Human Years Calculator',
  description: 'Learn about the Dog Years in Human Years team, our mission, and why our dog age calculator is the most accurate on the web. Trusted by dog owners since 2013.',
};

export default function About() {
  return (
    <div className="container-main" style={{ paddingTop: '15px', paddingBottom: '30px' }}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> &raquo; About Us
      </div>

      <div className="section-box">
        <h1>About Dog Years in Human Years Calculator</h1>
        <p style={{ fontSize: '14px', color: '#555', marginBottom: '15px' }}>
          We are passionate about helping dog owners better understand their furry companions&apos;
          aging process through science-backed calculations and educational content.
        </p>
      </div>

      <div className="section-box">
        <h2>Our Mission</h2>
        <p>
          Every dog owner has wondered: &quot;How old is my dog in human years?&quot; While the old
          &quot;multiply by 7&quot; rule is widely known, it&apos;s not scientifically accurate. Different
          breeds age at different rates, and size plays a crucial role in determining lifespan.
        </p>
        <p>
          Our mission is to provide the most accurate, science-based dog age calculations available,
          helping you better understand your pet&apos;s life stage and health needs. We use formulas
          based on peer-reviewed veterinary research and breed-specific aging patterns to ensure
          you get the most reliable results.
        </p>
        <p>
          Established in 2013, we have been serving dog owners worldwide for over a decade.
          Our calculator has been used over 1.2 million times, making us one of the most trusted
          dog age conversion tools on the internet.
        </p>
      </div>

      <div className="section-box">
        <h2>What Makes Our Calculator Different</h2>
        <ul style={{ margin: '10px 0 10px 25px', lineHeight: '1.8' }}>
          <li><strong>Scientific Approach:</strong> Our calculations are based on peer-reviewed veterinary research and breed-specific aging patterns, not outdated myths.</li>
          <li><strong>Size-Specific Data:</strong> We account for size categories (small, medium, large) that significantly impact aging rates. A Chihuahua ages very differently from a Great Dane.</li>
          <li><strong>Educational Content:</strong> Beyond calculations, we provide valuable insights about dog health, life stages, and care recommendations.</li>
          <li><strong>Free to Use:</strong> Our calculator is completely free. No sign-ups, no payments, no hidden costs.</li>
          <li><strong>Regularly Updated:</strong> We update our formulas as new veterinary research becomes available.</li>
        </ul>
      </div>

      <div className="section-box">
        <h2>Built by Dog Lovers, for Dog Lovers</h2>
        <p>
          Our team consists of dog enthusiasts and web developers who are passionate about improving
          the lives of dogs and their owners through better understanding and education. We have dogs
          of our own, and we built this tool because we wanted to understand them better.
        </p>
        <p>
          We believe that knowing your dog&apos;s true age in human terms helps you provide better
          care. It helps you understand when to switch to senior food, when to increase vet visits,
          and how to adjust exercise routines. Our goal is to help every dog live their best,
          healthiest life possible.
        </p>
      </div>

      <div className="section-box">
        <h2>Have Questions or Suggestions?</h2>
        <p>
          We&apos;d love to hear from you! Whether you have feedback about our calculator, suggestions
          for new features, or questions about dog care, please reach out.
        </p>
        <p style={{ marginTop: '10px' }}>
          <Link href="/contact" className="btn btn-primary">Contact Us</Link>
        </p>
      </div>
    </div>
  );
}