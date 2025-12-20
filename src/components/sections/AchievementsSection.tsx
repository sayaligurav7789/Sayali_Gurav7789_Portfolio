import React from 'react';
import { motion } from 'framer-motion';
import {Medal, Award, ExternalLink, Code, GraduationCap, Star,Lightbulb, Microscope, Rocket, Trophy, FileBadge} from 'lucide-react';
import { Button } from '../ui/button';

export const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      title: "2nd Place – National-Level Ideathon 2025",
      description: "Recognized for presenting an innovative solution at Arjun Innovations Foundation (DYPCET).",
      icon: GraduationCap,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/10 to-indigo-600/10",
      stats: "Rank: 2",
      link: "https://drive.google.com/file/d/1vn1coZEOaDKqJiWjD5ffY4qJ-9hFqCr_/view?usp=sharing",
      type: "Innovation"
    },
    {
      title: "3rd Place – National-Level Innovation Idea Presentation 2025",
      description: "Awarded for conceptualizing and pitching a creative idea at SIT Yadrav.",
      icon: Lightbulb,
      gradient: "from-purple-500 to-fuchsia-600",
      bgGradient: "from-purple-500/10 to-fuchsia-600/10",
      stats: "Rank: 3",
      link: "https://drive.google.com/file/d/1J6gsQv4J8bq0AXP5tKcmPaZJ14d33ORL/view?usp=sharing",
      type: "Innovation"
    },
    {
      title: "Runner-up – Avishkar Research Competition",
      description: "Represented at the university level after placing runner-up in the District competition.",
      icon: Microscope,
      gradient: "from-red-500 to-rose-600",
      bgGradient: "from-red-500/10 to-rose-600/10",
      stats: "District Runner-up",
      link: "https://drive.google.com/file/d/1U8ivR0A9NMryspkIlVewztp55XYnZWIF/view?usp=sharing",
      type: "Research"
    },
    {
      title: "Startup Incubation – DAIIEF Kolhapur",
      description: "Selected for incubation for an EdTech solution showcasing entrepreneurial potential.",
      icon: Rocket,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-500/10 to-emerald-600/10",
      stats: "Incubated",
      link: "https://drive.google.com/file/d/1vn1coZEOaDKqJiWjD5ffY4qJ-9hFqCr_/view?usp=sharing",
      type: "Startup"
    },

    {
      title: "LeetCode Scoring",
      description: "Solved 260+ algorithmic problems across Easy, Medium, and Hard levels with a strong focus on consistency and core data structures.",
      icon: Code,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-500/10 to-red-600/10",
      stats: "260+ Problems",
      link: "https://leetcode.com/u/SayaliGurav/",
      type: "competitive"
    },
    {
      title: "Co-Author & Presenter – IEEE ICBDSS 2025",
      description:
        "Co-authored and presented the research paper *EduChainSentinel: A Blockchain-Integrated Real-Time Sentiment Analysis and Exam Proctoring System*. Successfully showcased at the 4th IEEE International Conference on Blockchain & Distributed Systems Security (IEEE ICBDSS 2025). Copyright filed and patent process initiated.",
      icon: FileBadge,
      gradient: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-600/10 to-cyan-500/10",
      stats: "Conference: IEEE ICBDSS 2025",
      link: "https://drive.google.com/file/d/1kdIwF9R4hAGE1OFbYrh7mYzY1aVXP-0-/view?usp=sharing",
      type: "Research Publication"
    },

  ];


 const certifications = [
  {
    title: "Fundamentals of Accelerated Computing with CUDA C/C++",
    issuer: "NVIDIA",
    description: "Successfully completed fundamentals of accelerated computing with CUDA C/C++ demonstrating GPU programming proficiency.",
    icon: Award,
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-500/10 to-emerald-600/10",
    link: "https://drive.google.com/file/d/19rsX2vrcfbTqF5xrQrz5KxXMk1BH2eMp/view?usp=sharing"
  },
  {
    title: "Fundamentals of Accelerated Computing with CUDA Python",
    issuer: "NVIDIA",
    description: "Earned competency certification in accelerated computing using CUDA Python, demonstrating GPU computation skills.",
    icon: Award,
    gradient: "from-purple-500 to-indigo-600",
    bgGradient: "from-purple-500/10 to-indigo-600/10",
    link: "https://drive.google.com/file/d/1pr8or9Dqrzm6KHlH7CHDdbjX_aSWqeyJ/view?usp=sharing"
  },
  {
    title: "Android Developer Virtual Internship",
    issuer: "Google Developers & AICTE",
    description: "Completed 10-week virtual internship in Android development under Google Developers & AICTE Edu program.",
    icon: Award,
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-500/10 to-red-600/10",
    link: "https://drive.google.com/file/d/1-408Elc5rWFEqlLB2eYd36pechU5HX44/view?usp=sharing" 
  }
];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Recognition of excellence in competitive programming, academic performance, and professional development
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            🏆 Key Achievements
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, rotateY: 5, z: 50 }}
                className="
                  group relative rounded-2xl p-6 border glass cursor-pointer
                  transition-all duration-500 ease-out
                  hover:scale-[1.03]
                 bg-white/80 dark:bg-gray-900/60
                  backdrop-blur-xl
                  border-white/10
                "
                style={{ transformStyle: 'preserve-3d' }}
              >

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-12 h-12 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-200">
                      {achievement.title}
                    </h4>
                    {achievement.link && (
                      <motion.a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 12 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex-shrink-0 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200">
                    {achievement.description}
                  </p>
                  
                  <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${achievement.gradient} bg-opacity-10 border border-current rounded-full text-sm font-semibold`}
                    style={{ 
                      background: `linear-gradient(to right, ${achievement.gradient.includes('orange') ? 'rgb(249 115 22 / 0.1)' : achievement.gradient.includes('yellow') ? 'rgb(245 158 11 / 0.1)' : achievement.gradient.includes('green') ? 'rgb(34 197 94 / 0.1)' : 'rgb(59 130 246 / 0.1)'}, ${achievement.gradient.includes('orange') ? 'rgb(220 38 38 / 0.1)' : achievement.gradient.includes('yellow') ? 'rgb(249 115 22 / 0.1)' : achievement.gradient.includes('green') ? 'rgb(5 150 105 / 0.1)' : 'rgb(147 51 234 / 0.1)'})`,
                      color: achievement.gradient.includes('orange') ? 'rgb(194 65 12)' : achievement.gradient.includes('yellow') ? 'rgb(217 119 6)' : achievement.gradient.includes('green') ? 'rgb(21 128 61)' : 'rgb(37 99 235)'
                    }}
                  >
                    {achievement.stats}
                  </div>
                </div>

                {/* Decorative corner */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br ${achievement.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            📜 Professional Certifications
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30 dark:border-gray-700/40 transform-gpu"
              >
                {/* HOVER GRADIENT */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 12 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex-shrink-0 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                    
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
                  {/* Decorative corner here */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br ${cert.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                  />
              </motion.div>
            ))}
          </div>
        </div>

       {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            variant="glow"
            size="lg"
            asChild
            className="group inline-flex items-center px-8 py-4 gap-2"
          >
            <a
              href="https://github.com/sayaligurav7789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Trophy className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              <span>Let's Collaborate on Your Next Project</span>
              <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
