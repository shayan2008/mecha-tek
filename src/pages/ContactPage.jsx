import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload } from 'react-icons/fa';

const ContactPage = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/shayanD', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/shayanD', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com/shayandoroudiani', label: 'Instagram' }, // Added Instagram
  ];

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto"> {/* Inherits bg-primary-dark */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center text-accent-blue dark:text-accent-blue pb-4 mb-12 border-b-2 border-accent-green"> {/* Title styling */}
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Contact Info & Socials */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">Contact Information</h3>
            <a href="mailto:shayan@mecha-tek.com" className="inline-flex items-center text-lg text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-blue dark:hover:text-accent-blue transition-colors p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-accent-blue dark:focus:ring-offset-primary-dark">
              <FaEnvelope className="mr-3 text-xl" />
              shayan@mecha-tek.com
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">Connect With Me</h3>
            <div className="flex space-x-6">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-blue dark:hover:text-accent-blue transition-colors p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue dark:focus:ring-offset-primary-dark"
                >
                  <social.icon size={32} /> {/* Increased icon size */}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">My Resume</h3>
            <a
              href="/resume.pdf"
              download="ShayanDoroudiani_Resume.pdf"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent-green text-primary-dark font-semibold shadow-md hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-green dark:focus:ring-offset-primary-dark transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105" // Matched HomePage style
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-primary-light dark:bg-secondary-dark p-6 sm:p-8 rounded-xl shadow-xl"> {/* Form card background */}
          <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6 text-center">Send Me a Message</h3>
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden"> {/* Honeypot field for Netlify spam filtering */}
              <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>

            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-secondary-light dark:bg-primary-dark text-text-primary-light dark:text-text-primary-dark focus:ring-accent-blue focus:border-accent-blue dark:focus:ring-accent-blue dark:focus:border-accent-blue"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-secondary-light dark:bg-primary-dark text-text-primary-light dark:text-text-primary-dark focus:ring-accent-blue focus:border-accent-blue dark:focus:ring-accent-blue dark:focus:border-accent-blue"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-secondary-light dark:bg-primary-dark text-text-primary-light dark:text-text-primary-dark focus:ring-accent-blue focus:border-accent-blue dark:focus:ring-accent-blue dark:focus:border-accent-blue"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-accent-blue text-primary-dark font-semibold shadow-md hover:bg-sky-500 dark:hover:bg-sky-400 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 ring-offset-2 focus:ring-accent-blue dark:focus:ring-offset-secondary-dark transform hover:scale-105" // Offset from secondary-dark (form card bg)
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
