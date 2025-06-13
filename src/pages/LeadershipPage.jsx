import React from 'react';
import { FaBuilding, FaCalendarAlt } from 'react-icons/fa';

const leadershipData = [
  {
    title: 'Captain, Kavosh Robotics Senior Team',
    org: 'Kavosh Robotics Club',
    date: 'August 2023 – Present',
    desc: 'Lead a team of 15+ students in designing, building, and programming autonomous robots for international competitions like FIRA RoboWorld Cup and RoboCup. Responsible for system architecture, AI strategy, project management (Agile), and mentorship. Secured multiple national titles and international qualifications.',
  },
  {
    title: 'President, Earl Haig Robotics Club',
    org: 'Earl Haig Secondary School',
    date: 'September 2022 – Present',
    desc: 'Oversee all club activities, including workshops, internal competitions, and participation in external events like the CETA Robotics IoT Challenge (achieved 3rd place). Manage club resources, recruit members, and foster a collaborative learning environment for 50+ members.',
  },
  {
    title: 'Captain, Earl Haig Swim Team',
    org: 'Earl Haig Secondary School Athletics',
    date: 'September 2023 – June 2024',
    desc: 'Led team practices, motivated swimmers, and coordinated strategies for swim meets. Contributed to team spirit and individual athlete development, culminating in strong performances at regional championships (OFSAA).',
  },
  {
    title: 'Founder & Lead Instructor, Mecha-Minds Workshops',
    org: 'Self-Initiated Community Program',
    date: 'June 2023 – August 2023',
    desc: 'Developed and delivered a summer robotics workshop series for middle school students, covering basics of Arduino, programming, and mechanical design. Aimed at inspiring younger students to pursue STEM fields.',
  },
];

const LeadershipPage = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto"> {/* Inherits bg-primary-dark */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center text-accent-blue dark:text-accent-blue pb-4 mb-12 border-b-2 border-accent-green"> {/* Title styling */}
        Leadership & Extracurriculars
      </h2>

      <div className="space-y-8">
        {leadershipData.map((role, index) => (
          <div
            key={index}
            className="bg-primary-light dark:bg-secondary-dark rounded-xl shadow-lg overflow-hidden p-6 md:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl dark:border dark:border-gray-700"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-1"> {/* Made responsive */}
              {role.title}
            </h3>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
              <p className="text-accent-blue dark:text-accent-blue font-semibold text-lg mb-1 sm:mb-0 flex items-center">
                <FaBuilding className="mr-2 opacity-75" /> {role.org}
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium flex items-center">
                <FaCalendarAlt className="mr-2 opacity-75" /> {role.date}
              </p>
            </div>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed mt-1"> {/* Added mt-1 for slight space from date/org line */}
              {role.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipPage;
