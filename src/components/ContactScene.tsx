import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactScene = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden cinema-gradient flex items-center justify-center">
      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[3vh] letterbox-bar z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-[3vh] letterbox-bar z-10" />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, hsl(43 80% 55% / 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 text-center">
        <motion.p
          className="text-muted-foreground text-xs tracking-[0.5em] uppercase mb-8 font-body"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The Next Chapter Begins
        </motion.p>

        <motion.h2
          className="font-cinematic text-6xl md:text-8xl lg:text-9xl text-gold glow-gold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          LET'S CONNECT
        </motion.h2>

        <motion.div
          className="mt-10 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="mailto:nileshchatte1@gmail.com"
            className="block font-body text-foreground/70 hover:text-gold transition-colors duration-300 text-sm tracking-wider"
          >
            nileshchatte1@gmail.com
          </a>
          <a
            href="tel:+917387818554"
            className="block font-body text-foreground/70 hover:text-gold transition-colors duration-300 text-sm tracking-wider"
          >
            +91 7387818554
          </a>
          <a
            href="https://linkedin.com/in/nilesh-chatte/"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-body text-foreground/70 hover:text-gold transition-colors duration-300 text-sm tracking-wider"
          >
            linkedin.com/in/nilesh-chatte
          </a>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.4 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="h-px w-12 bg-primary/30" />
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-body">
            Bangalore, India
          </p>
          <div className="h-px w-12 bg-primary/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactScene;
