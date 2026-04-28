import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Assest
import heroIMG from '../assets/AboutImg/AI2.jpg';
import demo from '../assets/AboutImg/Major Project.mp4';
import NVBC from '../assets/AboutImg/AI4.jpg';
import NVBCVideo from '../assets/AboutImg/NVBC Project.mp4';

function Projects(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNvbcOpen, setIsNvbcOpen] = useState(false);

  const stacks = [
    { title: "Frontend", tools: ["React.js", "Tailwind CSS"], color: "from-blue-500" },
    { title: "Backend", tools: ["Node.js", "Express.js"], color: "from-green-500" },
    { title: "Database", tools: ["MongoDB", "Cloudinary"], color: "from-emerald-500" },
    { title: "Deployment", tools: ["Render", "Vercel"], color: "from-purple-500" }
  ];
  
  // styling  animations tokens

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const containerRefN = useRef(null);
  const { scrollYProgress: scrollYProgressN } = useScroll({
    target: containerRefN,
    offset: ["start start", "end start"]
  });
  const backgroundYN = useTransform(scrollYProgressN, [0, 1], ["0%", "30%"]);
  const opacityN = useTransform(scrollYProgressN, [0, 0.8], [1, 0]);
  const scaleN = useTransform(scrollYProgressN, [0, 0.8], [1, 0.9]);


  const containerVariantsN = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Ek ke baad ek aayenge
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return(
    <>
      {/* Voyanza || A full stack Palteform */}
      <section 
        ref={containerRef}
        className="relative min-h-[100dvh] w-full flex items-center justify-center md:justify-start overflow-hidden"
      >
        <motion.img 
          style={{ y: backgroundY }}
          className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none" 
          src={heroIMG} 
          alt="Voyanza Background"
        />

        <div className="absolute inset-0 bg-black/60 z-10" />

        <motion.div 
          style={{ opacity, scale }}
          className="relative z-30 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full text-center md:text-left"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                <span className='bg-linear-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent'>
                  Voyanza: A FullStack Platform
                </span> 
              </h1>

              <div className="text-xl sm:text-3xl font-medium text-slate-200 min-h-[3.5rem] md:min-h-[2.5rem]">
                <Typewriter
                  options={{
                    strings: [
                      'Hi, This is Voyanza Made by Pawan.',
                      'Allowing users to list and rent private properties.',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                    wrapperClassName: "text-blue-400 font-semibold",
                    cursorClassName: "text-white opacity-80"
                  }}
                />
              </div>
                
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-12">
                <a 
                  href='https://voyanza.onrender.com/listings' 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all active:scale-95 shadow-xl text-center"
                >
                  Live Demo
                </a>
                <button 
                  className='w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 rounded-full font-bold text-lg transition-all active:scale-95 backdrop-blur-md'
                  onClick={() => setIsModalOpen(true)}
                >
                  Watch Demo
                </button>
              </div>
            </motion.div>  
          </div>
        </motion.div>

        {/* Animated Modal with AnimatePresence */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-6"
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative w-full max-w-5xl aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-3 right-3 sm:top-5 sm:right-5 z-[110] bg-black/60 p-2 rounded-full text-white hover:text-red-500 transition-all hover:bg-white/10"
                >
                  <X size={28} /> 
                </button>

                <video 
                  src={demo} 
                  controls 
                  autoPlay
                  muted 
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      {/* tech stack */}
      <section className='bg-[#030712] text-white py-24 px-6 md:px-12'>
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className='text-4xl md:text-6xl font-extrabold mb-4 bg-linear-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent inline-block'>
              Tech Stack
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl mb-12 flex flex-col md:flex-row items-center justify-center gap-6 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className='text-3xl font-bold text-blue-400 z-10'>The Core:</h3>
            <p className='text-2xl md:text-3xl font-bold tracking-tight z-10'>
              MERN Stack 
              <span className="text-slate-400 text-xl block md:inline md:ml-3 font-normal opacity-80">
                (MongoDB, Express, React, Node)
              </span>
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
          >
            {stacks.map((stack, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="relative bg-slate-900/40 border border-white/5 p-8 rounded-2xl hover:border-blue-500/40 transition-all duration-300 group overflow-hidden"
              >
                <div className={`absolute -top-24 -right-24 h-48 w-48 bg-linear-to-br ${stack.color} to-transparent opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity`}></div>

                <h3 className='text-xl font-bold mb-4 border-b border-white/10 pb-3 group-hover:text-blue-400 transition-colors'>
                  {stack.title}
                </h3>
                <div className='space-y-2'>
                  {stack.tools.map((tool, i) => (
                    <p key={i} className='text-slate-400 text-lg font-medium group-hover:text-slate-200 transition-colors'>
                      {tool}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className='mt-20 text-center'
          >
            <a 
              href="https://github.com/Pawan072/Voyanza" 
              target="_blank"
              rel="noopener noreferrer"
              className='relative inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-95'
            >
              <span>Explore Source Code</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
      {/* Northern virginia brittany club */}
      <section 
        ref={containerRefN}
        className="relative min-h-[100dvh] w-full flex items-center justify-center md:justify-start overflow-hidden"
      >
        <motion.img 
          style={{ y: backgroundYN }}
          className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none" 
          src={NVBC} 
          alt="NVBC - Project Background"
        />
        
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent z-10"/>

        <motion.div 
          style={{ opacityN, scaleN }}
          className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20"
        >
          <div className="w-full text-center md:text-left text-white">
            <div className='flex flex-col md:flex-row items-center justify-between gap-8 w-full'>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1"
              >
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                  <span className='bg-linear-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent'>
                    Northern Virginia Brittany Club
                  </span> 
                </h1>

                <div className="text-lg sm:text-2xl md:text-3xl font-medium text-slate-200 min-h-[4rem] sm:min-h-[3rem]">
                  <Typewriter
                    options={{
                      strings: [
                        'Hi, This is NVBC Made by </Pawan.dev>',
                        'Improved navigation and UX across devices.',
                        'Building Scalable Web Applications.'
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                      wrapperClassName: "text-blue-400 font-semibold",
                      cursorClassName: "text-white opacity-80"
                    }}
                  />
                </div>
                  
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-10">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href='https://nvbcus.netlify.app/' 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3.5 rounded-full font-bold text-lg transition-all shadow-[0_10px_20px_rgba(37,99,235,0.3)] text-center"
                  >
                    Live Demo
                  </motion.a>
                  <motion.button 
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className='border-2 border-white/50 text-white px-10 py-3.5 rounded-full font-bold text-lg transition-all backdrop-blur-sm'
                    onClick={() => setIsNvbcOpen(true)}
                  >
                    Watch Demo
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
                  
        {/* Video Modal with AnimatePresence */}
        <AnimatePresence>
          {isNvbcOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-6"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-5xl aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <button 
                  onClick={() => setIsNvbcOpen(false)}
                  className="absolute top-3 right-3 sm:top-5 sm:right-5 z-[110] bg-black/60 p-2 rounded-full text-white hover:text-red-500 transition-all"
                >
                  <X size={28} /> 
                </button>

                <video 
                  src={NVBCVideo} 
                  controls 
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      {/* teck stack */}
      <section className='bg-[#030712] text-white py-24 px-6 md:px-12 overflow-hidden'>
        <motion.div 
          variants={containerVariantsN}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className='text-4xl md:text-6xl font-extrabold mb-4 bg-linear-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent inline-block'>
              Tech Stack
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <motion.div 
              variants={itemVariants}
              className="lg:col-span-3 bg-slate-900/30 border border-slate-800/60 p-10 rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-600/10 blur-3xl rounded-full transition-opacity group-hover:opacity-100 opacity-50"></div>

              <h3 className='text-2xl font-semibold mb-4 text-blue-400'>Project Foundation</h3>
              <p className='text-xl md:text-2xl text-slate-300 leading-relaxed font-light'>
                Built using <span className="text-white font-bold decoration-blue-500/50 underline underline-offset-4">React.js</span> and <span className="text-white font-bold decoration-indigo-500/50 underline underline-offset-4">Tailwind CSS</span>, focused on high performance and a seamless user experience.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-slate-900/50 border border-slate-800/60 p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-300 group shadow-xl"
            >
              <div className="mb-6 p-3 bg-blue-600/10 w-fit rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className='text-2xl font-bold mb-4 group-hover:text-blue-400'>Frontend</h3>
              <ul className='text-slate-400 space-y-3 text-lg'>
                {['React.js (Vite)', 'Tailwind CSS', 'Framer Motion'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-slate-900/50 border border-slate-800/60 p-8 rounded-3xl hover:border-indigo-500/50 transition-all duration-300 group shadow-xl"
            >
              <div className="mb-6 p-3 bg-indigo-600/10 w-fit rounded-2xl text-indigo-500 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className='text-2xl font-bold mb-4 group-hover:text-indigo-400'>Deployment</h3>
              <p className='text-slate-400 text-lg leading-relaxed'>
                Hosted on <span className="text-white font-semibold">Netlify</span> with CI/CD for instant, automated updates.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-linear-to-br from-blue-600/20 to-indigo-600/10 border border-blue-500/30 p-8 rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 blur-2xl rounded-full"></div>
              <h3 className='text-xl font-bold mb-6 relative z-10'>Open Source Code</h3>
              <a 
                href="https://github.com/Pawan072/NVBC-USA--main" 
                target="_blank"
                rel="noopener noreferrer"
                className='w-full bg-white text-black hover:bg-blue-50 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 relative z-10 shadow-lg active:scale-95'
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub Repository
              </a>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </>
  )
}
export default Projects;