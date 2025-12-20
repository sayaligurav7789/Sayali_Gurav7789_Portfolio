import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Chief Executive & Mentor",
    company: "Coding Club, DYPCET",
    period: "Aug 2024 - Present",
    description:
      "Led the coding club by mentoring peers, organizing technical workshops, and promoting a strong coding culture within the college. Actively guided students in development and problem-solving practices.",
    skills: ["Leadership", "Mentorship", "Event Management", "Community Building"],
  },
  {
    title: 'Open Source Contributor',
    company: 'Various Projects',
    period: '2023 - Present',
    description: 'Contributing to open-source projects, fixing bugs, and adding new features. Active participation in developer communities.',
    skills: ['GitHub', 'Documentation', 'Code Review', 'Testing'],
  },
  {
    title: "Finalist – National Level Codeathon",
    company: "Hack to the Future (GPU Accelerated Computing Codeathon)",
    period: "19 Oct 2024 - 28 Oct 2024",
    description:
      "Developed CUDA-based parallel computing solutions using C++ and Python. Gained hands-on experience with GPU acceleration, performance optimization, and competitive hackathon environments.",
    skills: ["CUDA", "C++", "Python", "Parallel Computing", "Hackathons"],
  },
  {
    title: "Freelancer",
    company: "Independent",
    period: "Jan 2025 - Jun 2025",
    description:
      "Delivered small-scale development projects for clients, focusing on timely delivery, requirement analysis, and clear client communication. Strengthened problem-solving and end-to-end project execution skills.",
    skills: ["Web Development", "Client Communication", "Problem Solving", "Project Delivery"],
  },
];

export const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-4">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional experiences and contributions
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0 group">

                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />

                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-primary glow-primary" />

                {/* 3D Hover Card */}
                <motion.div
                 whileHover={{
                  scale: 1.05,
                  rotateY: 4,
                  transition: {
                    duration: 0.4,   // slow animation speed
                    ease: "easeOut", // smooth motion
                  },
                }}
                  className="group relative rounded-2xl p-6 border border-border glass transition-all duration-300 ml-4"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Hover glow overlay */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 to-blue-600/10" />

                  {/* Hover border glow */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-500/40 transition-colors duration-500 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
