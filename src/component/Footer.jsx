import { LuPhone, LuMail, LuMapPin } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="bg-[#020617] text-slate-400 py-12 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 items-start">

                    <div className="flex flex-col">
                        <Link to='/' className="text-xl w-fit bg-linear-to-r hover:scale-105 transition duration-300 from-cyan-400 to-blue-600 bg-clip-text text-transparent font-bold">
                            {"<Pawan.dev />"}
                        </Link>
                        <p className="mt-4 text-slate-300 leading-relaxed max-w-sm">
                            Building <span className="italic text-blue-300 font-medium">Full-Stack Solutions</span> and <span className="italic text-blue-300 font-medium">Frontend</span> with Precision.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="font-bold text-lg mb-6 text-white border-b-2 border-blue-500 w-fit pb-1">
                            Quick Links
                        </h2>
                        <nav className="flex flex-col gap-3"> 
                            <Link to='/projects' className="text-slate-300 hover:text-blue-400 transition duration-300 hover:translate-x-1 w-fit">Projects</Link>
                            <Link to='/about' className="text-slate-300 hover:text-blue-400 transition duration-300 hover:translate-x-1 w-fit">About</Link>
                            <Link to='/skill' className="text-slate-300 hover:text-blue-400 duration-300 hover:translate-x-1 transition w-fit">Skill set</Link>
                            <Link to='/contact' className="text-slate-300 hover:text-blue-400 duration-300 hover:translate-x-1 transition w-fit">Contact</Link>
                        </nav>
                    </div>
                    
                    <div className="flex flex-col">
                        <h2 className="font-bold text-lg mb-6 text-white border-b-2 border-blue-500 w-fit pb-1">
                            Get in Touch
                        </h2>
                        <div className="flex flex-col gap-4">
                            <span className="flex items-center gap-3 text-slate-300 hover:text-blue-400 duration-300 transition cursor-pointer group">
                                <LuPhone className="text-blue-400 group-hover:scale-110 transition-transform" /> 
                                <span>+91 911 539 5384</span>
                            </span>

                            <a href="mailto:py8795116@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 duration-300 transition group">
                                <LuMail className="text-blue-400 group-hover:scale-110 transition-transform" /> 
                                <span>py8795116@gmail.com</span>
                            </a>
                            
                            <span className="flex items-center gap-3 text-slate-300 hover:text-blue-400 duration-300 transition group">
                                <LuMapPin className="text-blue-400 group-hover:scale-110 transition-transform" /> 
                                <span>Uttar Pradesh, India</span>
                            </span>
                        </div>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm font-medium">
                    &copy; {new Date().getFullYear()} {"<Pawan.dev/>"}. All rights reserved.
                </div>
            </div>
        </section>
    );
};

export default Footer;