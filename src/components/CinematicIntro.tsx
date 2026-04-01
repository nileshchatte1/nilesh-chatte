import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const CinematicIntro = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-cinema-dark flex items-center justify-center">
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </motion.div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 cinema-vignette" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />

      {/* Letterbox bars */}
      <motion.div
        className="absolute top-0 left-0 right-0 letterbox-bar z-10"
        initial={{ height: "50vh" }}
        animate={{ height: "3vh" }}
        transition={{ duration: 2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 letterbox-bar z-10"
        initial={{ height: "50vh" }}
        animate={{ height: "3vh" }}
        transition={{ duration: 2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Content */}
      <div className="relative z-20 text-center">
        <motion.p
          className="text-muted-foreground text-sm tracking-[0.5em] uppercase mb-6 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.2 }}
        >
          A Journey Through Code
        </motion.p>

        <motion.h1
          className="font-cinematic text-7xl md:text-9xl lg:text-[12rem] text-gold glow-gold leading-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          NILESH
        </motion.h1>

        <motion.h2
          className="font-cinematic text-4xl md:text-6xl lg:text-8xl text-foreground tracking-[0.3em] mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          CHATTE
        </motion.h2>

        <motion.div
          className="mt-8 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <div className="h-px w-16 bg-primary/40" />
          <p className="font-elegant text-sm tracking-[0.3em] text-gold-dim uppercase">
            Software Developer
          </p>
          <div className="h-px w-16 bg-primary/40" />
        </motion.div>

        <motion.p
          className="mt-12 text-muted-foreground text-xs tracking-[0.4em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          Scroll to begin
        </motion.p>

        <motion.div
          className="mt-4 w-px h-10 bg-primary/30 mx-auto"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 4, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
      </div>
    </section>
  );
};

export default CinematicIntro;
