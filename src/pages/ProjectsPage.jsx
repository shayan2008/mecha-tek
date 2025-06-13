import React, { useState, useEffect } from 'react';

const projectsData = [
  {
    title: 'DRC Explorer Robot',
    description: 'Humanoid robot for disaster response; features mapping, terrain navigation, and sensor fusion. Gold at FIRA Robocup.',
    image: '/assets/images/project-drc-explorer-robot.jpg',
    category: ['Robotics', 'AI', 'Embedded Systems'],
    icon: '🤖',
  },
  {
    title: 'Autonomous Car',
    description: 'Line-following vehicle with obstacle avoidance, traffic light detection, and autonomous navigation logic.',
    image: '/assets/images/project-autonomous-car.jpg',
    category: ['Robotics', 'AI', 'Embedded Systems'],
    icon: '🚗',
  },
  {
    title: 'MedPort Smart Pill Dispenser',
    description: 'Automated pill dispenser with scheduling, alerts, and remote tracking. Silver Medal, Toronto Science Fair.',
    image: '/assets/images/project-medport-smart-pill-dispenser.jpg',
    category: ['Embedded Systems', 'Healthcare', 'Software'],
    icon: '💊',
  },
  {
    title: 'Rescue Simulation (RoboCup)',
    description: 'Led AI optimization & logic for virtual rescue agents in simulation. 1st & 2nd place internationally.',
    image: '/assets/images/project-rescue-simulation-robocup.jpg',
    category: ['AI', 'Software', 'Simulation'],
    icon: '🛰️',
  },
  {
    title: 'TeleSwitch IoT Controller',
    description: 'Wi-Fi & SMS-controlled home automation switch for remote device management. 3rd Place, Mossito Innovation League.',
    image: '/assets/images/project-teleswitch-iot-controller.jpg',
    category: ['Embedded Systems', 'IoT', 'Software'],
    icon: '🔒',
  },
  {
    title: 'SwimStroke AI',
    description: 'AI-based feedback tool for competitive swimmers. Uses computer vision to analyze stroke efficiency and breathing patterns.',
    image: '/assets/images/project-swimstroke-ai.jpg',
    category: ['AI', 'Software', 'Sports Tech'],
    icon: '🏊',
  },
  {
    title: 'QuantBot Trading Simulator',
    description: 'Python-based algorithmic trading simulator leveraging basic ML for market signal generation and backtesting strategies.',
    image: '/assets/images/project-quantbot-trading-simulator.jpg',
    category: ['Software', 'AI', 'Finance'],
    icon: '📊',
  },
  {
    title: 'Dual-Axis Solar Tracker',
    description: 'Microcontroller-based system that orients a solar panel towards the sun to maximize energy capture efficiency.',
    image: '/assets/images/project-dual-axis-solar-tracker.jpg',
    category: ['Embedded Systems', 'Robotics', 'Energy'],
    icon: '☀️',
  },
];

const filterCategories = ['All', 'Robotics', 'AI', 'Embedded Systems', 'Software', 'IoT', 'Healthcare', 'Sports Tech', 'Energy', 'Finance', 'Simulation'];

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    if (selectedFilter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter(project => project.category.includes(selectedFilter))
      );
    }
  }, [selectedFilter]);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto"> {/* Inherits bg-primary-dark */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center text-accent-blue dark:text-accent-blue pb-4 mb-12 border-b-2 border-accent-green"> {/* Title styling */}
        My Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filterCategories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedFilter(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-primary-dark
              ${selectedFilter === category
                ? 'bg-accent-green text-primary-dark font-semibold shadow-md focus:ring-accent-green' // Active filter
                : 'bg-secondary-light dark:bg-secondary-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-300 dark:hover:bg-primary-dark hover:text-text-primary-dark focus:ring-accent-green' // Inactive
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <p className="text-center text-xl text-gray-600 dark:text-gray-400">
          No projects found for the selected filter.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.title}
              className="bg-primary-light dark:bg-secondary-dark rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl dark:border dark:border-gray-700"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-text-primary-light dark:text-text-primary-dark"> {/* Made responsive and bold */}
                  {project.icon && <span className="mr-2">{project.icon}</span>}
                  {project.title}
                </h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto pt-4">
                  <p className="text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark opacity-75 mb-2 uppercase tracking-wider">Categories:</p> {/* Added opacity to label */}
                  <div className="flex flex-wrap gap-2">
                    {project.category.map(cat => (
                      <span key={cat} className="bg-accent-blue/20 dark:bg-accent-blue/10 text-accent-blue dark:text-accent-blue px-2.5 py-1 text-xs font-semibold rounded-full shadow-sm"> {/* Using accent-blue for category tags */}
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;
