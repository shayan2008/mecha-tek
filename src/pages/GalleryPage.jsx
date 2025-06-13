import React, { useState, useEffect } from 'react';

const galleryData = [
  {
    src: '/assets/images/gallery-robocup-brazil-qualifier.jpg',
    caption: 'RoboCup Brazil Qualifier - Rescue Simulation Team (2024)',
    tags: ['Robotics', 'Competition', 'AI', 'Simulation'],
  },
  {
    src: '/assets/images/gallery-fira-korea-drc-explorer.jpg',
    caption: 'FIRA RoboWorld Cup Korea - DRC Explorer Robot (2024)',
    tags: ['Robotics', 'Competition', 'International'],
  },
  {
    src: '/assets/images/gallery-toronto-science-fair-medport.jpg',
    caption: 'Toronto Science Fair - MedPort Project Display (2023)',
    tags: ['Innovation', 'Healthcare', 'Embedded Systems'],
  },
  {
    src: '/assets/images/gallery-ceta-robotics-iot-challenge.jpg',
    caption: 'CETA Robotics Competition - IoT Challenge (2023)',
    tags: ['Robotics', 'IoT', 'Competition'],
  },
  {
    src: '/assets/images/gallery-autonomous-line-follower-prototype.jpg',
    caption: 'Autonomous Line Following Robot - Early Prototype (2022)',
    tags: ['Robotics', 'Embedded Systems', 'Development'],
  },
  {
    src: '/assets/images/gallery-ofsaa-regional-swim-meet.jpg',
    caption: 'OFSAA Regional Swim Meet - 200m Backstroke (2024)',
    tags: ['Sports', 'Swimming', 'Personal'],
  },
  {
    src: '/assets/images/gallery-teleswitch-iot-project.jpg',
    caption: 'TeleSwitch - IoT Remote Control Project (2023)',
    tags: ['IoT', 'Embedded Systems', 'Software'],
  },
  // Add more gallery items as needed
];

const GalleryPage = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [filteredItems, setFilteredItems] = useState(galleryData);
  const [uniqueTags, setUniqueTags] = useState(['All']);

  useEffect(() => {
    // Extract all unique tags from galleryData
    const tags = new Set();
    galleryData.forEach(item => {
      item.tags.forEach(tag => tags.add(tag));
    });
    setUniqueTags(['All', ...Array.from(tags).sort()]);
  }, []);

  useEffect(() => {
    if (selectedTag === 'All') {
      setFilteredItems(galleryData);
    } else {
      setFilteredItems(
        galleryData.filter(item => item.tags.includes(selectedTag))
      );
    }
  }, [selectedTag]);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto"> {/* Inherits bg-primary-dark */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center text-accent-blue dark:text-accent-blue pb-4 mb-12 border-b-2 border-accent-green"> {/* Title styling */}
        Gallery
      </h2>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {uniqueTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-primary-dark
              ${selectedTag === tag
                ? 'bg-accent-green text-primary-dark font-semibold shadow-md focus:ring-accent-green' // Active filter
                : 'bg-secondary-light dark:bg-secondary-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-300 dark:hover:bg-primary-dark hover:text-text-primary-dark focus:ring-accent-green' // Inactive
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
         <p className="text-center text-xl text-gray-600 dark:text-gray-400">
          No items match the selected filter. Try another category!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-primary-light dark:bg-secondary-dark rounded-xl shadow-lg overflow-hidden group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl dark:border dark:border-gray-700"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-64 object-cover" // Increased height for better visuals
              />
              <div className="p-6"> {/* Standardized padding */}
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark group-hover:text-accent-blue dark:group-hover:text-accent-blue transition-colors">
                  {item.caption}
                </p>
                <div className="mt-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="inline-block bg-accent-green/20 dark:bg-accent-green/10 text-accent-green dark:text-accent-green px-2 py-1 text-xs font-semibold rounded-full mr-2 mb-1 shadow-sm"> {/* Using accent-green for tags */}
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default GalleryPage;
