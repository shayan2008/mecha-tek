import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

const ContactPage = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/shayanD', label: 'GitHub', id: 'github' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/shayanD', label: 'LinkedIn', id: 'linkedin' },
    // Add more social links if needed
  ];

  return (
    <section id="contact-page" className="bg-black-jet text-text-light-primary py-16 sm:py-20 lg:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-electric text-center pb-4 mb-12 sm:mb-16 border-b-2 border-green-neon">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left Column: Contact Info & Links (md:col-span-2) */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-neon mb-4">Contact Details</h3>
              <div className="space-y-3">
                <a href="mailto:shayan@mecha-tek.com" className="flex items-center text-lg text-text-light-secondary hover:text-blue-electric transition-colors group">
                  <FaEnvelope className="w-5 h-5 mr-3 text-blue-electric group-hover:text-green-neon transition-colors" />
                  shayan@mecha-tek.com
                </a>
                <div className="flex items-center text-lg text-text-light-secondary">
                  <FaMapMarkerAlt className="w-5 h-5 mr-3 text-blue-electric" />
                  Toronto, Canada
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-neon mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-text-light-secondary hover:text-blue-electric transition-colors"
                  >
                    <social.icon size={28} /> {/* text-2xl is approx 24px, using size prop for consistency */}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-neon mb-4">My Resume</h3>
              <a
                href="/resume.pdf"
                download="ShayanDoroudiani_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-green-neon text-black-jet font-semibold shadow-md hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black-jet focus:ring-green-neon transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form (md:col-span-3) */}
          <div className="bg-dark-card p-6 sm:p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-blue-electric mb-6">Send Me a Message</h3>
            <form name="contact-v3" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact-v3" />
              <p className="hidden">
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
              </p>

              <div className="mb-5">
                <label htmlFor="name-v3" className="block text-sm font-semibold text-text-light-secondary mb-1">Full Name</label>
                <input
                  type="text"
                  id="name-v3"
                  name="name"
                  required
                  className="w-full bg-black-jet border-2 border-bg-dark-card focus:border-blue-electric focus:ring-1 focus:ring-blue-electric rounded-lg p-3 text-text-light-primary transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email-v3" className="block text-sm font-semibold text-text-light-secondary mb-1">Email Address</label>
                <input
                  type="email"
                  id="email-v3"
                  name="email"
                  required
                  className="w-full bg-black-jet border-2 border-bg-dark-card focus:border-blue-electric focus:ring-1 focus:ring-blue-electric rounded-lg p-3 text-text-light-primary transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message-v3" className="block text-sm font-semibold text-text-light-secondary mb-1">Message</label>
                <textarea
                  id="message-v3"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-black-jet border-2 border-bg-dark-card focus:border-blue-electric focus:ring-1 focus:ring-blue-electric rounded-lg p-3 text-text-light-primary transition-colors duration-200"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-electric text-white font-semibold shadow-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-card focus:ring-blue-electric transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
