import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const leadershipData = [
  {
    id: 'kavosh-captain',
    title: 'Captain, Kavosh Robotics Senior Team',
    org: 'Kavosh Robotics Club',
    date: 'August 2023 – Present',
    roleType: 'Leadership',
    desc: 'Lead a team of 15+ students in designing, building, and programming autonomous robots for international competitions like FIRA RoboWorld Cup and RoboCup.',
    achievements: [
      'Responsible for system architecture, AI strategy, and project management (Agile).',
      'Mentored junior members in various technical domains.',
      'Secured multiple national titles and international qualifications.',
      'Managed inter-team collaborations for SuperTeam challenges.'
    ],
  },
  {
    id: 'earl-haig-president',
    title: 'President, Earl Haig Robotics Club',
    org: 'Earl Haig Secondary School',
    date: 'September 2022 – Present',
    roleType: 'Management',
    desc: 'Oversee all club activities, including workshops, internal competitions, and participation in external events like the CETA Robotics IoT Challenge.',
    achievements: [
      'Achieved 3rd place in CETA Robotics IoT Challenge.',
      'Managed club resources and successfully recruited over 50 new members.',
      'Fostered a collaborative learning environment, organizing peer-to-peer mentorship.',
      'Initiated and led fundraising activities for new equipment.'
    ],
  },
  {
    id: 'swim-team-captain',
    title: 'Captain, Earl Haig Swim Team',
    org: 'Earl Haig Secondary School Athletics',
    date: 'September 2023 – June 2024',
    roleType: 'Captaincy',
    desc: 'Led team practices, motivated swimmers, and coordinated strategies for swim meets, contributing to team spirit and individual athlete development.',
    achievements: [
      'Contributed to strong team performances at regional championships (OFSAA).',
      'Organized team-building events and mentored younger swimmers.',
      'Assisted coaches with training plan execution.'
    ],
  },
  {
    id: 'mecha-minds-founder',
    title: 'Founder & Lead Instructor, Mecha-Minds Workshops',
    org: 'Self-Initiated Community Program',
    date: 'June 2023 – August 2023',
    roleType: 'Initiative',
    desc: 'Developed and delivered a summer robotics workshop series for middle school students, covering basics of Arduino, programming, and mechanical design.',
    achievements: [
      'Aimed at inspiring younger students to pursue STEM fields.',
      'Received positive feedback from participants and parents.',
      'Successfully managed logistics and curriculum development for 20+ students.'
    ],
  },
];

const LeadershipPage = () => {
  const [openAccordion, setOpenAccordion] = useState(leadershipData[0]?.id || null); // Open the first item by default

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section id="leadership-extracurriculars" className="bg-black-jet text-text-light-primary py-16 sm:py-20 lg:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-electric text-center pb-4 mb-12 sm:mb-16 border-b-2 border-green-neon">
          Leadership & Extracurriculars
        </h2>

        <div className="space-y-4">
          {leadershipData.map((item) => {
            const isOpen = openAccordion === item.id;
            return (
              <div key={item.id} className="bg-dark-card rounded-xl shadow-xl overflow-hidden">
                {/* Header/Button */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-4 sm:p-6 flex justify-between items-center text-left hover:bg-white/5 focus:outline-none focus:bg-white/10 transition-colors duration-200"
                  aria-expanded={isOpen}
                  aria-controls={`accordion-content-${item.id}`}
                >
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg sm:text-xl font-semibold text-blue-electric">
                        {item.title}
                      </h3>
                      {item.roleType && (
                        <span className="mt-1 sm:mt-0 sm:ml-4 bg-green-neon/20 text-green-neon text-xs font-semibold px-2.5 py-1 rounded-full self-start sm:self-center">
                          {item.roleType}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text-light-secondary mt-1">{item.org}</p>
                  </div>
                  {isOpen ? (
                    <FaChevronUp className="text-xl text-green-neon ml-4 flex-shrink-0 transform transition-transform duration-300" />
                  ) : (
                    <FaChevronDown className="text-xl text-green-neon ml-4 flex-shrink-0 transform transition-transform duration-300" />
                  )}
                </button>

                {/* Content Area */}
                {isOpen && (
                  <div
                    id={`accordion-content-${item.id}`}
                    className="p-4 sm:p-6 border-t border-text-light-secondary/20 bg-black-jet" // Content area on main bg, border for separation
                  >
                    <p className="text-xs text-text-light-secondary mb-3 tracking-wider uppercase">
                      {item.date}
                    </p>
                    <p className="text-text-light-secondary mb-4 leading-relaxed">
                      {item.desc}
                    </p>
                    {item.achievements && item.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-text-light-primary mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 pl-1">
                          {item.achievements.map((achievement, index) => (
                            <li key={index} className="text-text-light-secondary leading-relaxed">
                              <span className="text-green-neon/80 mr-1">&#8227;</span> {/* Custom bullet */}
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadershipPage;
