import Link from 'next/link';

export default function NotFound() {
  const dogFacts = [
    "Dogs can learn over 150 words!",
    "A dog's sense of smell is 10,000 times stronger than humans!",
    "Dogs dream just like humans do!",
    "Puppies are born deaf and blind!",
    "Dogs have three eyelids!",
    "A dog's nose print is unique, like a human fingerprint!",
  ];

  const randomFact = dogFacts[Math.floor(Math.random() * dogFacts.length)];

  return (
    <div className="container-main" style={{ paddingTop: '30px', paddingBottom: '30px', textAlign: 'center' }}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> &raquo; Page Not Found
      </div>

      <div className="section-box" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '15px' }}>404 &mdash; Page Not Found</h1>

        <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px' }}>
          Oops! This page went to the dog park! The page you&apos;re looking for doesn&apos;t exist
          or may have been moved.
        </p>

        <div style={{
          background: '#f7f7f7',
          border: '1px dashed #ccc',
          padding: '15px',
          margin: '20px 0',
          fontSize: '14px',
          color: '#555'
        }}>
          <strong>Fun dog fact:</strong> {randomFact}
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
          <Link href="/" className="btn btn-primary">Go to Homepage</Link>
          <Link href="/#calculator" className="btn">Try the Calculator</Link>
          <Link href="/guides" className="btn">Browse Guides</Link>
          <Link href="/contact" className="btn">Contact Us</Link>
        </div>

        <p className="text-small text-muted" style={{ marginTop: '20px' }}>
          Think this is an error? <Link href="/contact">Contact us</Link> and we&apos;ll help you find what you&apos;re looking for.
        </p>
      </div>
    </div>
  );
}