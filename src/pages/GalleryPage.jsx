import React, { useState, useEffect } from 'react';

// Sample Gallery Data (ensure image paths are correct for public/assets/images/)
const initialGalleryData = [
  {
    id: 'gallery-robocup-brazil',
    src: '/assets/images/gallery-robocup-brazil-qualifier.jpg',
    caption: 'RoboCup Brazil Qualifier - Rescue Simulation Team (2024)',
    tags: ['Robotics', 'Competition', 'AI', 'Simulation'],
  },
  {
    id: 'gallery-fira-korea',
    src: '/assets/images/gallery-fira-korea-drc-explorer.jpg',
    caption: 'FIRA RoboWorld Cup Korea - DRC Explorer Robot (2024)',
    tags: ['Robotics', 'Competition', 'International'],
  },
  {
    id: 'gallery-science-fair',
    src: '/assets/images/gallery-toronto-science-fair-medport.jpg',
    caption: 'Toronto Science Fair - MedPort Project Display (2023)',
    tags: ['Innovation', 'Healthcare', 'Embedded'],
  },
  {
    id: 'gallery-ceta-iot',
    src: '/assets/images/gallery-ceta-robotics-iot-challenge.jpg',
    caption: 'CETA Robotics Competition - IoT Challenge (2023)',
    tags: ['Robotics', 'IoT', 'Competition'],
  },
  {
    id: 'gallery-line-follower',
    src: '/assets/images/gallery-autonomous-line-follower-prototype.jpg',
    caption: 'Autonomous Line Following Robot - Early Prototype (2022)',
    tags: ['Robotics', 'Embedded', 'Development'],
  },
  {
    id: 'gallery-swim-meet',
    src: '/assets/images/gallery-ofsaa-regional-swim-meet.jpg',
    caption: 'OFSAA Regional Swim Meet - 200m Backstroke (2024)',
    tags: ['Sports', 'Swimming', 'Personal'],
  },
  {
    id: 'gallery-teleswitch',
    src: '/assets/images/gallery-teleswitch-iot-project.jpg',
    caption: 'TeleSwitch - IoT Remote Control Project (2023)',
    tags: ['IoT', 'Embedded', 'Software'],
  },
];

const GalleryPage = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [filteredItems, setFilteredItems] = useState(initialGalleryData);
  const [uniqueTags, setUniqueTags] = useState(['All']);

  useEffect(() => {
    const tags = new Set();
    initialGalleryData.forEach(item => {
      item.tags.forEach(tag => tags.add(tag));
    });
    setUniqueTags(['All', ...Array.from(tags).sort()]);
  }, []);

  useEffect(() => {
    if (selectedTag === 'All') {
      setFilteredItems(initialGalleryData);
    } else {
      setFilteredItems(
        initialGalleryData.filter(item => item.tags.includes(selectedTag))
      );
    }
  }, [selectedTag, initialGalleryData]); // Added initialGalleryData to dependency array

  return (
    <section id="gallery-page" className="bg-black-jet text-text-light-primary py-16 sm:py-20 lg:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-electric text-center pb-4 mb-12 sm:mb-16 border-b-2 border-green-neon">
          Gallery
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {uniqueTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-black-jet transform hover:scale-105
                ${selectedTag === tag
                  ? 'bg-green-neon text-black-jet focus:ring-green-neon' // Active
                  : 'bg-dark-card text-text-light-secondary hover:bg-blue-electric hover:text-white focus:ring-blue-electric' // Inactive
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          // TODO: Consider wrapping this grid div with <motion.div variants={staggerContainerVariants}> for staggered card appearance.
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredItems.map((item, index) => ( // Added index for custom prop
              // TODO: Wrap this card div with <motion.div variants={cardItemVariants} key={item.id} custom={index}>.
              <div
                key={item.id}
                className="bg-dark-card rounded-xl shadow-lg overflow-hidden group relative transition-all duration-300 ease-in-out hover:shadow-blue-electric/30 hover:scale-[1.03] dark:border dark:border-gray-700" // Changed to rounded-xl
              >
                {/* TODO: Implement Lightbox functionality on image click */}
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-60 object-cover cursor-pointer" // Added cursor-pointer for lightbox hint
                />
                <div className="absolute inset-0 bg-black-jet bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-text-light-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.caption}
                  </h3>
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      {item.tags.map(tag => (
                        <span key={tag} className="inline-block bg-green-neon/20 text-green-neon text-xs px-2 py-0.5 rounded-full mr-1 mb-1">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
           <p className="text-center text-text-light-secondary text-xl">No gallery items found for "{selectedTag}". Try another category!</p>
        )}
      </div>
    </section>
  );
};

export default GalleryPage;
