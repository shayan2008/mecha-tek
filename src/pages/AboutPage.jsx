import React from 'react';
import { FaCode, FaRobot, FaUsers, FaBrain, FaMicrochip, FaSwimmer, FaLightbulb } from 'react-icons/fa';
import { GiGearStickPattern } from "react-icons/gi"; // For Mechatronics


const getSkillIcon = (skill) => {
  const lowerSkill = skill.toLowerCase();
  if (lowerSkill.includes('robotics')) return <FaRobot className="mr-2" />;
  if (lowerSkill.includes('ai') || lowerSkill.includes('machine learning')) return <FaBrain className="mr-2" />;
  if (lowerSkill.includes('embedded') || lowerSkill.includes('stm32') || lowerSkill.includes('arduino') || lowerSkill.includes('esp32')) return <FaMicrochip className="mr-2" />;
  if (lowerSkill.includes('mechatronics')) return <GiGearStickPattern className="mr-2" />;
  if (lowerSkill.includes('programming') || lowerSkill.includes('python') || lowerSkill.includes('c++') || lowerSkill.includes('javascript') || lowerSkill.includes('ros')) return <FaCode className="mr-2" />;
  if (lowerSkill.includes('leadership') || lowerSkill.includes('team management')) return <FaUsers className="mr-2" />;
  if (lowerSkill.includes('swimming') || lowerSkill.includes('athletics')) return <FaSwimmer className="mr-2" />;
  if (lowerSkill.includes('problem solving') || lowerSkill.includes('critical thinking')) return <FaLightbulb className="mr-2" />;
  return <FaLightbulb className="mr-2" />; // Default icon
};

const AboutPage = () => {
  // Skills array (optional, can be moved or managed globally later)
  const skills = [
    'Robotics (Design, CAD, Systems Integration)',
    'AI & Machine Learning Applications',
    'Embedded Systems (STM32, Arduino, ESP32)',
    'Mechatronics & Electronics (Circuit Design, PCB, Soldering)',
    'Programming (Python, C++, JavaScript, ROS)',
    'Leadership & Team Management (Agile, Scrum)',
    'Competitive Swimming & Athletics',
    'Problem Solving & Critical Thinking',
  ];

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto"> {/* Inherits bg-primary-dark */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center text-accent-blue dark:text-accent-blue pb-4 mb-10 border-b-2 border-accent-green"> {/* Title styling */}
        About Me
      </h2>

      <div className="text-lg text-text-secondary-light dark:text-text-secondary-dark space-y-6 leading-relaxed">
        <p>
          Hi, I'm Shayan Doroudiani, a passionate and driven high school student from Toronto with a deep-rooted enthusiasm for robotics, artificial intelligence, and mechatronics. My journey into the world of STEM began early, fueled by a curiosity for how things work and a desire to create innovative solutions to real-world challenges.
        </p>
        <p>
          Throughout my high school career, I've actively engaged in competitive robotics, leading teams in prestigious events like the FIRA RoboWorld Cup and RoboCup. These experiences have not only honed my technical skills in areas such as autonomous system design, embedded programming, and AI model integration but have also taught me the invaluable lessons of teamwork, perseverance, and leadership under pressure. I've had the privilege of captaining teams to national victories and international qualifications, a testament to our collective dedication and problem-solving abilities.
        </p>
        <p>
          Beyond competitions, I'm committed to applying my skills to projects with tangible impact. From developing a smart pill dispenser (MedPort) that secured a silver medal at the Toronto Science Fair, to creating AI-driven tools for athletes, I continuously seek opportunities to innovate. My technical toolkit includes proficiency in Python, C++, ROS, CAD software, and various microcontroller platforms like STM32 and ESP32.
        </p>
        <p>
          When I'm not immersed in circuits and code, I'm often found in the pool as a competitive swimmer or leading extracurricular activities that promote STEM education. I believe in a well-rounded approach to personal and professional growth, where discipline from sports complements the analytical rigor of engineering.
        </p>
        <p>
          I am always eager to learn, collaborate, and contribute to projects that push the boundaries of technology. Feel free to explore my projects or get in touch!
        </p>
      </div>

      {/* Optional Skills Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6 text-center text-accent-blue dark:text-accent-blue"> {/* Skills title styling */}
          Core Skills
        </h3>
        <ul className="flex flex-wrap gap-3 justify-center">
          {skills.map(skill => (
            <li
              key={skill}
              className="bg-accent-green/20 dark:bg-accent-green/10 text-accent-green dark:text-accent-green px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-transform duration-200 hover:scale-105 cursor-default flex items-center"
            >
              {getSkillIcon(skill)} {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutPage;
