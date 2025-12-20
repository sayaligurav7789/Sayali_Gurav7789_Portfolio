import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {Code2, Cpu, Database, Globe, Sparkles, GraduationCap, MapPin, Calendar, Wrench,} from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  {
    name: 'Languages',
    icon: Code2,
    items: ['C', 'C++', 'JavaScript', 'Java', 'Python'],
  },
  {
    name: 'Technologies',
    icon: Cpu,
    items: [
      'HTML',
      'CSS',
      'MySQL',
      'MongoDB',
      'Firebase',
      'AR',
      'VR',
      '3D Modelling',
    ],
  },
  {
    name: 'Libraries & Frameworks',
    icon: Globe,
    items: ['React.js', 'Node.js', 'Express.js', 'OpenCV', 'Swing', 'AWT'],
  },
  {
    name: 'Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Windows', 'Linux'],
  },
  {
    name: 'CS Fundamentals',
    icon: Database,
    items: ['DSA', 'OOP', 'CN', 'OS','DBMS'],
  },
];

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">
                About Me
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Crafting <span className="text-gradient">Digital Experiences</span>
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate developer on a journey to create meaningful
              technology solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side — Education & Stats */}
            <div className="space-y-6">
              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.03, rotateY: 5, z: 50 }}
                className="group relative rounded-2xl p-6 border border-border glass"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xl font-semibold group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                        Education
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        Current Academic Journey
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          B.Tech in Computer Science Engineering
                        </h4>
                        <p className="text-primary font-medium">
                          D. Y. Patil College of Engineering and Technology,
                          Kolhapur
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Shivaji University, Kolhapur
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>Aug 2023 - July 2027</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>Waghurde, Panhala, Kolhapur-416205</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-border">
                        <div className="text-2xl font-bold text-gradient">
                          CGPA: 9.23
                        </div>
                        <span className="text-xs text-muted-foreground">
                          Currently Pursuing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* floating animation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                />
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[{ value: '10+', label: 'Projects' }, { value: '5+', label: 'Technologies' }].map(
                  (stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{
                        scale: 1.07,
                        rotateY: 6,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 12,
                        },
                      }}
                      className="group relative rounded-xl p-6 text-center border border-border bg-card dark:bg-[#0b1120] shadow-lg transition-all duration-300"
                      style={{ transformStyle: "preserve-3d" }}
                    >

                      {/* Hover gradient */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 to-blue-600/10" />

                      {/* Hover border */}
                      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-500/40 transition-colors duration-500 pointer-events-none" />

                      <div className="relative z-10">
                        <div className="text-2xl font-bold text-gradient">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.07,
                    rotateY: 6,
                    transition: {
                      type: 'spring',
                      stiffness: 200,
                      damping: 12,
                    },
                  }}
                  className="group relative rounded-2xl p-6 border border-border glass"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 to-blue-600/10" />

                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-500/40 transition-colors duration-500 pointer-events-none" />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{skill.name}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-muted-foreground border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
