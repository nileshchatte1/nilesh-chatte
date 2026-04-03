import { motion } from "framer-motion";

interface ExperienceSceneNewProps {
  logo: string;
  company: string;
  role: string;
  period: string;
  skills: string;
  projects: { name: string; details: string[] }[];
  index: number;
}

const ExperienceSceneNew = ({ logo, company, role, period, skills, projects, index }: ExperienceSceneNewProps) => {
  const isEven = index % 2 === 0;

  return (
    <section className="relative h-full w-full overflow-y-auto overflow-x-hidden cinema-gradient flex items-start md:items-center py-20 md:py-0" data-scroll-container>
      {/* Large background logo */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.3, rotate: isEven ? -15 : 15 }}
        animate={{ opacity: 0.06, scale: 1.2, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img src={logo} alt="" className="w-[600px] h-[600px] object-contain" />
      </motion.div>

      {/* Cinematic light streak */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-full pointer-events-none"
        style={{
          background: `linear-gradient(${isEven ? '135deg' : '225deg'}, transparent 0%, hsl(43 80% 55% / 0.04) 40%, transparent 80%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />


      <div className="relative z-10 container mx-auto px-6 md:px-12">
        {/* Chapter number */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: isEven ? -60 : 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-cinematic text-6xl md:text-7xl lg:text-9xl text-primary/10">
            {String(index + 1).padStart(2, '0')}
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Company info */}
          <div>
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.img
                src={logo}
                alt={company}
                className="w-14 h-14 object-contain"
                loading="lazy"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div>
                <h2 className="font-cinematic text-3xl md:text-4xl lg:text-6xl text-gold glow-gold-subtle">
                  {company}
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="font-elegant text-sm tracking-[0.2em] text-foreground/80 uppercase">{role}</p>
              <div className="flex items-center gap-3 mt-2">
                <motion.div
                  className="h-px bg-primary/40"
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
                <p className="text-muted-foreground text-sm font-body">{period}</p>
              </div>
              <p className="text-muted-foreground text-xs mt-3 tracking-wider font-body">{skills}</p>
            </motion.div>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            {projects.map((project, pIdx) => (
              <motion.div
                key={project.name}
                className="border-l border-gold/20 pl-6"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + pIdx * 0.2 }}
              >
                <h3 className="font-elegant text-lg text-gold-dim tracking-wider mb-3">{project.name}</h3>
                <ul className="space-y-2">
                  {project.details.map((detail, dIdx) => (
                    <motion.li
                      key={dIdx}
                      className="text-foreground/70 text-sm font-body leading-relaxed"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + pIdx * 0.2 + dIdx * 0.1 }}
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

export default ExperienceSceneNew;
