import { Mail, Phone, MapPin, Code, Briefcase, GraduationCap } from 'lucide-react';
import Image from '../assets/Image';

export default function Resume() {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white p-10">
          <div className="flex items-center gap-8">
            <div className="w-36 h-36  shadow-xl overflow-hidden bg-slate-600 flex-shrink-0">
              <div className="w-full h-full flex items-center justify-center text-4xl font-bold">
                <img src={Image.profile} alt="" />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-2 tracking-tight">LOM LEUY</h1>
              <p className="text-xl text-slate-300">Computer Instructor</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Left Sidebar */}
          <div className="bg-slate-50 p-8 space-y-8">
            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-300">CONTACT</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-1 text-slate-600 flex-shrink-0" />
                  <span className="text-slate-700">097 58 94 543</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-1 text-slate-600 flex-shrink-0" />
                  <span className="text-slate-700 break-all">leuylom022@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-slate-600 flex-shrink-0" />
                  <span className="text-slate-700">Vithealthin, Khan Doeum, Krong Siem Reap, Siem Reap</span>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-300">TECHNICAL SKILLS</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold text-slate-700 mb-2">Programming & Tools:</h3>
                  <p className="text-slate-600 leading-relaxed">HTML, CSS, JavaScript, Tailwind CSS, TypeScript, Fastify, Express, Node.js, Vue.js, React.js, MongoDB, MySQL, Photoshop, Canva, Microsoft Office</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 mb-2">Soft Skills:</h3>
                  <p className="text-slate-600 leading-relaxed">Creativity, Negotiation, Critical Thinking, Teamwork</p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-300">LANGUAGES</h2>
              <ul className="space-y-2 text-sm">
                <li className="text-slate-700">
                  <span className="font-semibold">Khmer</span> — Native
                </li>
                <li className="text-slate-700">
                  <span className="font-semibold">English</span> — Intermediate
                </li>
              </ul>
            </section>

            {/* Hobbies */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-300">HOBBIES</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-slate-600" />
                  Coding
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 text-slate-600">📚</span>
                  Reading
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 text-slate-600">🎵</span>
                  Music
                </li>
              </ul>
            </section>
          </div>

          {/* Right Content */}
          <div className="col-span-2 p-8 space-y-8">
            {/* Profile */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-700 flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">👤</span>
                </div>
                PROFILE
              </h2>
              <p className="text-slate-700 leading-relaxed">
                IT graduate and web developer with experience in front-end and back-end development. Passionate about creating modern, responsive, and user-focused web applications.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-700 flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                WORK EXPERIENCE
              </h2>
              <div className="space-y-4">
                <div className="relative pl-6 border-l-2 border-slate-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-800 rounded-full"></div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">IT Khmer Company</h3>
                      <p className="text-slate-600 font-medium">Web Developer</p>
                    </div>
                    <span className="text-sm text-slate-500 font-medium">2024 - PRESENT</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700 list-disc list-inside">
                    <li>Completed a 3-month internship focused on front-end and back-end web development</li>
                    <li>Promoted to a full-time Web Developer position after demonstrating strong work ethic</li>
                    <li>Developed responsive websites using HTML, CSS, Tailwind CSS, SCSS, Bootstrap, JavaScript, TypeScript and Vue.js</li>
                    <li>Integrated back-end functionality using Node.js, Fastify and MySQL</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-700 flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                EDUCATION
              </h2>
              <div className="space-y-4">
                <div className="relative pl-6 border-l-2 border-slate-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-800 rounded-full"></div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-slate-800">Bachelor of Information Technology</h3>
                    <span className="text-sm text-slate-500 font-medium">2022 - 2025</span>
                  </div>
                  <p className="text-sm text-slate-600">Build Bright University — Siem Reap, Cambodia</p>
                  <p className="text-sm text-slate-500 mt-1">GPA: 3.8 / 4.0</p>
                </div>

                <div className="relative pl-6 border-l-2 border-slate-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-600 rounded-full"></div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-slate-800">Diploma in General Education</h3>
                    <span className="text-sm text-slate-500 font-medium">2018 - 2021</span>
                  </div>
                  <p className="text-sm text-slate-600">Techo Sen Samrong High School — Oddor Meanchey</p>
                </div>

                <div className="relative pl-6 border-l-2 border-slate-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-500 rounded-full"></div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-slate-800">Secondary School Education</h3>
                    <span className="text-sm text-slate-500 font-medium">2015 - 2018</span>
                  </div>
                  <p className="text-sm text-slate-600">Samrong Secondary School — Oddor Meanchey</p>
                </div>

                <div className="relative pl-6">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-400 rounded-full"></div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-slate-800">Primary School Education</h3>
                    <span className="text-sm text-slate-500 font-medium">2009 - 2015</span>
                  </div>
                  <p className="text-sm text-slate-600">Donkern Phneat Primary School— Oddor Meanchey</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}