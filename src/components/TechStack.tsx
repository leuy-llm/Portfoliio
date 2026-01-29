import { motion } from "framer-motion";
import {
  FaReact, FaVuejs, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaJs,
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiMysql, SiExpress,
  SiPrimevue, SiFastify, SiLaravel, SiVite,
  SiBootstrap,
  SiGit,
} from "react-icons/si";

const techs = [
  { 
    name: "React", 
    icon: <FaReact className="text-sky-400" />,
    category: "Frontend Library",
    description: "JavaScript library for UI"
  },
  { 
    name: "Vue.js", 
    icon: <FaVuejs className="text-green-400" />,
    category: "Frontend Framework",
    description: "Progressive JavaScript framework"
  },
  { 
    name: "Node.js", 
    icon: <FaNodeJs className="text-green-500" />,
    category: "Backend Runtime",
    description: "JavaScript runtime environment"
  },
  { 
    name: "Express.js", 
    icon: <SiExpress className="text-gray-300" />,
    category: "Backend Framework",
    description: "Web framework for Node.js"
  },
  { 
    name: "TypeScript", 
    icon: <SiTypescript className="text-blue-400" />,
    category: "Programming Language",
    description: "JavaScript with type safety"
  },
  { 
    name: "Tailwind CSS", 
    icon: <SiTailwindcss className="text-cyan-400" />,
    category: "CSS Framework",
    description: "Utility-first CSS framework"
  },
  { 
    name: "MySQL", 
    icon: <SiMysql className="text-blue-500" />,
    category: "Database",
    description: "Relational database system"
  },
  // { 
  //   name: "MongoDB", 
  //   icon: <SiMongodb className="text-green-500" />,
  //   category: "Database",
  //   description: "NoSQL document database"
  // },
  { 
    name: "HTML5", 
    icon: <FaHtml5 className="text-orange-500" />,
    category: "Markup Language",
    description: "Structure of web pages"
  },
  { 
    name: "CSS3", 
    icon: <FaCss3Alt className="text-blue-400" />,
    category: "Styling Language",
    description: "Styling and layout"
  },
  { 
    name: "JavaScript", 
    icon: <FaJs className="text-yellow-400" />,
    category: "Programming Language",
    description: "Core language for web"
  },
  { 
    name: "GitHub", 
    icon: <FaGithub className="text-gray-300" />,
    category: "Version Control",
    description: "Code hosting platform"
  },
  { 
    name: "PrimeVue", 
    icon: <SiPrimevue className="text-gray-300" />,
    category: "UI Component Library",
    description: "Vue.js component library"
  },
  { 
    name: "Fastify", 
    icon: <SiFastify className="text-gray-300" />,
    category: "Backend Framework",
    description: "Fast Node.js web framework"
  },
  { 
    name: "Laravel", 
    icon: <SiLaravel className="text-red-500" />,
    category: "Backend Framework",
    description: "PHP web framework"
  },
  { 
    name: "Vite", 
    icon: <SiVite className="text-purple-500" />,
    category: "Build Tool",
    description: "Fast frontend build tool"
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-blue-500" />,
    category: "CSS Framework",
    description: "Respo,nsive front-end framework"
  },
  {
    name: "Git",
    icon: <SiGit className="text-blue-500" />,
    category: "Version Control",
    description: "Code hosting platform"
  },
  {
    name: "PrimeFlex",
    icon: <SiPrimevue className="text-green-400" />,
    category: "Utility-first CSS library",
    description: "Responsive layout system"
  }
];

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text"
        >
          My Tech Stack
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-3xl mx-auto mb-16 text-sm sm:text-base leading-relaxed"
        >
          I work with modern tools and technologies to build responsive, scalable, and interactive web applications.  
          From frontend frameworks like <span className="text-purple-400 font-semibold">React</span> and <span className="text-green-400 font-semibold">Vue.js</span>  
          to backend solutions like <span className="text-green-500 font-semibold">Node.js</span> and <span className="text-gray-300 font-semibold">Express</span>,  
          I choose the right tools to create clean, efficient, and high-quality applications.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer text-left"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-4xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <span className="text-xs text-purple-400 font-medium">
                      {tech.category}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative bottom line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        ></motion.div>
      </div>
      <div className="overflow-hidden relative w-full">
        <div className="flex animate-scroll gap-12 whitespace-nowrap">
          {[...techs, ...techs].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2 min-w-[100px]"
            >
              <div className="text-5xl transition-transform duration-300 hover:scale-110">
                {tech.icon}
              </div>
              <p className="text-gray-300 text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;