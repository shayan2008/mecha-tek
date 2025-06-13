import React from 'react';

const awardsData = [ // Assuming this data is still relevant and manually ordered for now
  '🏆 2× 1st Place, FIRA Robocup Canada (Team Captain)',
  '🥇 1st Place, Robocup USA Open - Simulation League (Team Captain)',
  '🥈 2nd Place, Robocup USA Open - SuperTeam Challenge (Team Captain)',
  '🥉 3rd Place, CETA Robotics IoT Challenge (Club President)',
  '🥉 3rd Place, MOSSITO Robocup Innovation League (TeleSwitch Project)',
  '🥈 Silver Medal, Toronto Science Fair (MedPort Project)',
  '🏅 Qualified: RoboCup Junior International Brazil 2025 (Team Captain)',
  '🏅 Qualified: FIRA RoboWorld Cup Korea 2025 (Team Captain)',
  '🎓 SHAD Canada Program Invitee 2025 (Declined due to intl. competition schedule)',
  '🏊‍♂️ 1st Place, OFSAA North Region - 4x100 Freestyle Relay',
  '🏊‍♂️ 3rd Place, OFSAA North Region - 200m Backstroke (Division 1)',
  '🥏 1st Place, OFSAA North Region - Ultimate Frisbee (Tier 1)',
  '🥇 Undefeated Season, Jim Mason OFSAA Squash Cup (Team Member)',
  '🧠 Top 20% Scorer, OAPT Grade 11 Physics Contest (Provincial)',
  '📜 Honour Roll - Consistently (90%+ Average)',
];

// Helper function to extract emoji from the start of the string
const getEmoji = (text) => {
  const match = text.match(/^(\p{Emoji_Presentation}|\p{Emoji_Modifier_Base}|\p{Emoji_Component}|[⭐🏆🥇🥈🥉🏅🎓🏊‍♂️🥏🧠📜])\s*/u);
  return match ? match[1] : '🏅'; // Default emoji if none found
};

// Helper function to remove emoji from the start of the string for cleaner text display
const removeEmoji = (text) => {
  return text.replace(/^(\p{Emoji_Presentation}|\p{Emoji_Modifier_Base}|\p{Emoji_Component}|[⭐🏆🥇🥈🥉🏅🎓🏊‍♂️🥏🧠📜])\s*/u, '').trim();
};


const AwardsPage = () => {
  return (
    <section id="awards-competitions" className="bg-black-jet text-text-light-primary py-16 sm:py-20 lg:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto"> {/* Increased max-width slightly for better spacing if needed */}
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-electric text-center pb-4 mb-12 sm:mb-16 border-b-2 border-green-neon">
          Awards & Competitions
        </h2>

        <ul className="space-y-4 sm:space-y-6">
          {/* TODO: Consider wrapping this ul with <motion.ul variants={staggerContainerVariants}> if animating list items. */}
          {awardsData.map((award, index) => (
            // TODO: Wrap this li with <motion.li variants={listItemVariants} key={index} custom={index}> for staggered entrance.
            <li
              key={index}
              className="bg-dark-card p-4 sm:p-6 rounded-xl shadow-lg flex items-start transition-all duration-300 hover:shadow-green-neon/20 hover:scale-[1.02] dark:border dark:border-gray-700"
            >
              <span className="text-3xl mr-4 text-green-neon flex-shrink-0 pt-1">{getEmoji(award)}</span>
              <span className="text-text-light-secondary text-base sm:text-lg leading-relaxed">{removeEmoji(award)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AwardsPage;
