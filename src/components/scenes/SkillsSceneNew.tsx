import { motion } from "framer-motion";

const skillCategories = [
  { label: "Languages", items: ["C++", "C", "Java", "Python"], icon: "⟨/⟩" },
  { label: "Paradigms", items: ["Data Structures", "Algorithms", "OOP", "SOLID", "STL", "Design Patterns"], icon: "◆" },
  { label: "FRAMEWORKS/TECHNOLOGIES", items: ["GStreamer", "MPEG-DASH"], icon: "⚙" },
  { label: "Tools", items: ["Docker", "Git", "GitLab", "Gerrit", "VS Code", "Jira", "Source Insight", "ClearCase", "Copilot", "GenAI", "Glogg"], icon: "⚡" },
  { label: "Build System", items: ["CMake", "Meson", "Ninja"], icon: "⛭" },
  { label: "OS", items: ["Linux", "WebOS", "Windows", "SLES15"], icon: "▣" },
];

const SkillsSceneNew = () => {
  return (
    <section className="relative h-full w-full overflow-y-auto overflow-x-hidden cinema-gradient py-12 md:py-8 lg:py-0">
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(43 80% 55% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(43 80% 55% / 0.4) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
        initial={{ scale: 2, rotate: 45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          style={{
            left: `${10 + (i * 7.5) % 90}%`,
            top: `${15 + (i * 13) % 70}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}


      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-[4vh] pb-[6vh]">
        <motion.div
          className="mb-6 lg:mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-muted-foreground text-xs tracking-[0.5em] uppercase mb-4 font-body">Arsenal</p>
          <h2 className="font-cinematic text-5xl md:text-6xl lg:text-8xl text-gold glow-gold">SKILLS</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              className="bg-secondary/30 border border-gold/10 p-4 lg:p-5 backdrop-blur-sm relative group"
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + catIdx * 0.12 }}
              whileHover={{ scale: 1.03, borderColor: "hsl(43 80% 55% / 0.3)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gold text-lg">{cat.icon}</span>
                <h3 className="font-elegant text-xs tracking-[0.3em] text-gold-dim uppercase">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, itemIdx) => (
                  <motion.span
                    key={item}
                    className="text-sm font-body text-foreground/80 bg-muted/50 border border-border px-3 py-1 hover:border-primary/30 hover:text-gold transition-colors duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + catIdx * 0.12 + itemIdx * 0.04 }}
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

export default SkillsSceneNew;
