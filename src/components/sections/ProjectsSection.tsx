import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Folder, Code, Cpu, Briefcase, ShieldCheck, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AlgoViz — Algorithm Visualizer Web App',
    description:
      'An interactive algorithm visualization platform built to improve conceptual understanding and learning efficiency through step-by-step animations, quizzes, and AI-assisted explanations.',
    icon: Cpu,
    iconColor: 'from-teal-500 to-emerald-500',
    keyAchievements: [
      'Improved conceptual understanding and learning efficiency by ~50% using interactive algorithm visualizations.',
      'Increased topic coverage and interview readiness by ~40% through quizzes, practice modules, and structured notes.',
      'Reduced manual doubt-resolution time by ~60% using an AI-powered assistant for algorithm explanations.',
      'Optimized UI animations and rendering performance, reducing perceived page load time by ~40%.',
    ],
    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'Vite',
      'Node.js',
      'Firebase',
      'Openai',
      'HTML5 Audio API'
    ],
    github: 'https://github.com/sayaligurav7789/AlgoViz',
    live: 'https://algoviz-woad.vercel.app/',
  },
  {
    title: 'Employee Payroll Management System',
    description: 'Automates salary computations, attendance, records, and payslip generation.',
    icon: Briefcase,
    iconColor: 'from-teal-500 to-emerald-600',
    keyAchievements: [
      'Java Swing + MySQL based system.',
      'Reduced payroll errors by 90%.',
      'Tax, attendance & payslip automation.',
    ],
    technologies: ['Java', 'Swing', 'AWT', 'MySQL'],
    github: 'https://github.com/sayaligurav7789/Emp_Payroll.git',
    live: '#',
  },
  {
    title: 'AI-Based Exam Cheating Detection System',
    description: 'AI proctoring detecting cheating using vision & behavioral monitoring.',
    icon: ShieldCheck,
    iconColor: 'from-red-500 to-orange-600',
    keyAchievements: [
      'Face recognition & gaze tracking.',
      'YOLOv8 + TensorFlow based detection.',
      'Achieved 89% real-time accuracy.',
    ],
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'YOLOv8', 'Ultralytics'],
    github: 'https://github.com/sayaligurav7789/Startup',
    live: '#',
  },
  {
    title: 'Air Canvas – Gesture-Based Drawing System',
    description: 'Draw in the air using webcam gesture recognition.',
    icon: PenTool,
    iconColor: 'from-purple-500 to-indigo-600',
    keyAchievements: [
      'Real-time gesture detection with MediaPipe.',
      'Optimized tracking with Deque structures.',
      '50% improved drawing speed.',
    ],
    technologies: ['Python', 'OpenCV', 'NumPy', 'MediaPipe'],
    github: 'https://github.com/sayaligurav7789/Air-Canvas-OpenCV-Project-.git',
    live: '#',
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
