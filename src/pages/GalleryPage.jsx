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
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-700 dark:text-blue-400">
        Gallery
      </h2>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {uniqueTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900
              ${selectedTag === tag
                ? 'bg-blue-600 text-white shadow-md focus:ring-blue-400'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-blue-500'
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
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-64 object-cover" // Increased height for better visuals
              />
              <div className="p-6"> {/* Standardized padding */}
                <p className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.caption}
                </p>
                <div className="mt-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-1">
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
