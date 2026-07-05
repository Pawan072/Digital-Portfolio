import { Link } from 'react-router-dom';
import {React, useEffect, useRef} from 'react';
import Typewriter from 'typewriter-effect';
import toast from 'react-hot-toast';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';

// Assest
import heroIMG from '../assets/HomeImg/Digital Transformation.jpg';
import img from '../assets/HomeImg/portfolio.jpeg';


function Home(){
  
  
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('welcomeShown');

    if (!hasVisited) {
      toast.success('Welcome To <Pawan.dev/> World!', {
        duration: 4000,
        icon: '🚀',
        style: {
          borderRadius: '10px',
          background: '#1e293b',
          color: '#f8fafc',     
          border: '1px solid #334155',
          padding: '16px',
        },
      });
      
      sessionStorage.setItem('welcomeShown', 'true');
    }
  }, []);

  const skillsData = [
    { title: "Tech Stack", content: ["MERN (MongoDB, Express.js, React.js, Node.js)"], highlight: true },
    { title: "Languages", content: ["Java", "JavaScript (ES6+)"] },
    { title: "Frontend", content: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Framer Motion"] },
    { title: "Backend", content: ["Node.js", "Express.js", "REST APIs"] },
    { title: "Database", content: ["MongoDB", "MySQL", "PostgreSQL"] },
    { title: "Tools & DevOps", content: ["Git/GitHub", "Docker", "WSL 2", "Vite"] }
  ];

  // animations releted styling 


  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);


  const projectVariants = {
    hidden: { opacity: 0, x: -70 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 100, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 100, damping: 15 });
  const rotateZ = useSpring(useTransform(x, [-100, 100], [-5, 5]), { stiffness: 80, damping: 12 });

  function handleMouseMove(event) {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const mouseX = event.clientX - rect.left - width / 2;
  const mouseY = event.clientY - rect.top - height / 2;
  
  x.set(mouseX);
  y.set(mouseY);
}

function handleMouseLeave() {
  // Cursor hatne par card wapas apni jagah shanti se ruk jayega
  x.set(0);
  y.set(0);
}

  return(
    <>
      {/* Hero section */}
      <section 
        ref={containerRef}
        className="relative min-h-screen w-full overflow-hidden"
      >
        <motion.img 
          style={{ y: backgroundY }}
          className="absolute h-full w-full object-cover object-center z-0" 
          src={heroIMG} 
          alt="Hero Background"
        />

        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <motion.div 
          style={{ opacity, scale }}
          className="relative z-20 h-full max-w-7xl mx-auto px-6 lg:px-12 py-20 flex items-center"
        >
          <div className="w-full text-white">
            <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full'>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 text-center md:text-left"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
                  <span className='bg-linear-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent'>
                    Welcome
                  </span> to my World
                </h1>

                <div className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-200 min-h-15 md:min-h-20">
                  <Typewriter
                    options={{
                      strings: [
                        'Hi, Myself Pawan Yadav.',
                        'I am a Full-stack Software Developer.',
                        'I build web applications.',
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 70,
                      deleteSpeed: 50,
                      wrapperClassName: "text-blue-400 font-semibold",
                      cursorClassName: "text-white opacity-80"
                    }}
                  />
                </div>
                  
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-10">
                  <Link 
                    to="/projects" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-lg transition duration-300 shadow-lg text-center"
                  >
                    View My Work
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border border-white/50 text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium text-lg transition duration-300 text-center"
                  >
                    Contact Me
                  </Link>
                </div>
              </motion.div>
                  
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='flex-1 flex justify-center md:justify-end w-full'
              >

                <div className="relative group max-w-60 sm:max-w-87.5 md:max-w-md">


                  <div className="mx-auto ml-auto w-[280px] sm:w-[320px] relative flex flex-col items-center pt-8">
    
                    {/* 1. Hanging String / Lanyard Clip */}
                    <div className="absolute top-0 w-1 h-10 bg-linear-to-b from-blue-500/50 to-blue-400 z-10 rounded-full" />
                    <div className="absolute top-8 w-4 h-4 bg-slate-700 border-2 border-white/20 rounded-full z-20 shadow-md" />

                    {/* 2. Framer Motion Animated Card Container */}
                    <motion.div 
                      className="w-full cursor-pointer relative z-10"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        rotateX: rotateX,
                        rotateY: rotateY,
                        rotateZ: rotateZ,
                        transformOrigin: "top center", // Crucial: Card upar se fix rahega aur niche se jhulega
                        transformStyle: "preserve-3d"
                      }}
                    >
                      {/* Aapka Shield Shape Wala Card */}
                      <div 
                        className="w-full h-[360px] overflow-hidden bg-slate-900/90 backdrop-blur-sm shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] border border-white/10"
                        style={{ 
                          clipPath: 'polygon(0 0, 100% 0, 100% 82%, 50% 100%, 0 82%)' 
                        }}
                      >
                        <img 
                          className="w-full h-full object-cover select-none pointer-events-none" 
                          src={img} 
                          alt="Pawan Yadav"
                        />
                      </div>
                    </motion.div>
                      
                    {/* Name & Title (Card ke bahar bottom me static) */}
                    <div className="text-center mt-6">
                      <h3 className="text-xl font-bold text-white tracking-wide">Pawan Yadav</h3>
                      <p className="text-xs text-blue-400 font-semibold tracking-widest uppercase mt-1">Full-Stack Developer</p>
                    </div>
                  </div>

                  {/* <div className="mt-4 text-center md:text-right">
                    <h2 className='text-slate-200 text-2xl font-bold'>
                      Pawan Yadav
                    </h2>
                    <p className="text-blue-400 font-medium text-sm tracking-[0.2em] uppercase mt-1">
                      Full-Stack Developer
                    </p>
                  </div> */}
                </div>
              </motion.div>
                  
            </div>
          </div>
        </motion.div>
      </section>
      {/* Project Section */}
      <section className='bg-[#030712] text-white py-16 px-6 md:px-12'>
        <div className='max-w-6xl mx-auto'>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.7 }} // Re-animates when scrolling up/down
            className='text-4xl md:text-5xl font-bold text-center mb-16'
          >
            Projects
          </motion.h1>

          <div className='space-y-20'>
                    
            {/* Project 1: Voyanza */}
            <motion.div 
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className='border-l-2 border-cyan-500 pl-6 md:pl-10 group'
            >
              <h2 className='text-2xl md:text-3xl font-bold text-cyan-400'>
                01. Voyanza <span className='text-gray-500 text-lg md:text-xl font-normal ml-2'>| Full Stack Platform</span>
              </h2>

              <div className='max-w-4xl text-gray-300 mt-6 space-y-4 leading-relaxed'>
                <p>
                  Developed and deployed a fullstack hospitality platform from scratch using the <span className='text-white font-medium'>MERN stack</span>, allowing users to list and rent private properties.
                </p>
                <ul className='list-disc list-inside space-y-2 ml-2'>
                  <li>Implemented secure <span className='text-white'>JWT-based</span> Authentication & Role-based Access Control.</li>
                  <li>Built a dynamic Review system with custom logic for creator-only deletion rights.</li>
                  <li>Optimized to handle <span className='text-white'>1k concurrent users</span> efficiently.</li>
                </ul>
              </div>

              <div className='mt-6'>
                <h3 className='text-xl font-semibold text-white mb-2'>Tech Stack:</h3>
                <p className='text-gray-400'>MongoDB, Express.js, React.js, Node.js, CSS, Cloudinary</p>
              </div>

              <div className='flex flex-wrap gap-4 mt-8'>
                <a href="https://voyanza.onrender.com" target="_blank" rel="noreferrer" 
                   className='px-6 py-2 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all rounded-md font-medium'>
                  Live Demo
                </a>
                <a href="https://github.com/Pawan072/Voyanza" target="_blank" rel="noreferrer"
                   className='px-6 py-2 border-2 border-gray-600 hover:border-white transition-all rounded-md font-medium'>
                  GitHub Repo
                </a>
              </div>
              <p className='text-xs text-red-400 mt-4 italic'>* Note: Project is optimized for Desktop only.</p>
            </motion.div>

            {/* Project 2: NVBC */}
            <motion.div 
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className='border-l-2 border-purple-500 pl-6 md:pl-10'
            >
              <h2 className='text-2xl md:text-3xl font-bold text-purple-400'>
                02. NVBC <span className='text-gray-500 text-lg md:text-xl font-normal ml-2'>| Frontend</span>
              </h2>

              <div className='max-w-4xl text-gray-300 mt-6 space-y-4 leading-relaxed'>
                <p>
                  Developed a high-performance responsive UI for the Northern Virginia Brittany Club using <span className='text-white font-medium'>React.js</span> and <span className='text-white font-medium'>Tailwind CSS</span>.
                </p>
                <ul className='list-disc list-inside space-y-2 ml-2'>
                  <li>Modern design with smooth animations and improved navigation flow.</li>
                  <li>Ensured seamless user experience across all mobile and desktop devices.</li>
                  <li>Deployed via Netlify with automated CI/CD pipelines.</li>
                </ul>
              </div>

              <div className='mt-6'>
                <h3 className='text-xl font-semibold text-white mb-2'>Tech Stack:</h3>
                <p className='text-gray-400'>React.js, Tailwind CSS, Framer Motion, Lucide Icons</p>
              </div>

              <div className='flex flex-wrap gap-4 mt-8'>
                <a href="https://nvbcus.netlify.app/" target="_blank" rel="noreferrer"
                   className='px-6 py-2 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all rounded-md font-medium'>
                  Live Demo
                </a>
                <a href="https://github.com/Pawan072/NVBC-USA--main" target="_blank" rel="noreferrer"
                   className='px-6 py-2 border-2 border-gray-600 hover:border-white transition-all rounded-md font-medium'>
                  GitHub Repo
                </a>
              </div>
            </motion.div>
                    
          </div>

          {/* Footer Line */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
          >
            Built with precision by Pawan Kumar Yadav
          </motion.div>
        </div>
      </section>
      {/* About section */}
      <section className='bg-[#030712] text-white py-16 px-6 md:px-12 lg:px-20'>
        <div className='max-w-4xl mx-auto'>
                    
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            className='text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight'
          >
            About <span className="text-cyan-500">Me</span>
          </motion.h1>

          <div className='space-y-10'>
                    
            <motion.div 
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className='group'
            >
              <h2 className='text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2'>
                <span className="w-8 h-0.5 bg-cyan-400"></span> Profession
              </h2>
              <div className='text-gray-300 leading-relaxed text-base md:text-lg space-y-4'>
                <p>
                  I am a passionate <span className='text-white font-medium'>Full Stack Web Developer</span> with a focus on building scalable and high-performance web applications.
                </p>
                <p>
                  Specializing in the <span className='text-white font-medium'>MERN stack</span>, I have experience building REST APIs and responsive UI systems. I've developed production-level applications featuring secure Authentication, database optimization, and real-time functionality, all while maintaining a strong foundation in <span className='text-white font-medium'>DSA</span> and backend system design.
                </p>
              </div>
            </motion.div>
                    
            <motion.div 
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className='group'
            >
              <h2 className='text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2'>
                <span className="w-8 h-0.5 bg-cyan-400"></span> Experience
              </h2>
              <div className='text-gray-300 leading-relaxed text-base md:text-lg space-y-4'>
                <p>
                  Recently, I completed a <span className='text-white font-medium'>3-month internship</span> as a Full Stack Web Developer, gaining hands-on experience with real-world production codebases.
                </p>
                <p>
                  Collaborating with cross-functional teams to deliver production-ready features has sharpened my problem-solving skills and reinforced my focus on <span className='text-white font-medium'>user-centric design</span>. For me, coding is the art of turning complex technical challenges into elegant, efficient solutions.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      {/* Skill section */}
      <section className='bg-[#030712] text-white py-20 px-6 md:px-12'>
        <div className='max-w-6xl mx-auto'>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            className='text-3xl md:text-5xl font-bold text-center mb-16'
          >
            Skills & <span className='text-cyan-500'>Technologies</span>
            <div className='h-1 w-20 bg-cyan-500 mx-auto mt-4 rounded-full'></div>
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, translateY: -5 }}
                className='p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group'
              >
                <h3 className='text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2'>
                  <span className='h-2 w-2 bg-cyan-500 rounded-full group-hover:animate-ping'></span>
                  {skill.title}
                </h3>

                <div className='flex flex-wrap gap-2 text-gray-300'>
                  {skill.content.map((item, i) => (
                    <span key={i} className={`text-sm md:text-base ${skill.highlight ? 'text-white font-bold' : ''}`}>
                      {item}{i !== skill.content.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Line at Bottom */}
          <div className="mt-20 pt-8 border-t border-gray-800/50 text-center text-gray-600 text-sm italic">
            Continuous Learner | Problem Solver
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;