import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  { label: "Languages", items: ["C++", "C", "Java", "Python"] },
  { label: "Paradigms", items: ["Data Structures", "Algorithms", "OOP", "SOLID", "STL"] },
  { label: "Frameworks", items: ["GStreamer", "MPEG-DASH"] },
  { label: "Tools", items: ["Docker", "Git", "GitHub", "Gerrit", "VS Code", "Jira", "CMake", "Meson"] },
  { label: "OS", items: ["Linux", "WebOS", "Windows"] },
];

const SkillsScene = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden cinema-gradient flex items-center">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(43 80% 55% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(43 80% 55% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-muted-foreground text-xs tracking-[0.5em] uppercase mb-4 font-body">
            Arsenal
          </p>
          <h2 className="font-cinematic text-6xl md:text-8xl text-gold glow-gold">
            SKILLS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              className="bg-secondary/30 border border-gold/10 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + catIdx * 0.15 }}
            >
              <h3 className="font-elegant text-xs tracking-[0.3em] text-gold-dim uppercase mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, itemIdx) => (
                  <motion.span
                    key={item}
                    className="text-sm font-body text-foreground/80 bg-muted/50 border border-border px-3 py-1"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + catIdx * 0.15 + itemIdx * 0.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsScene;
