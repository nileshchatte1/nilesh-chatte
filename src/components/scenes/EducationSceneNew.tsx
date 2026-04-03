import { motion } from "framer-motion";
import cdacLogo from "@/assets/cdac-logo.png";

const EducationSceneNew = () => {
  return (
    <section className="relative h-full w-full overflow-y-auto overflow-x-hidden cinema-gradient flex items-start md:items-center py-16 md:py-0" data-scroll-container>
      {/* Background logo */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 0.04, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img src={cdacLogo} alt="" className="w-[500px] h-[500px] object-contain" />
      </motion.div>

      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[3vh] letterbox-bar z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[3vh] letterbox-bar z-20" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-muted-foreground text-xs tracking-[0.5em] uppercase mb-4 font-body">The Origin Story</p>
          <h2 className="font-cinematic text-5xl md:text-6xl lg:text-8xl text-gold glow-gold">EDUCATION</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-10">
          <motion.div
            className="border-l-2 border-gold/30 pl-8 relative"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
            />
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-body mb-2">Sept 2021</p>
            <h3 className="font-cinematic text-3xl md:text-4xl text-foreground">CDAC ACTS PUNE</h3>
            <p className="font-elegant text-sm text-gold-dim tracking-wider mt-1">PG Diploma in Advanced Computing</p>
            <p className="text-foreground/60 text-sm mt-2 font-body">Graduated with 'A' grade • Rank 552 in CCAT Exam</p>
          </motion.div>

          <motion.div
            className="border-l-2 border-gold/30 pl-8 relative"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
            />
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-body mb-2">Sept 2020</p>
            <h3 className="font-cinematic text-3xl md:text-4xl text-foreground">UNIVERSITY OF PUNE</h3>
            <p className="font-elegant text-sm text-gold-dim tracking-wider mt-1">Bachelor of Engineering</p>
            <p className="text-foreground/60 text-sm mt-2 font-body">Graduated with 'Distinction'</p>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          className="max-w-3xl mx-auto mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="text-muted-foreground text-xs tracking-[0.5em] uppercase mb-6 font-body text-center">Achievements</p>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-secondary/30 border border-gold/10 p-5"
              whileHover={{ borderColor: "hsl(43 80% 55% / 0.3)", scale: 1.02 }}
            >
              <p className="text-foreground/80 text-sm font-body leading-relaxed">
                <span className="text-gold">★</span> Secured 552nd rank in CCAT exam, earning a place at CDAC ACTS Pune, India’s top CDAC institute
              </p>
            </motion.div>
            <motion.div
              className="bg-secondary/30 border border-gold/10 p-5"
              whileHover={{ borderColor: "hsl(43 80% 55% / 0.3)", scale: 1.02 }}
            >
              <p className="text-foreground/80 text-sm font-body leading-relaxed">
                <span className="text-gold">★</span> Cleared LG's Level 3 LSET exam, demonstrating advanced technical expertise
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSceneNew;
