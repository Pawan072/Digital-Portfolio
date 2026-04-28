import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Skill', path: '/skill' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-[100] bg-[#030712]/80 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-black tracking-tighter"
                >
                    <Link to='/' className="group relative flex items-center gap-1">
                        <span className="text-blue-500 group-hover:text-white transition-colors duration-300">&lt;</span>
                        <span className="bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-indigo-300 transition-all duration-300">
                            Pawan.dev
                        </span>
                        <span className="text-blue-500 group-hover:text-white transition-colors duration-300"> /&gt;</span>
                    </Link>
                </motion.div>

                <nav className="hidden md:flex items-center gap-8 text-sm lg:text-base font-semibold">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.path}
                            to={link.path} 
                            className="relative text-slate-400 hover:text-white transition-colors duration-300 py-2 px-1 group"
                        >
                            {link.name}
                            {location.pathname === link.path ? (
                                <motion.div 
                                    layoutId="nav-underline"
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" 
                                />
                            ) : (
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                            )}
                        </Link>
                    ))}
                    
                    <Link 
                        to="/contact" 
                        className="ml-4 bg-blue-600/10 border border-blue-500/50 hover:bg-blue-600 text-blue-400 hover:text-white px-5 py-2 rounded-full transition-all duration-300 text-sm"
                    >
                        Hire Me
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button 
                        onClick={toggleMenu} 
                        className="text-slate-300 p-2 hover:bg-white/5 rounded-lg transition-colors"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-20 left-0 w-full bg-[#030712] border-b border-white/5 overflow-hidden md:hidden"
                    >
                        <nav className="flex flex-col p-6 gap-6 text-xl font-bold">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link 
                                        to={link.path} 
                                        onClick={toggleMenu} 
                                        className={`block ${location.pathname === link.path ? 'text-blue-500' : 'text-slate-300'}`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;