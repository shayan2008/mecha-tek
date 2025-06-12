import React from 'react';

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
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-700 dark:text-blue-400">
        Leadership & Extracurriculars
      </h2>

      <div className="space-y-8">
        {leadershipData.map((role, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-6 md:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {role.title}
            </h3>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-1 sm:mb-0">
                {role.org}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                {role.date}
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              {role.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipPage;
