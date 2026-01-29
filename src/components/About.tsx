import { Users } from "lucide-react";
import { motion } from "framer-motion";
import Me from "../assets/image.jpg";

export default function About() {
  return (
    
      <section className="py-20" id="about">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* === Left: Text Content === */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center space-x-2 text-purple-400 mb-4">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  About Me
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Passionate About
                <span className="bg-gradient-to-r ml-3 from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Building the Web
                </span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                I'm a full-stack developer passionate about crafting beautiful
                and functional web experiences. With over{" "}
                <span className="text-cyan-400 font-semibold">2 years</span> of
                experience, I specialize in creating scalable, user-focused web
                applications that solve real-world problems.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Tailwind CSS",
                  "MySQL",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-cyan-400 text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* === Right: Profile Image === */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 0 30px rgba(56,189,248,0.5), 0 0 60px rgba(168,85,247,0.4)",
                }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl border border-slate-700"
              >
                <img
                  src={Me}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
   
  );
}
