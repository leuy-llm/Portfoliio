import { ChevronLeft, ChevronRight, Github, Globe, Grid, Layout } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "../assets/Image";

const Project = () => {
  interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    highlights: string[];
    image: string;
    demo?: string;
    code?: string;
    category: string;
  }

  const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "webapp", label: "Web App" },
  { id: "fullstack", label: "Full-Stack" },
];

  const projects: Project[] = [
    {
      id: 1,
      title: "ShoeStore — Online Footwear Shop",
      subtitle: "Full-Stack E-Commerce Project",
      description: "An online shoe store built with modern technologies ...",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Laravel"],
      highlights: [
        "Developed a fully responsive interface using Tailwind CSS",
        "Integrated API-driven product management system",
        "Implemented cart functionality and product filters",
        "Enhanced UX with smooth animations",
      ],
      image: Image.shoes1,
      demo: "https://sell-shoes-eight.vercel.app/",
      code: "https://github.com/leuy-llm/sell-shoes",
      category: "fullstack",
    },
    {
      id: 2,
      title: "E-Shop — E-Commerce Platform",
      subtitle: "Dynamic Online Store with Admin Dashboard",
      description:
        "A scalable e-commerce platform with secure authentication ...",
      technologies: [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Clerk Auth",
        "FakeStore API",
        "Google Map API",
        "REST API",
      ],
      highlights: [
        "Implemented secure user authentication using Clerk",
        "Integrated real-time stock management",
        "Built responsive admin dashboard",
        "Optimized for fast load times",
      ],
      image: Image.ecom,
      demo: "https://e-commerece-kohl.vercel.app/",
      code: "https://github.com/leuy-llm/e-commerece",
      category: "web",
    },
    {
      id: 3,
      title: "CineView — Movie Discovery App",
      subtitle: "Interactive Movie Search Platform",
      description:
        "A movie discovery app where users can browse trending films ...",
      technologies: ["React", "Tailwind CSS", "DaisyUI", "Vite", "TypeScript"],
      highlights: [
        "Integrated TMDB API for dynamic content",
        "Developed clean layout with DaisyUI",
        "Added favorite & watchlist features",
        "Used TypeScript for type safety",
      ],
      image: Image.movie1,
      demo: "https://movies-two-lime.vercel.app/",
      code: "https://github.com/leuy-llm/Movie",
      category: "web",
    },
    {
      id: 4,
      title: "ExploreCambodia — Tourism Website",
      subtitle: "Travel & Adventure Web Application",
      description:
        "A tourism platform built with Vue.js that allows users to explore destinations ...",
      technologies: ["Vue", "Tailwind CSS", "PrimeVue", "Vite", "TypeScript"],
      highlights: [
        "Developed dynamic destination listings",
        "Integrated Google Maps for previews",
        "Designed responsive layouts",
        "Focused on accessibility & smooth navigation",
      ],
      image: Image.tour1,
      demo: "https://tour-sable.vercel.app/",
      code: "https://github.com/leuy-llm/tour",
      category: "webapp",
    },
    {
      id: 5,
      title: "TastyHub — Recipe Finder App",
      subtitle: "API-Driven Cooking Platform",
      description: "A recipe search platform to find meals by ingredients ...",
      technologies: [
        "Vue",
        "Vite",
        "Tailwind CSS",
        "The MealDB API",
        "TypeScript",
      ],
      highlights: [
        "Connected to TheMealDB API",
        "Implemented search/filter features",
        "Clean UI for instructions",
        "Responsive recipe grid",
      ],
      image: Image.rcipe1,
      demo: "https://recipe-app-alpha-seven.vercel.app/",
      code: "https://github.com/leuy-llm/recipeApp",
      category: "webapp",
    },
    {
      id: 6,
      title: "SkyCast — Weather Forecast App",
      subtitle: "Real-Time Weather Tracking",
      description:
        "A weather app showing live data with elegant UI. Displays temperature, humidity, wind, etc.",
      technologies: [
        "Vue",
        "Vite",
        "Tailwind CSS",
        "Weather API",
        "TypeScript",
      ],
      highlights: [
        "Fetched real-time weather via API",
        "Dynamic background themes per weather",
        "Search by city and current location",
        "Clean UI & UX focus",
      ],
      image: Image.weather,
      demo: "https://weather-app-acnd.vercel.app",
      code: "https://github.com/leuy-llm/weatherApp",
      category: "webapp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState<'carousel' | 'grid'>('carousel');

const filtered = projects.filter(project => 
  filter === "all" ? true : project.category === filter
);
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const imageVariants = {
    initial: { opacity: 0, y: 30, scale: 0.98 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.98,
      transition: { duration: 0.4 },
    },
  };

  const detailsVariants = {
    initial: { opacity: 0, x: 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.4 },
    },
  };

  const currentProject = filtered[currentIndex] || filtered[0];

  return (
    <section className="text-white" id="projects">
        {/* === View toggle === */}
        
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
            >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Project{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Showcase
                </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore my portfolio to see the projects I’ve built — blending
                creativity, functionality, and user experience.
            </p>
            </motion.div>
            <div className="flex justify-end gap-4 container mx-auto px-4 py-12 max-w-7xl">
                <button
                onClick={() => setView("carousel")}
                className={`px-4 py-2 flex items-center gap-2 rounded-lg font-semibold transition ${
                    view === "carousel" ? "bg-cyan-600 text-white" : "bg-slate-800 text-gray-300"
                }`}
                >
                <Layout className="w-4 h-4" /> Carousel
                </button>
                <button
                onClick={() => setView("grid")}
                className={`px-4 py-2 flex items-center gap-2 rounded-lg font-semibold transition ${
                    view === "grid" ? "bg-cyan-600 text-white" : "bg-slate-800 text-gray-300"
                }`}
                >
                <Grid className="w-4 h-4" /> Grid
                </button>
        </div>
      {view === "carousel" ? (
        <div className="container mx-auto px-4 py-12 max-w-7xl">
            {/* === Section Header === */}

            {/* === Project Section === */}
            <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            {/* --- Left: Project Preview --- */}
            <AnimatePresence mode="wait">
                <motion.div
                key={currentProject.id}
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="relative group rounded-xl overflow-hidden"
                    drag="x"                          // ✅ enable horizontal drag
                    dragConstraints={{ left: 0, right: 0 }} // limit dragging (will act like swipe)
                    dragElastic={0.2}                 // resistance effect
                    onDragEnd={(_, info) => {
                    if (info.offset.x < -50) handleNext();   // swipe left → next
                    if (info.offset.x > 50) handlePrev();    // swipe right → prev
                }}
                >
                <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-600/50 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
                    {/* Mac-style dots */}
                    <div className="absolute top-4 left-4 flex gap-2 z-20">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>

                    {/* Image */}
                    <motion.img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover object-center rounded-xl transition-transform duration-500 group-hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    />
                    <motion.div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></motion.div>

                    {/* Buttons */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 rounded-xl z-20">
                    {currentProject.demo && (
                        <motion.a
                        href={currentProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 flex items-center justify-center bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-all shadow-md"
                        >
                        <Globe className="w-5 h-5" />
                        </motion.a>
                    )}
                    {currentProject.code && (
                        <motion.a
                        href={currentProject.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 flex items-center justify-center bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-all shadow-md"
                        >
                        <Github className="w-5 h-5" />
                        </motion.a>
                    )}
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-start gap-2 ml-3 mt-6">
                    {projects.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                        if (!isAnimating && idx !== currentIndex) {
                            setIsAnimating(true);
                            setCurrentIndex(idx);
                            setTimeout(() => setIsAnimating(false), 600);
                        }
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                            ? "w-8 bg-cyan-500"
                            : "w-2 bg-slate-600 hover:bg-slate-500"
                        }`}
                        aria-label={`Go to project ${idx + 1}`}
                    />
                    ))}
                </div>
                </motion.div>
            </AnimatePresence>

            {/* --- Right: Project Details --- */}
            <AnimatePresence mode="wait">
                <motion.div
                key={currentProject.id + "-details"}
                variants={detailsVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
                >
                <div className="space-y-2">
                    <h2 className="text-lg font-lato font-semibold text-cyan-400">
                    {currentProject.title}
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    {currentProject.subtitle}
                    </h1>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed">
                    {currentProject.description}
                </p>

                <div>
                    <h3 className="text-sm font-semibold text-slate-400 mb-3">
                    Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech) => (
                        <motion.span
                        key={tech}
                        className="px-4 py-2 bg-slate-800 border border-cyan-500/30 rounded-lg text-cyan-400 font-mono text-sm"
                        whileHover={{ scale: 1.1 }}
                        >
                        {tech}
                        </motion.span>
                    ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-slate-400 mb-3">
                    Key Highlights
                    </h3>
                    <ul className="space-y-2">
                    {currentProject.highlights.map((highlight, idx) => (
                        <motion.li
                        key={idx}
                        className="flex items-start gap-3 text-slate-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        >
                        <span className="text-cyan-400 mt-1">→</span>
                        <span>{highlight}</span>
                        </motion.li>
                    ))}
                    </ul>
                </div>
                </motion.div>
            </AnimatePresence>
            </motion.div>

            {/* === Navigation Buttons === */}
            <motion.div
            className="flex items-center justify-between gap-4 mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            >
            <div className="text-sm text-slate-400 font-mono">
                {currentIndex + 1} / {projects.length}
            </div>
            <div className="flex gap-2">
                <button
                onClick={handlePrev}
                disabled={isAnimating}
                className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-cyan-600 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                onClick={handleNext}
                disabled={isAnimating}
                className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-cyan-600 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                <ChevronRight className="w-5 h-5" />
                </button>
            </div>
            </motion.div>
        </div>
      ) : (
        <section className="py-16 ">
          <div className="container mx-auto px-4 py-12 max-w-7xl">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    filter === cat.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project) => (
                <div key={project.id} className="bg-white/10 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-2 border-t border-gray-200">
                      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">Live <Globe className="w-4 h-4" /></a>}
                      {project.code && <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline flex items-center gap-1">Code <Github className="w-4 h-4" /></a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-16 text-gray-500">
                <p>No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>
      )}
    </section>
  );
};

export default Project;
