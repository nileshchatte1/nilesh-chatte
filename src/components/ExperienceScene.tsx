import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ExperienceSceneProps {
  logo: string;
  company: string;
  role: string;
  period: string;
  skills: string;
  projects: {
    name: string;
    details: string[];
  }[];
  index: number;
}

const ExperienceScene = ({ logo, company, role, period, skills, projects, index }: ExperienceSceneProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const direction = index % 2 === 0 ? -1 : 1;

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden cinema-gradient flex items-center">
      {/* Background logo watermark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.5, rotate: direction * 10 }}
        animate={isInView ? { opacity: 0.04, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img src={logo} alt="" className="w-[500px] h-[500px] object-contain" />
      </motion.div>

      {/* Cinematic light streak */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-full"
        style={{
          background: `linear-gradient(${direction > 0 ? '135deg' : '225deg'}, transparent 0%, hsl(43 80% 55% / 0.03) 50%, transparent 100%)`,
        }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20">
        {/* Chapter number */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: direction * 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="font-cinematic text-8xl md:text-9xl text-primary/10">
            {String(index + 1).padStart(2, '0')}
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Company info */}
          <div>
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img src={logo} alt={company} className="w-14 h-14 object-contain" loading="lazy" />
              <div>
                <h2 className="font-cinematic text-4xl md:text-6xl text-gold glow-gold-subtle">
                  {company}
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="font-elegant text-sm tracking-[0.2em] text-foreground/80 uppercase">
                {role}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="h-px w-8 bg-primary/40" />
                <p className="text-muted-foreground text-sm font-body">{period}</p>
              </div>
              <p className="text-muted-foreground text-xs mt-3 tracking-wider font-body">
                {skills}
              </p>
            </motion.div>
          </div>

          {/* Right: Projects */}
          <div className="space-y-8">
            {projects.map((project, pIdx) => (
              <motion.div
                key={project.name}
                className="border-l border-gold/20 pl-6"
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 + pIdx * 0.2 }}
              >
                <h3 className="font-elegant text-lg text-gold-dim tracking-wider mb-3">
                  {project.name}
                </h3>
                <ul className="space-y-2">
                  {project.details.map((detail, dIdx) => (
                    <motion.li
                      key={dIdx}
                      className="text-foreground/70 text-sm font-body leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.1 + pIdx * 0.2 + dIdx * 0.1 }}
                    >
                      <span className="text-primary/50 mr-2">▸</span>
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceScene;
