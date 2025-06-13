import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload } from 'react-icons/fa';

const ContactPage = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/shayanD', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/shayanD', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com/shayandoroudiani', label: 'Instagram' }, // Added Instagram
  ];

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-700 dark:text-blue-400">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Contact Info & Socials */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Contact Information</h3>
            <a href="mailto:shayan@mecha-tek.com" className="inline-flex items-center text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 dark:focus:ring-offset-gray-900">
              <FaEnvelope className="mr-3 text-xl" />
              shayan@mecha-tek.com
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Connect With Me</h3>
            <div className="flex space-x-6">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
                >
                  <social.icon size={32} /> {/* Increased icon size */}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">My Resume</h3>
            <a
              href="/resume.pdf"
              download="ShayanDoroudiani_Resume.pdf" // Added consistent filename
              className="inline-flex items-center px-6 py-3 rounded-lg bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 dark:focus:ring-offset-gray-900"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Send Me a Message</h3>
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden"> {/* Honeypot field for Netlify spam filtering */}
              <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>

            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
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
