import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For "View Details" button

// Sample Project Data (ensure image paths are correct for public/assets/images/)
const initialProjectsData = [
  {
    id: 'drc-explorer',
    title: 'DRC Explorer Robot',
    description: 'Humanoid robot for disaster response, featuring advanced mapping, terrain navigation, and sensor fusion. Achieved Gold at FIRA Robocup.',
    image: '/assets/images/project-drc-explorer-robot.jpg', // Ensure this image exists
    category: ['Robotics', 'AI', 'Embedded'],
    tools: ['ROS', 'Python', 'C++', 'STM32', 'Computer Vision'],
    detailsLink: '#/projects/drc-explorer', // Placeholder link
  },
  {
    id: 'autonomous-car',
    title: 'Autonomous Car',
    description: 'Line-following vehicle with obstacle avoidance, traffic light detection, and autonomous navigation logic using AI.',
    image: '/assets/images/project-autonomous-car.jpg', // Ensure this image exists
    category: ['Robotics', 'AI', 'Embedded'],
    tools: ['Python', 'OpenCV', 'Raspberry Pi', 'Sensors'],
    detailsLink: '#/projects/autonomous-car',
  },
  {
    id: 'medport-dispenser',
    title: 'MedPort Smart Pill Dispenser',
    description: 'Automated pill dispenser with scheduling, alerts, and remote tracking. Winner of Silver Medal at Toronto Science Fair.',
    image: '/assets/images/project-medport-smart-pill-dispenser.jpg',
    category: ['Embedded', 'Software', 'Healthcare'],
    tools: ['C++', 'Arduino', 'Firebase', 'Flutter'],
    detailsLink: '#/projects/medport-dispenser',
  },
  {
    id: 'rescue-simulation',
    title: 'Rescue Simulation (RoboCup)',
    description: 'Led AI optimization & logic for virtual rescue agents. Secured 1st & 2nd place internationally in simulation challenges.',
    image: '/assets/images/project-rescue-simulation-robocup.jpg',
    category: ['AI', 'Software', 'Simulation'],
    tools: ['Python', 'AI Algorithms', 'ROS', 'Unity'],
    detailsLink: '#/projects/rescue-simulation',
  },
  {
    id: 'teleswitch-iot',
    title: 'TeleSwitch IoT Controller',
    description: 'Wi-Fi & SMS-controlled home automation switch for remote device management. 3rd Place, Mossito Innovation League.',
    image: '/assets/images/project-teleswitch-iot-controller.jpg',
    category: ['Embedded', 'Software', 'IoT'],
    tools: ['ESP32', 'C++', 'MQTT', 'Node.js'],
    detailsLink: '#/projects/teleswitch-iot',
  },
  {
    id: 'swimstroke-ai',
    title: 'SwimStroke AI',
    description: 'AI tool for competitive swimmers, using computer vision to analyze stroke efficiency and breathing patterns for performance enhancement.',
    image: '/assets/images/project-swimstroke-ai.jpg',
    category: ['AI', 'Software', 'Sports Tech'],
    tools: ['Python', 'OpenCV', 'TensorFlow', 'Flask'],
    detailsLink: '#/projects/swimstroke-ai',
  },
];

const filterCategories = ['All', 'AI', 'Embedded', 'Robotics', 'Software', 'IoT', 'Healthcare', 'Sports Tech', 'Simulation']; // Expanded to cover example data

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(initialProjectsData);

  useEffect(() => {
    if (selectedFilter === 'All') {
      setFilteredProjects(initialProjectsData);
    } else {
      setFilteredProjects(
        initialProjectsData.filter(project => project.category.includes(selectedFilter))
      );
    }
  }, [selectedFilter]);

  // Helper to truncate description
  const truncateDescription = (text, maxLength = 70) => {
    if (text.length <= maxLength) return text;
    const words = text.split(' ');
    let truncated = '';
    for (const word of words) {
      if ((truncated + word + ' ').length > maxLength) break;
      truncated += word + ' ';
    }
    return truncated.trim() + '...';
  };

  return (
    <section id="projects-page" className="bg-black-jet text-text-light-primary py-16 sm:py-20 lg:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-electric text-center pb-4 mb-12 sm:mb-16 border-b-2 border-green-neon">
          My Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {filterCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-5 py-2 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-black-jet transform hover:scale-105
                ${selectedFilter === category
                  ? 'bg-green-neon text-black-jet focus:ring-green-neon' // Active
                  : 'bg-dark-card text-text-light-secondary hover:bg-blue-electric hover:text-white focus:ring-blue-electric' // Inactive
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          // TODO: Consider wrapping this grid div with <motion.div variants={staggerContainerVariants}> for staggered card appearance.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredProjects.map((project, index) => ( // Added index for custom prop in Framer Motion
              // TODO: Wrap this card div with <motion.div variants={cardItemVariants} key={project.id} custom={index}>.
              <div
                key={project.id}
                className="bg-dark-card rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-green-neon/30 hover:scale-[1.02]"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-blue-electric mb-3"> {/* Increased mb slightly */}
                    {project.title}
                  </h3>
                  <p className="text-text-light-secondary text-sm leading-relaxed mb-4 flex-grow">
                    {truncateDescription(project.description, 100)} {/* Max 100 chars */}
                  </p>

                  {project.tools && project.tools.length > 0 && (
                    <div className="mb-5"> {/* Increased mb slightly */}
                      <h4 className="text-xs font-semibold text-text-light-secondary uppercase tracking-wider mb-2">
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map(tool => (
                          <span key={tool} className="bg-green-neon/10 text-green-neon text-xs px-2.5 py-1 rounded-full">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link
                    to={project.detailsLink}
                    className="mt-auto bg-blue-electric text-white text-center text-sm font-semibold py-2.5 px-4 rounded-lg hover:bg-opacity-80 self-start transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-card focus:ring-blue-electric"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-text-light-secondary text-xl">No projects found for "{selectedFilter}". Try another category!</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
