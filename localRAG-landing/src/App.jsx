import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className="landing">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">◈</span>
            LocalRAG
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
              {darkMode ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
            <a href="#pricing" className="btn-nav">Get Started</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-grid"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Privacy-First AI Platform
          </div>
          <h1>
            Smart RAG Solutions for <span className="gradient-text">Business & Education</span>
          </h1>
          <p className="hero-subtitle">
            Empower your organization with cutting-edge Retrieval-Augmented Generation technology. 
            Your data stays local, your AI stays private.
          </p>
          <div className="hero-buttons">
            <a href="#pricing" className="btn-primary">
              <span>Start Free</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#about" className="btn-secondary">
              See Features
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">100%</span>
              <span className="stat-label">Offline</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">0</span>
              <span className="stat-label">Data Leaks</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">Free</span>
              <span className="stat-label">Starter</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Why LocalRAG</span>
            <h2>Built for Privacy, <span className="gradient-text">Designed for Performance</span></h2>
            <p className="section-desc">
              We bridge the gap between advanced AI and practical applications. 
              Everything runs locally on your machine.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>For Businesses</h3>
              <p>Streamline your data workflows with intelligent document processing and knowledge retrieval. Reduce search time and boost productivity.</p>
              <ul className="feature-list">
                <li>Enterprise-grade security</li>
                <li>Custom integrations</li>
                <li>Team collaboration</li>
              </ul>
            </div>
            <div className="feature-card highlight">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3>For Students</h3>
              <p>Access research materials faster, get instant answers from your study resources, and enhance your learning experience.</p>
              <ul className="feature-list">
                <li>Research assistance</li>
                <li>Study organization</li>
                <li>Citation tracking</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3>Local & Secure</h3>
              <p>Your data stays on your premises. Full control over your information with enterprise-grade privacy compliance.</p>
              <ul className="feature-list">
                <li>On-premise deployment</li>
                <li>No cloud dependencies</li>
                <li>Complete data ownership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Pricing</span>
            <h2>Simple, <span className="gradient-text">Transparent Pricing</span></h2>
            <p className="section-desc">
              Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Starter</h3>
                <p>Perfect for individuals</p>
              </div>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="amount">0</span>
                <span className="period">/forever</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Basic RAG functionality
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Up to 100 documents
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Community support
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Standard processing
                </li>
                <li className="disabled">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  Custom integrations
                </li>
              </ul>
              <a href="#contact" className="btn-pricing">Get Started Free</a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-header">
                <h3>Professional</h3>
                <p>For growing teams</p>
              </div>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="amount">49</span>
                <span className="period">/month</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Advanced RAG features
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Up to 10,000 documents
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Priority support
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Faster processing
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Custom integrations
                </li>
              </ul>
              <a href="#contact" className="btn-pricing primary">Get Started</a>
            </div>
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Enterprise</h3>
                <p>For large organizations</p>
              </div>
              <div className="pricing-price">
                <span className="amount">Custom</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Unlimited documents
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Dedicated support
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Custom development
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  On-premise deployment
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Full API access
                </li>
              </ul>
              <a href="#contact" className="btn-pricing">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Contact</span>
            <h2>Get in <span className="gradient-text">Touch</span></h2>
            <p className="section-desc">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p>info@localrag.com</p>
              <a href="mailto:info@localrag.com" className="contact-link">Send us an email →</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <a href="tel:+15551234567" className="contact-link">Call us →</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Address</h3>
              <p>123 Tech Street<br/>Innovation City, TC 12345</p>
              <a href="#" className="contact-link">Get directions →</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">◈</span>
              LocalRAG
            </div>
            <p>Privacy-first, local RAG application for business and education.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Product</h4>
              <a href="#pricing">Pricing</a>
              <a href="#about">Features</a>
              <a href="#">Documentation</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#">Careers</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">License</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 LocalRAG. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
