import { useState } from "react";
import { 
  FaReact, FaVuejs, FaNodeJs, FaHtml5, FaCss3Alt, FaJs 
} from "react-icons/fa";
import { 
  SiExpress, SiLaravel, SiVite, SiBootstrap, SiGit, SiTailwindcss, SiPrimevue, SiFastify, SiMysql, SiMongodb, 
  SiTypescript,
  SiPostman,
  SiVercel,
  SiCanva,
  SiAdobephotoshop,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Cloud, Code } from "lucide-react";
import { PiMicrosoftWordLogoFill, PiMicrosoftExcelLogoFill, PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
function Skill() {
  const allSkills = [
    // ==== Frontend ====
    { name: "React", icon: <FaReact className="text-sky-400 text-4xl" />, category: "Frontend" },
    { name: "Vue.js", icon: <FaVuejs className="text-green-400 text-4xl" />, category: "Frontend" },
    { name: "Vite", icon: <SiVite className="text-purple-500 text-4xl" />, category: "Frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl" />, category: "Frontend" },
    { name: "Bootstrap", icon: <SiBootstrap className="text-blue-500 text-4xl" />, category: "Frontend" },
    { name: "PrimeVue", icon: <SiPrimevue className="text-green-400 text-4xl" />, category: "Frontend" },
    { name: "PrimeFlex", icon: <SiPrimevue className="text-gray-300 text-4xl" />, category: "Frontend" },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" />, category: "Frontend" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400 text-4xl" />, category: "Frontend" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" />, category: "Frontend" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-4xl" />, category: "Frontend" },

    // ==== Backend ====
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" />, category: "Backend" },
    { name: "Express.js", icon: <SiExpress className="text-gray-300 text-4xl" />, category: "Backend" },
    { name: "Laravel", icon: <SiLaravel className="text-red-500 text-4xl" />, category: "Backend" },
    { name: "Fastify", icon: <SiFastify className="text-gray-300 text-4xl" />, category: "Backend" },
    { name: "MySQL", icon: <SiMysql className="text-blue-500 text-4xl" />, category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" />, category: "Backend" },

   // ==== Tools ====
    { name: "Git", icon: <SiGit className="text-orange-500 text-4xl" />, category: "Tools" },
    { name: "Visual Studio", icon: <VscVscode className="text-indigo-400 text-4xl" />, category: "Tools" },
    { name: "Postman", icon: <SiPostman className="text-orange-500 text-4xl" />, category: "Tools" },
    { name: "Vercel", icon: <SiVercel className="text-white text-4xl" />, category: "Tools" },
    { name: "Windsurf", icon: <Cloud className="text-sky-400 text-4xl" />, category: "Tools" },
    { name: "EchoAPI", icon: <Code className="text-pink-400 text-4xl" />, category: "Tools" },
    { name: "Apidog", icon: <Code className="text-yellow-400 text-4xl" />, category: "Tools" },
    { name: "Canva", icon: <SiCanva className="text-blue-400 text-4xl" />, category: "Tools" },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-sky-500 text-4xl" />, category: "Tools" },

    //===== Office Software =====
    { name: "MS Word", icon: <PiMicrosoftWordLogoFill className="text-blue-600 text-4xl" />, category: "Office Software" },
    { name: "MS Excel", icon: <PiMicrosoftExcelLogoFill className="text-green-600 text-4xl" />, category: "Office Software" },
    { name: "MS PowerPoint", icon: <PiMicrosoftPowerpointLogoFill className="text-yellow-600 text-4xl" />, category: "Office Software" },
   
  ];


  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = ["All", "Frontend", "Backend", "Tools", "Office Software"];
  

  // Filter skills based on selected category
  const displayedSkills =
    selectedCategory === "All"
      ? allSkills
      : allSkills.filter(skill => skill.category === selectedCategory);

  return (
    <section className="py-20" id="skills">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Mastering the art of modern development with cutting-edge technologies
          </p>
        </div>

        {/* Filter Menu */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedCategory(item)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === item
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}>
              {item}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {displayedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-900/60 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-full mb-4 shadow-inner">
                {skill.icon}
              </div>
              <p className="text-sm font-semibold text-gray-200 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
