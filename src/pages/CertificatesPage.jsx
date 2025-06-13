import React from 'react';
import { FaCertificate } from 'react-icons/fa'; // Fallback icon

const certificatesData = [
  {
    id: 'stem-mechatronics',
    name: 'Mechatronics & Robotics Certificate',
    issuer: 'STEM Fellowship / University of Toronto',
    logoPlaceholder: 'UofT', // Or e.g., "uoft-logo.png"
    date: 'May 2024 (120+ Hours)',
    description: 'Intensive program covering mechanics, electronics, programming, and systems integration in robotics.',
  },
  {
    id: 'coursera-ros-ai',
    name: 'Advanced Robotics AI & ROS Programming',
    issuer: 'Coursera (University XYZ)',
    logoPlaceholder: 'Coursera',
    date: 'Ongoing',
    description: 'Specialization focusing on Robot Operating System (ROS), AI algorithms for robotics, and navigation.',
  },
  {
    id: 'stm32-workshop',
    name: 'STM32 Microcontroller Programming',
    issuer: 'STMicroelectronics Workshop',
    logoPlaceholder: 'STM',
    date: 'March 2023',
    description: 'Hands-on workshop on STM32 architecture, peripherals, and embedded C programming.',
  },
  {
    id: 'altium-pcb',
    name: 'Altium Designer PCB Design',
    issuer: 'Udemy Course',
    logoPlaceholder: 'Altium',
    date: 'Completed 2023',
    description: 'Comprehensive course on PCB design principles, schematic capture, and layout using Altium Designer.',
  },
  {
    id: 'google-digital-marketing',
    name: 'Google Digital Marketing & E-commerce',
    issuer: 'Google / Coursera',
    logoPlaceholder: 'Google',
    date: 'Completed 2022',
    description: 'Professional certificate covering SEO, SEM, content marketing, e-commerce strategies, and analytics.',
  },
  {
    id: 'lifesaving-instructor',
    name: 'Lifeguard & Swim Instructor',
    issuer: 'Lifesaving Society Canada',
    logoPlaceholder: 'LSC',
    date: 'Certified 2021',
    description: 'National Lifeguard, Swim Instructor, and Lifesaving Instructor certifications.',
  },
];

const CertificatesPage = () => {
  return (
    <section id="certificates" className="bg-black-jet text-text-light-primary py-16 sm:py-20 lg:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-electric text-center pb-4 mb-12 sm:mb-16 border-b-2 border-green-neon">
          Technical Certificates
        </h2>

        {/* TODO: Consider wrapping this grid div with <motion.div variants={staggerContainerVariants}> for staggered tile appearance. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificatesData.map((cert, index) => ( // Added index for custom prop
            // TODO: Wrap this tile div with <motion.div variants={tileItemVariants} key={cert.id} custom={index}>.
            <div
              key={cert.id}
              className="bg-dark-card rounded-xl shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-blue-electric/30 hover:scale-[1.03]"
            >
              {/* Logo Placeholder Area */}
              {/* TODO: Replace this div with an <img src={`/assets/images/logos/${cert.logoPlaceholder}`} alt={`${cert.issuer} logo`} /> once logos are available */}
              <div className="w-20 h-20 mb-5 bg-white/5 rounded-lg flex items-center justify-center text-text-light-secondary/70 text-3xl"> {/* Changed placeholder background */}
                {cert.logoPlaceholder && cert.logoPlaceholder.length <= 4 ? ( // Show text if short, else icon
                  <span className="font-bold text-2xl">{cert.logoPlaceholder}</span>
                ) : (
                  <FaCertificate />
                )}
              </div>

              <h3 className="text-lg font-semibold text-blue-electric mb-1 leading-tight">
                {cert.name}
              </h3>
              <p className="text-sm text-text-light-secondary mb-1">
                Issued by: <span className="font-medium">{cert.issuer}</span>
              </p>
              {cert.date && (
                <p className="text-xs text-text-light-secondary/70 mb-3">
                  {cert.date}
                </p>
              )}
              {cert.description && (
                <p className="text-xs text-text-light-secondary leading-normal flex-grow">
                  {cert.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesPage;
