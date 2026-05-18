'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container-main" style={{ paddingTop: '15px', paddingBottom: '30px' }}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> &raquo; Contact Us
      </div>

      <div className="section-box">
        <h1>Contact Us</h1>
        <p style={{ fontSize: '14px', color: '#555' }}>
          Have questions about our dog age calculator? Need help with your pet&apos;s health?
          We&apos;re here to help! Fill out the form below and we&apos;ll get back to you within 24 hours.
        </p>
      </div>

      <div className="ad-space ad-top-banner">
        <div className="ad-label">Advertisement</div>
        <div style={{ padding: '15px', color: '#999' }}>Ad Space - 728x90</div>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 400px' }}>
          <div className="section-box">
            <h2>Send Us a Message</h2>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#228B22', marginBottom: '10px' }}>
                  Message Sent Successfully!
                </p>
                <p style={{ color: '#555', marginBottom: '15px' }}>
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-primary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text" id="name" name="name" required
                    value={formData.name} onChange={handleChange}
                    className="form-control" placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email" id="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    className="form-control" placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject" name="subject" required
                    value={formData.subject} onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">Select a subject</option>
                    <option value="calculator">Dog Age Calculator Question</option>
                    <option value="health">Pet Health Inquiry</option>
                    <option value="feedback">Website Feedback</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message" required rows={6}
                    value={formData.message} onChange={handleChange}
                    className="form-control"
                    style={{ resize: 'vertical' }}
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit" disabled={isSubmitting}
                    className="btn btn-primary btn-large"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div style={{ flex: '1 1 280px' }}>
          <div className="section-box">
            <h2>Get in Touch</h2>
            <p><strong>Email:</strong> hello@dogyearsinhumanyears.com</p>
            <p style={{ fontSize: '12px', color: '#777', marginTop: '4px' }}>We typically respond within 24 hours</p>
            <hr className="separator" />
            <p><strong>Response Time:</strong></p>
            <p>Monday - Friday: Within 24 hours</p>
            <p>Weekends: Within 48 hours</p>
            <hr className="separator" />
            <p style={{ color: '#8B0000' }}>
              <strong>Pet Emergency?</strong> For urgent pet health concerns, please contact your local veterinarian immediately. We do not provide emergency veterinary services.
            </p>
          </div>

          <div className="section-box">
            <h2>Frequently Asked Questions</h2>
            <p><strong>Is the calculator accurate for all breeds?</strong></p>
            <p style={{ fontSize: '13px', color: '#555', marginBottom: '10px' }}>
              Our calculator uses size categories for the most accurate results. For breed-specific questions, consult your vet.
            </p>
            <p><strong>Can I suggest new features?</strong></p>
            <p style={{ fontSize: '13px', color: '#555', marginBottom: '10px' }}>
              Absolutely! We love hearing from our users and regularly implement suggested improvements.
            </p>
            <p><strong>Do you provide veterinary advice?</strong></p>
            <p style={{ fontSize: '13px', color: '#555' }}>
              We provide educational information only. Always consult your veterinarian for medical advice.
            </p>
          </div>

          <div className="ad-space ad-sidebar">
            <div className="ad-label">Advertisement</div>
            <div style={{ padding: '20px', color: '#999' }}>Ad Space - 300x250</div>
          </div>
        </div>
      </div>
    </div>
  );
}