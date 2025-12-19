import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Folder,Code, Cpu, Briefcase, ShieldCheck,PenTool } from 'lucide-react';

const projects = [
  {
    title: 'AlgoViz — Interactive Algorithm Visualizer & Quiz Platform',
    description:
      'An interactive learning platform that visualizes core data structures and algorithms with step-by-step animations, topic-wise quizzes, and real-time feedback to enhance conceptual understanding.',
    icon: Cpu, // or Code, Brain, Layers (from lucide-react / react-icons)
    iconColor: 'from-teal-500 to-emerald-500',
    keyAchievements: [
      'Built interactive visualizers for sorting, searching, linked lists, stacks, queues, trees, and graphs.',
      'Implemented topic-wise quiz system with timer, scoring, explanations, and certificates.',
      'Designed reusable UI components for pseudocode highlighting and step execution.',
      'Added audio feedback for quiz events (start, correct, wrong, countdown timer).',
      'Developed responsive UI with Tailwind CSS and optimized UX for both desktop and mobile.',
    ],
    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'Gemini Api',
      'HTML5 Audio API',
      'Vite',
    ],
    github: '#',
    live: '#',
  },
  {
    title: 'Employee Payroll Management System',
    description: 'A desktop-based payroll management system that automates employee records, salary computation, attendance tracking, tax deductions, and payslip generation.',
    icon: Briefcase,
    iconColor: 'from-teal-500 to-emerald-600',
    keyAchievements: [
      'Designed and implemented automated payroll processing using Java Swing and MySQL.',
      'Reduced payroll calculation and record-keeping errors by 90% compared to manual processes.',
      'Implemented tax calculation, deductions, attendance-based salary computation, and payslip generation.',
    ],
    technologies: ['Java', 'Swing', 'AWT', 'MySQL'],
    github: 'https://github.com/sayaligurav7789/Emp_Payroll.git',
    live: '#',
  },
  {
    title: 'AI-Based Exam Cheating Detection System',
    description: 'An AI-powered proctoring system that detects cheating behavior in online and offline exams using computer vision, audio analysis, and behavioral monitoring.',
    icon: ShieldCheck,
    iconColor: 'from-red-500 to-orange-600',
    keyAchievements: [
      'Developed a real-time cheating detection system using face recognition, gaze tracking, and movement analysis.',
      'Integrated YOLOv8 for object detection and TensorFlow models for behavior classification.',
      'Achieved 89% real-time detection accuracy while reducing manual supervision effort by 70%.',
    ],
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'YOLOv8', 'Ultralytics'],
    github: '#',
    live: '#',
  },
  {
    title: 'Air Canvas – Gesture-Based Drawing System',
    description: 'A computer vision application that allows users to draw in the air using hand gestures captured through a webcam, eliminating the need for physical input devices.',
    icon: PenTool,
    iconColor: 'from-purple-500 to-indigo-600',
    keyAchievements: [
      'Built a real-time hand gesture recognition system using OpenCV and MediaPipe.',
      'Implemented smooth stroke tracking using Deque data structures for continuous drawing.',
      'Improved drawing speed by 50% compared to traditional mouse-based drawing tools.',
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
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-4">
              <Folder className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group glass rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative gradient orb */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.iconColor} flex items-center justify-center mb-4`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.keyAchievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-full border border-primary/50 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                <Button variant="glow" size="sm" asChild className="w-fit">
                  <a href={project.github} className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    View Details
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* View More */}
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