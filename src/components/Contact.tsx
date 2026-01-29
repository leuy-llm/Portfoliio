import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Send,
  MapPin,
  Phone,
} from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormStatus(""), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.section id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" text-white py-20 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach
            out. I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Let's Talk</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Mail className="text-purple-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">leuylom022@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Phone className="text-purple-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-medium">097 58 94 543</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-medium">Siem Reap, Cambodia</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: "https://github.com/leuy-llm", color: "hover:text-gray-300" },
                 
                ].map(({ Icon, href, color }, idx) => (
                  <motion.a
                    key={idx}
                    href={href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-gray-400 ${color} transition-colors`}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
               <input type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled
                className="
                  w-full px-4 py-3
                  bg-slate-900/50
                  border border-slate-700/50
                  rounded-lg
                  text-white
                  placeholder-gray-500
                  focus:outline-none
                  focus:border-purple-500
                  transition-colors

                  disabled:bg-slate-800/70
                  disabled:text-gray-400
                  disabled:placeholder-gray-600
                  disabled:border-slate-600
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
                placeholder="John Doe"
              />

              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled
                className="
                  w-full px-4 py-3
                  bg-slate-900/50
                  border border-slate-700/50
                  rounded-lg
                  text-white
                  placeholder-gray-500
                  focus:outline-none
                  focus:border-purple-500
                  transition-colors

                  disabled:bg-slate-800/70
                  disabled:text-gray-400
                  disabled:placeholder-gray-600
                  disabled:border-slate-600
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
                placeholder="john@example.com"
              />

              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled
                        className="
                        w-full px-4 py-3
                        bg-slate-900/50
                        border border-slate-700/50
                        rounded-lg
                        text-white
                        placeholder-gray-500
                        focus:outline-none
                        focus:border-purple-500
                        transition-colors

                        disabled:bg-slate-800/70
                        disabled:text-gray-400
                        disabled:placeholder-gray-600
                        disabled:border-slate-600
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                        "
                        placeholder="Project Inquiry"
                    />

              </div>

              <div> 
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  disabled
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
              
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                disabled
                className="w-full py-4  bg-green-400/50 border border-green-400 cursor-pointer rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === "sending" ? (
                  <span>Sending...</span>
                ) : formStatus === "success" ? (
                  <span>Message Sent! ✓</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      
    </motion.section>
  );
};

export default Contact;
