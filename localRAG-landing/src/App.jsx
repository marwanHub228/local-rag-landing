import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="landing">
      <nav className="navbar">
        <div className="logo">LocalRAG</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Smart RAG Solutions for Business & Education</h1>
          <p>Empower your organization with cutting-edge Retrieval-Augmented Generation technology. Built for businesses and students alike.</p>
          <div className="hero-buttons">
            <a href="#pricing" className="btn-primary">Get Started</a>
            <a href="#about" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p className="about-intro">We bridge the gap between advanced AI and practical applications.</p>
        <div className="features-grid">
          <div className="feature-card">
            <h3>For Businesses</h3>
            <p>Streamline your data workflows with intelligent document processing and knowledge retrieval. Reduce search time and boost productivity with AI-powered solutions.</p>
          </div>
          <div className="feature-card">
            <h3>For Students</h3>
            <p>Access research materials faster, get instant answers from your study resources, and enhance your learning experience with smart AI assistants.</p>
          </div>
          <div className="feature-card">
            <h3>Local & Secure</h3>
            <p>Your data stays on your premises. Full control over your information with enterprise-grade security and privacy compliance.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Pricing Plans</h2>
        <p className="pricing-intro">Choose the plan that fits your needs</p>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Starter</h3>
            <div className="price">Free</div>
            <ul>
              <li>Basic RAG functionality</li>
              <li>Up to 100 documents</li>
              <li>Community support</li>
              <li>Standard processing speed</li>
            </ul>
            <a href="#contact" className="btn-plan">Get Started</a>
          </div>
          <div className="pricing-card featured">
            <div className="badge">Most Popular</div>
            <h3>Professional</h3>
            <div className="price">$49<span>/month</span></div>
            <ul>
              <li>Advanced RAG features</li>
              <li>Up to 10,000 documents</li>
              <li>Priority support</li>
              <li>Faster processing</li>
              <li>Custom integrations</li>
            </ul>
            <a href="#contact" className="btn-plan">Get Started</a>
          </div>
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <div className="price">Custom</div>
            <ul>
              <li>Unlimited documents</li>
              <li>Dedicated support</li>
              <li>Custom development</li>
              <li>On-premise deployment</li>
              <li>Full API access</li>
            </ul>
            <a href="#contact" className="btn-plan">Contact Us</a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p className="contact-intro">Have questions? We'd love to hear from you.</p>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Email</h3>
            <p>info@localrag.com</p>
          </div>
          <div className="contact-card">
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="contact-card">
            <h3>Address</h3>
            <p>123 Tech Street<br />Innovation City, TC 12345</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 LocalRAG. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
