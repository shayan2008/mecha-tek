import { useState } from 'react';
import profile from './assets/profile-placeholder.png';
import fira from './assets/Fira_ cup.jpg';
import swimming from './assets/Swimming.jpg';
import lineFollower from './assets/Line following robot.jpg';
import medport from './assets/Medport _ SienceFair.jpg';
import robocup from './assets/Robocup_ invation.jpg';
import ceta from './assets/CETA_Robotics Competition.jpg';
import teleSwitch from './assets/tele_switch.jpg';

const gallery = [
  { src: robocup, caption: 'Team working on rescue simulation robot' },
  { src: swimming, caption: 'Competing in 200m Backstroke - OFSAA' },
  { src: fira, caption: 'Gold medal at FIRA Robotics Canada' },
  { src: medport, caption: 'Smart pill dispenser demo at Science Fair' },
  { src: teleSwitch, caption: 'IoT switch circuit prototyping' },
  { src: lineFollower, caption: 'Testing underwater stroke AI model' },
  { src: ceta, caption: 'CETA Robotics Competition' },
];

const projects = [
  { title: 'SwimStroke AI', desc: 'AI-based feedback tool for competitive swimmers. Uses computer vision to analyze stroke efficiency and breathing technique.', icon: '🧠', img: lineFollower },
  { title: 'Autonomous Car', desc: 'Line-following vehicle with obstacle avoidance and autonomous navigation logic.', icon: '🚗', img: fira },
  { title: 'DRC Explorer Robot', desc: 'Winner of FIRA Robocup; includes mapping, terrain navigation, and sensor fusion.', icon: '🤖', img: robocup },
  { title: 'MedPort', desc: 'Smart pill dispenser with scheduling, alerts, and remote tracking – Silver Medal winner at the Toronto Science Fair.', icon: '💊', img: medport },
  { title: 'Rescue Simulation (Robocup USA)', desc: 'Led AI optimization & logic for simulation and super team challenge – 1st & 2nd place internationally.', icon: '🛰️', img: robocup },
  { title: 'TeleSwitch', desc: 'Wi-Fi & SMS-controlled home automation switch. 3rd Place, Mossito Innovation League.', icon: '🔒', img: teleSwitch },
  { title: 'QuantBot', desc: 'Python-based trading simulator leveraging basic ML for signal generation.', icon: '📊', img: profile },
  { title: 'Solar Tracker', desc: 'Dual-axis motor-controlled solar panel that follows the sun to maximize efficiency.', icon: '☀️', img: ceta },
];

const awards = [
  '🥇 2× 1st Place, FIRA Robocup Canada (Captain)',
  '🥇 1st & 2nd Place, RoboCup USA (Simulation & Super Team Challenges)',
  '🥈 3rd Place, CETA Robotics IoT Challenge',
  '🥉 3rd Place, MOSSITO Robocup Innovation League (TeleSwitch)',
  '🥈 Silver Medal, Toronto Science Fair (MedPort)',
  '🎓 SHAD Canada 2025 (Accepted, couldn\'t attend due to Brazil schedule)',
  '🌍 Qualified: RoboCup Junior International Brazil 2025 + FIRA World Korea 2025',
  '🥇 1st Place, North Region 4×100 Freestyle Relay',
  '🥉 3rd in 200m Backstroke, Division 1',
  '🥏 1st Place, Ultimate Frisbee (North Region Tier 1)',
  '🥇 Undefeated, Jim Mason OFSAA Squash Cup',
  '🧠 Top 20%, OAPT Physics Contest',
];

const leadership = [
  {
    title: 'Captain, Kavosh Robotics Senior Team',
    org: 'Kavosh Robotics',
    date: '08/2024 – Present',
    desc: 'Led autonomous system design, AI logic, and strategy for FIRA & RoboCup teams. 2× FIRA wins, RoboCup international finalist.',
  },
  {
    title: 'Captain, Earl Haig Swim Team',
    org: 'Earl Haig SS',
    date: '08/2024 – Present',
    desc: 'Directed training plans, guided athletes, and led team through OFSAA competition.',
  },
  {
    title: 'President, Robotics Club',
    org: 'Earl Haig SS',
    date: '08/2023 – Present',
    desc: 'Led end-to-end design cycles in CAD, electronics, and embedded systems. Directed peers, earned 3rd at CETA Robotics IoT Challenge. Club president this year and next year.',
  },
];

const certifications = [
  '🧠 Mechatronics Course Certificate (100+ Hours)',
  '🧠 Altium Designer PCB & STM32 Programming',
  '📈 Google Digital Marketing Certificate',
  '🏊‍♂️ Lifeguard, Swim Instructor, Lifesaving Instructor',
  '⛑️ First Aid & CPR-C Certified',
];

const skills = [
  'Robotics (Design, CAD, Systems Integration)',
  'AI & Machine Learning Applications',
  'Embedded Systems (STM32, Arduino, etc.)',
  'Mechatronics & Electronics',
  'Leadership & Team Management',
  'Competitive Swimming & Athletics',
];

const contacts = [
  { label: 'Email', value: 'shayan@mecha-tek.com', link: 'mailto:shayan@mecha-tek.com' },
  { label: 'GitHub', value: 'github.com/shayanD', link: 'https://github.com/shayanD' },
  { label: 'LinkedIn', value: 'linkedin.com/in/shayanD', link: 'https://linkedin.com/in/shayanD' },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-3">
          <img src={profile} alt="Profile" className="w-12 h-12 rounded-full border-2 border-blue-600" />
          <span className="font-bold text-xl">Shayan Doroudiani</span>
        </div>
        <div className="flex gap-6 text-lg">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#awards" className="hover:text-blue-600">Awards</a>
          <a href="#leadership" className="hover:text-blue-600">Leadership</a>
          <a href="#gallery" className="hover:text-blue-600">Gallery</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
        <button onClick={() => setDark(d => !d)} className="ml-4 text-2xl" aria-label="Toggle dark mode">{dark ? '🌞' : '🌙'}</button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-[60vh] text-center py-20 px-4 bg-gradient-to-b from-blue-50 dark:from-gray-800 to-transparent">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hi, I'm <span className="text-blue-700 dark:text-blue-400">Shayan Doroudiani</span></h1>
        <h2 className="text-xl md:text-2xl font-medium mb-6">Robotics engineer. Competitive swimmer. Team leader.</h2>
        <p className="max-w-2xl mb-8 text-lg text-gray-700 dark:text-gray-300">Passionate about designing, building, and solving — from autonomous robots to embedded AI.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="px-6 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">🎯 Explore My Projects</a>
          <a href="#resume" className="px-6 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition">📄 View My Resume</a>
          <a href="#contact" className="px-6 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">📬 Contact Me</a>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img src={profile} alt="Profile" className="w-40 h-40 rounded-full shadow-lg border-4 border-blue-600" />
          <div>
            <p className="mb-4 text-lg">I'm a high school STEM student based in Toronto, Canada, specializing in robotics, embedded systems, AI integration, and leadership. I've led multiple award-winning teams in international competitions, including FIRA and RoboCup, and contributed to innovations in healthcare, automation, and rescue robotics. Alongside engineering, I compete at a regional level in swimming and bring discipline, teamwork, and endurance into all aspects of my work.</p>
            <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Skills & Interests:</h3>
            <ul className="flex flex-wrap gap-3">
              {skills.map(skill => <li key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">{skill}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(p => (
            <div key={p.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={p.img} alt={p.title} className="w-32 h-32 object-cover rounded mb-4 border-2 border-blue-400" />
              <h4 className="text-xl font-bold mb-2">{p.icon} {p.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 text-center">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Awards Section */}
      <Section id="awards" title="Awards & Achievements">
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6">
          {awards.map(a => <li key={a} className="text-lg">{a}</li>)}
        </ul>
      </Section>

      {/* Leadership Section */}
      <Section id="leadership" title="Leadership & Extracurriculars">
        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map(l => (
            <div key={l.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h4 className="text-xl font-bold mb-1">{l.title}</h4>
              <div className="text-blue-700 dark:text-blue-400 font-semibold mb-1">{l.org}</div>
              <div className="text-sm text-gray-500 mb-2">{l.date}</div>
              <p>{l.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications" title="Certifications">
        <ul className="flex flex-wrap gap-4">
          {certifications.map(c => <li key={c} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium">{c}</li>)}
        </ul>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery" title="Media Gallery">
        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((g, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800">
              <img src={g.src} alt={g.caption} className="w-full h-48 object-cover" />
              <div className="p-3 text-center text-gray-800 dark:text-gray-200">{g.caption}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <ul className="mb-4 space-y-2">
              {contacts.map(c => (
                <li key={c.label}>
                  <span className="font-semibold">{c.label}:</span> <a href={c.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{c.value}</a>
                </li>
              ))}
            </ul>
            <a href="/resume.pdf" download className="inline-block px-6 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Download Resume (PDF)</a>
          </div>
          <form name="contact" method="POST" data-netlify="true" className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <input type="hidden" name="form-name" value="contact" />
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Name</label>
              <input name="name" required className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Email</label>
              <input name="email" type="email" required className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Message</label>
              <textarea name="message" required className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" rows={4}></textarea>
            </div>
            <button type="submit" className="px-6 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">Send</button>
          </form>
        </div>
      </Section>

      {/* Resume Section (anchor only) */}
      <div id="resume" className="h-1"></div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Shayan Doroudiani. All rights reserved.
      </footer>
    </div>
  );
} 