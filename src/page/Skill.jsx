import React from 'react';
import { motion } from 'framer-motion';

const Skill = () => {
  const skillData = [
    {
      title: "Frontend Development",
      skills: [
        { label: "Core", value: "HTML5, CSS3, JavaScript (ES6+)" },
        { label: "Frameworks", value: "React.js, Vite" },
        { label: "Styling", value: "Tailwind CSS, Bootstrap" },
        { label: "Animations", value: "Framer Motion, Animate On Scroll" },
        { label: "State", value: "Redux Toolkit, Context API" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { label: "Runtime", value: "Node.js, Express.js" },
        { label: "Auth", value: "JWT, Firebase Auth" },
        { label: "Tools", value: "Postman, Nodemon" },
      ]
    },
    {
      title: "Database Management",
      skills: [
        { label: "NoSQL", value: "MongoDB" },
        { label: "SQL", value: "MySQL, PostgreSQL" },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { label: "Version Control", value: "Git & GitHub" },
        { label: "Container", value: "Docker (WSL 2)" },
        { label: "Deployment", value: "Vercel, Netlify, Render" },
        { label: "Managers", value: "NPM, Yarn" },
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { label: "Logic", value: "Problem-Solving (DSA)" },
        { label: "Flow", value: "Project Management" },
        { label: "Work", value: "Team Collaboration" },
      ]
    }
  ];

  return (
    <section className="bg-[#030712] text-gray-300 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block">
            Technical Skills
          </h2>
          <p className="text-gray-500 mt-2 text-lg">Tools and technologies I have worked with.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-[#0f172a] border border-gray-800 p-6 rounded-2xl shadow-xl hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-800 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-sm">
                    <span className="text-blue-400 font-medium">{skill.label}:</span> 
                    <span className="ml-2 text-gray-400">{skill.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;