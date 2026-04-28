import {React, useState, useRef} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, ArrowLeft, } from 'lucide-react';
import { BsLinkedin } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';



// Assest
import resume from '../assets/Header/Pawan Yadav.pdf';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
      
    emailjs.sendForm(
      'service_abdq5ih', 
      'template_sq96fvo', 
      form.current, 
      'VVOJg2O7qw2-iUZSL'
    )
    .then((result) => {
        toast.success("Message sent successfully!");
        e.target.reset(); // Form clear ho jayega
    }, (error) => {
        console.error(error.text);
        toast.error("Error sending message.");
    });
  };

  
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <section className="bg-[#030712] text-gray-300 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 mb-8">
              I'm currently looking for SDE-1 opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Me</p>
                  <a href="mailto:py8795116@gmail.com" className="hover:text-blue-400 transition-colors">py8795116@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <BsLinkedin className="text-purple-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a href="www.linkedin.com/in/pawan-yadav-6b573836b" className="hover:text-purple-400 transition-colors">www.linkedin.com/in/pawan-yadav-6b573836b</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <MapPin className="text-green-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p>Azamgarh, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0f172a] p-8 rounded-2xl border border-gray-800 shadow-2xl"
          >
            <form className="space-y-4" ref={form} onSubmit={sendEmail}>
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full bg-[#030712] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full bg-[#030712] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows="4"
                  name="message"
                  className="w-full bg-[#030712] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95"
                type='submit'
            >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
      <div className="md:flex items-center py-8 gap-4 max-w-2xl mx-auto">
        <button 
          onClick={() => setPdfOpen(true)}
          className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 w-full py-1.5 rounded-sm transition-all text-lg"
        >
          Resume
        </button>
        <AnimatePresence>
          {pdfOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black flex flex-col"
            >
              {/* Header with Back Button */}
              <div className="p-4 bg-[#0f172a] border-b border-gray-800 flex items-center justify-between">
                <button 
                  onClick={() => setPdfOpen(false)}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <ArrowLeft size={24} /> 
                  <span className="font-medium">Back to Site</span>
                </button>
                <h2 className="text-white font-semibold hidden md:block">My Resume</h2>
                <div className="w-10"></div> {/* Spacer for alignment */}
              </div>
              {/* PDF Viewer */}
              <div className="flex-1 w-full h-full bg-gray-900">
                <iframe 
                  src={resume} 
                  title="Resume"
                  className="w-full h-full border-none"
                ></iframe>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};

export default Contact;