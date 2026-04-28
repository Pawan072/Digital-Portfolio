import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className='bg-[#030712] text-gray-300 py-20 px-6 md:px-12 overflow-hidden'>
      <div className="max-w-6xl mx-auto space-y-24">
        
        <motion.div {...fadeIn} className="grid md:grid-cols-3 gap-8 items-start">
          <h2 className="text-4xl font-bold text-white md:sticky md:top-24">
            01. <span className="text-blue-500 text-2xl block mt-2">The Summary</span>
          </h2>
          <div className="md:col-span-2 space-y-6 text-lg leading-relaxed">
            <p>
              I am a <span className="text-white font-semibold">Full Stack Web Developer</span> with a deep passion for building scalable, 
              user-centric web applications. My journey started with a simple curiosity about how the web works, 
              which evolved into a professional mastery of the MERN stack.
            </p>
            <p>
              I specialize in creating seamless digital experiences, blending robust backend logic 
              with interactive frontends using <span className="text-blue-400">Tailwind CSS</span> and <span className="text-purple-400">Framer Motion</span>. 
              For me, coding is about crafting maintainable systems that solve real-world problems.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <h2 className="text-4xl font-bold text-white md:sticky md:top-24">
            02. <span className="text-blue-500 text-2xl block mt-2">My Focus</span>
          </h2>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {[
              { title: "Full Stack Mastery", desc: "Building end-to-end applications with solid database architecture and intuitive UI.", icon: "🚀" },
              { title: "Performance & Design", desc: "Leveraging Vite and React for lightning-fast speed and a polished, professional feel.", icon: "⚡" },
            //   { title: "Modern DevOps", desc: "Managing environments with Docker and WSL 2 to ensure smooth deployment workflows.", icon: "🐳" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -7 }}
                className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-colors"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="grid md:grid-cols-3 gap-8">
          <h2 className="text-4xl font-bold text-white md:sticky md:top-24">
            03. <span className="text-blue-500 text-2xl block mt-2">Impact</span>
          </h2>
          <div className="md:col-span-2 bg-linear-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800">
            <p className="italic text-xl text-gray-200">
              "Working on projects like <span className="text-blue-400">Voyanza, NVBC</span> and collaborating with international clients 
              has sharpened my ability to deliver production-ready code. My internship taught me the importance 
              of meeting deadlines and writing code that scales within professional teams."
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 pt-10">
          <motion.div {...fadeIn} className="space-y-6">
            <h3 className="text-2xl font-bold text-white">4. The "Why"</h3>
            <p className="leading-relaxed">
              When I’m not debugging on my <span className="text-white font-mono">Machine</span>, 
              I’m exploring system architectures. I believe in 'learning by doing'—every project 
              is a new opportunity to push my boundaries.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="bg-blue-600/10 p-8 rounded-2xl border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">5. Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span><span className="text-white font-semibold">Goal:</span> SDE-1 Role</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span><span className="text-white font-semibold">Motto:</span> If it’s not responsive, it’s not finished.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span><span className="text-white font-semibold">Stack:</span> MERN + SQL, PostgreSQL</span>
              </li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;