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
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-700 dark:text-blue-400">
        Technical Certificates
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {certificatesData.map((certificate, index) => (
          <div
            key={index}
            className="bg-green-100 dark:bg-gray-700 text-green-800 dark:text-green-200 py-3 px-5 rounded-full text-sm sm:text-base font-medium shadow-md transition-transform hover:scale-105 cursor-default"
          >
            {certificate}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesPage;
