import React from 'react';

const certificatesData = [
  '🧠 Mechatronics & Robotics Certificate (120+ Hours, STEM Fellowship)',
  '🤖 Advanced Robotics AI & ROS Programming (Coursera Specialization)',
  '💻 STM32 Microcontroller Programming (STMicroelectronics Workshop)',
  '🛠️ Altium Designer PCB Design & Layout (Udemy)',
  '📈 Google Digital Marketing & E-commerce Certificate (Coursera)',
  '🏊‍♂️ Lifeguard & Swim Instructor (Lifesaving Society Canada)',
  '⛑️ Standard First Aid & CPR-C/AED (Canadian Red Cross)',
  '📄 Workplace Hazardous Materials Information System (WHMIS)',
];

const CertificatesPage = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto"> {/* Inherits bg-primary-dark */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center text-accent-blue dark:text-accent-blue pb-4 mb-12 border-b-2 border-accent-green"> {/* Title styling */}
        Technical Certificates
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {certificatesData.map((certificate, index) => (
          <div
            key={index}
            className="bg-secondary-light dark:bg-secondary-dark border border-accent-green/50 dark:border-accent-green/70 text-accent-green dark:text-accent-green py-2 px-4 rounded-lg text-sm sm:text-base font-medium shadow-md transition-all duration-200 hover:scale-105 hover:border-accent-green cursor-default"
          >
            {certificate}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesPage;
