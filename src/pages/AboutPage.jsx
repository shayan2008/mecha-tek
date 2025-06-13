import React from 'react';
import profilePlaceholder from '../assets/profile-placeholder.png'; // Assuming this is the placeholder
import { FaMapMarkerAlt, FaBrain, FaGraduationCap, FaCode, FaRobot, FaUsers } from 'react-icons/fa';

const primarySkillsData = [
  { id: 1, icon: FaRobot, text: "Robotics & Mechatronics" },
  { id: 2, icon: FaBrain, text: "AI & Machine Learning" },
  { id: 3, icon: FaCode, text: "Full-Stack Development" },
  { id: 4, icon: FaUsers, text: "Team Leadership" },
];

const AboutPage = () => {
  return (
    <section
      id="about-me"
      className="bg-black-jet text-text-light-primary py-16 sm:py-20 lg:py-24 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-electric text-center pb-4 mb-12 sm:mb-16 border-b-2 border-green-neon">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="md:col-span-1 space-y-6 text-center md:text-left sticky top-24"> {/* Sticky for desktop */}
            {/* Profile Image */}
            {/* TODO: Replace with your actual photo */}
            <img
              src={profilePlaceholder}
              alt="Shayan Doroudiani"
              className="rounded-xl shadow-xl w-full max-w-xs mx-auto md:mx-0 border-2 border-bg-dark-card"
            />
            <div className="px-2">
              <h1 className="text-3xl font-bold text-green-neon mt-4">
                Shayan Doroudiani
              </h1>
              <p className="text-text-light-secondary text-md mt-2 leading-relaxed">
                Aspiring robotics engineer and AI enthusiast, driven by innovation and a passion for building impactful solutions.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-blue-electric mb-4">
                My Journey
              </h3>
              <div className="text-text-light-secondary text-lg leading-relaxed space-y-5">
                <p>
                  From an early fascination with how things work to leading award-winning robotics teams, my journey has been one of relentless curiosity and hands-on creation. I thrive on transforming complex challenges into elegant technological solutions, particularly at the intersection of hardware and software.
                </p>
                <p>
                  My experience spans designing autonomous robots for international competitions like FIRA and RoboCup, developing AI-driven applications for sports and healthcare, and diving deep into embedded systems. I'm passionate about sharing knowledge, leading teams, and constantly pushing the boundaries of what's possible in the tech landscape.
                </p>
                 <p>
                  Currently seeking opportunities to contribute to innovative projects and collaborate with like-minded individuals who are passionate about shaping the future of technology.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-blue-electric mt-10 mb-6">
                Quick Stats
              </h3>
              <dl className="space-y-4">
                <div className="flex items-center">
                  <dt className="w-1/3 font-semibold text-text-light-primary text-lg">Age:</dt>
                  <dd className="w-2/3 text-text-light-secondary text-lg">18</dd>
                </div>
                <div className="flex items-center">
                  <dt className="w-1/3 font-semibold text-text-light-primary text-lg"><FaMapMarkerAlt className="inline mr-2 text-green-neon" />Location:</dt>
                  <dd className="w-2/3 text-text-light-secondary text-lg">Toronto, Canada</dd>
                </div>
                <div className="flex items-start">
                  <dt className="w-1/3 font-semibold text-text-light-primary text-lg"><FaGraduationCap className="inline mr-2 text-green-neon" />Education:</dt>
                  <dd className="w-2/3 text-text-light-secondary text-lg">Earl Haig Secondary School (Expected Graduation: June 2025)</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-blue-electric mt-10 mb-6">
                Primary Skills
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {primarySkillsData.map(skill => {
                  const SkillIcon = skill.icon;
                  return (
                    <li key={skill.id} className="bg-dark-card p-4 rounded-lg shadow-md flex items-center transition-all duration-300 hover:shadow-green-neon/20">
                      <SkillIcon className="text-2xl text-green-neon mr-3 flex-shrink-0" />
                      <span className="text-text-light-primary text-md">{skill.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
