import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Folder, Code, Cpu, Briefcase, ShieldCheck, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neural Torrent (PBTS) — Decentralized AI Dataset Exchange',
    description:
      'A hybrid Web2 + Web3 decentralized platform for AI dataset sharing using blockchain reputation, WebTorrent networking, and tokenized marketplace integration.',
    icon: ShieldCheck,
    iconColor: 'from-cyan-500 to-blue-600',
    keyAchievements: [
      'Built a Persistent BitTorrent Tracker System (PBTS) with blockchain-based reputation and decentralized dataset exchange.',
      'Integrated Ethereum smart contracts, MetaMask authentication, and Uniswap-powered token marketplace.',
      'Implemented cryptographic receipt verification and contribution-based access control for trusted peer-to-peer sharing.',
      'Designed AI-agent collaboration and spatial-world visualization modules for autonomous dataset interaction.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Solidity',
      'Ethereum',
      'WebTorrent',
      'MetaMask',
      'Uniswap API',
      'Tailwind CSS'
    ],
    github: 'https://github.com/sayaligurav7789/neutral-torrent.git',
    live: '#',
  },

  {
    title: 'Socratic — AI-Based Learning Evaluation System',
    description:
      'An AI-powered Socratic learning platform where users teach an AI student to improve concept retention and detect misconceptions.',
    icon: Cpu,
    iconColor: 'from-purple-500 to-indigo-600',
    keyAchievements: [
      'Built an AI-powered Socratic learning system where users teach an AI student, improving concept retention and reducing passive learning by ~50%.',
      'Developed a real-time misconception detection engine with blind-spot tracking and instant alerts, reducing conceptual errors by ~60%.',
      'Designed a metadata-driven evaluation pipeline with Bloom-level analysis and dual-layer radar visualization for theoretical and practical understanding.',
      'Integrated source-authenticated corrections, AI-generated evaluation reports, and anti copy-paste detection to ensure reliable and genuine learning experiences.',
    ],
    technologies: [
      'Next.js',
      'Node.js',
      'MongoDB',
      'Groq',
      'Gemini API',
      'Clerk',
      'Tailwind CSS'
    ],
    github: 'https://github.com/sayaligurav7789',
    live: '#',
  },

  {
    title: 'Blackhole — AI-Powered Exam Proctoring System',
    description:
      'Edge-based AI exam monitoring system for secure online and offline examinations using computer vision and real-time alerts.',
    icon: ShieldCheck,
    iconColor: 'from-red-500 to-orange-600',
    keyAchievements: [
      'Built real-time AI-based proctoring using YOLO and OpenCV.',
      'Reduced manual supervision effort by 60–70% using automated detection.',
      'Implemented Telegram alerts with image proof and Firebase logging.',
      'Optimized edge inference on Raspberry Pi using NCNN and frame-skipping.',
    ],
    technologies: [
      'Python',
      'OpenCV',
      'YOLO',
      'Firebase',
      'Raspberry Pi',
      'TensorFlow',
      'Telegram API'
    ],
    github: 'https://github.com/sayaligurav7789/Startup',
    live: '#',
  },

  {
    title: 'AlgoViz — Algorithm Visualizer Web App',
    description:
      'Interactive algorithm visualization platform for improving DSA learning using animations, quizzes, and AI-assisted explanations.',
    icon: PenTool,
    iconColor: 'from-teal-500 to-emerald-600',
    keyAchievements: [
      'Built 20+ interactive visualization modules for algorithms and data structures.',
      'Improved interview readiness through quizzes, notes, and practice modules.',
      'Reduced doubt-resolution time using AI-powered algorithm explanations.',
      'Optimized animations and rendering performance for smoother learning experience.',
    ],
    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'Vite',
      'Firebase',
      'Node.js',
      'OpenAI'
    ],
    github: 'https://github.com/sayaligurav7789/AlgoViz',
    live: 'https://algoviz-woad.vercel.app/',
  },
];

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-4">
              <Folder className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();

              return (
                <div
                  key={project.title}
                  ref={cardRef}
                  className={`
                    group relative rounded-2xl p-6 border glass cursor-pointer
                    transition-all duration-700 ease-out
                    hover:scale-[1.04]
                    ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  `}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className={`
                      absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full
                      bg-gradient-to-br ${project.iconColor}
                      opacity-20 group-hover:opacity-40 transition-opacity duration-300
                    `}
                  />

                  <div
                    className={`
                      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20
                      transition-opacity duration-500
                      bg-gradient-to-br ${project.iconColor}
                    `}
                  />

                  <div
                    className={`
                      relative z-10 w-12 h-12 rounded-xl
                      bg-gradient-to-br ${project.iconColor}
                      flex items-center justify-center mb-4
                      transition-transform duration-500
                      group-hover:scale-110
                    `}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 dark:group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 dark:group-hover:text-gray-200 transition-colors duration-400">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.keyAchievements.map((ach, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-muted-foreground dark:group-hover:text-gray-300 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current mt-2 shrink-0" />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="
                              px-3 py-1 text-xs font-mono rounded-full
                              border text-gray-700 bg-gray-100
                              dark:border-white/20 dark:text-white/80 dark:bg-white/5
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button variant="glow" size="sm" asChild className="w-fit">
                      <a href={project.github} className="flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        View Details
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="glow" size="lg" asChild>
              <a href="https://github.com/sayaligurav7789" className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                View All Projects on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
