import React from 'react';

const awardsData = [
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

const AwardsPage = () => {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto"> {/* Inherits bg-primary-dark */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center text-accent-blue dark:text-accent-blue pb-4 mb-12 border-b-2 border-accent-green"> {/* Title styling */}
        Awards & Achievements
      </h2>

      <div className="bg-primary-light dark:bg-secondary-dark shadow-xl rounded-lg p-6 md:p-8"> {/* Card background */}
        <ul className="divide-y divide-secondary-light dark:divide-gray-700"> {/* Adjusted divider for light mode */}
          {awardsData.map((award, index) => (
            <li
              key={index}
              className="text-lg text-text-secondary-light dark:text-text-secondary-dark flex items-start py-4 first:pt-0 last:pb-0"
            >
              <span className="mr-4 text-xl text-yellow-500 transform scale-110 flex-shrink-0">{getEmoji(award)}</span> {/* Emoji color kept */}
              <span className="leading-relaxed">{removeEmoji(award)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// Helper function to extract emoji from the start of the string
const getEmoji = (text) => {
  const match = text.match(/^(\p{Emoji_Presentation}|\p{Emoji_Modifier_Base}|\p{Emoji_Component}|[⭐🏆🥇🥈🥉🏅🎓🏊‍♂️🥏🧠📜])\s*/u);
  return match ? match[1] : '🏅'; // Default emoji if none found
};

// Helper function to remove emoji from the start of the string for cleaner text display
const removeEmoji = (text) => {
  return text.replace(/^(\p{Emoji_Presentation}|\p{Emoji_Modifier_Base}|\p{Emoji_Component}|[⭐🏆🥇🥈🥉🏅🎓🏊‍♂️🥏🧠📜])\s*/u, '');
};

export default AwardsPage;
