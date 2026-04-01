import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import cdacLogo from "@/assets/cdac-logo.png";

const EducationScene = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden cinema-gradient flex items-center">
      {/* Background logo */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 0.03, scale: 1 } : {}}
        transition={{ duration: 2 }}
      >
        <img src={cdacLogo} alt="" className="w-[600px] h-[600px] object-contain" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-muted-foreground text-xs tracking-[0.5em] uppercase mb-4 font-body">
            The Origin Story
          </p>
          <h2 className="font-cinematic text-6xl md:text-8xl text-gold glow-gold">
            EDUCATION
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          {/* CDAC */}
          <motion.div
            className="border-l-2 border-gold/30 pl-8 relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-body mb-2">
              Sept 2021
            </p>
            <h3 className="font-cinematic text-3xl md:text-4xl text-foreground">
              CDAC ACTS PUNE
            </h3>
            <p className="font-elegant text-sm text-gold-dim tracking-wider mt-1">
              PG Diploma in Advanced Computing
            </p>
            <p className="text-foreground/60 text-sm mt-2 font-body">
              Graduated with 'A' grade • Rank 552 in CCAT Exam
            </p>
          </motion.div>

          {/* University */}
          <motion.div
            className="border-l-2 border-gold/30 pl-8 relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-body mb-2">
              Sept 2020
            </p>
            <h3 className="font-cinematic text-3xl md:text-4xl text-foreground">
              UNIVERSITY OF PUNE
            </h3>
            <p className="font-elegant text-sm text-gold-dim tracking-wider mt-1">
              Bachelor of Engineering
            </p>
            <p className="text-foreground/60 text-sm mt-2 font-body">
              Graduated with 'Distinction'
            </p>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          className="max-w-3xl mx-auto mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-muted-foreground text-xs tracking-[0.5em] uppercase mb-6 font-body text-center">
            Achievements
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary/30 border border-gold/10 p-5">
              <p className="text-foreground/80 text-sm font-body leading-relaxed">
                <span className="text-gold">★</span> Secured 552nd rank in CCAT exam — CDAC ACTS Pune, India's top CDAC institute
              </p>
            </div>
            <div className="bg-secondary/30 border border-gold/10 p-5">
              <p className="text-foreground/80 text-sm font-body leading-relaxed">
                <span className="text-gold">★</span> Cleared LG's Level 3 LSET exam — Advanced technical expertise
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationScene;
