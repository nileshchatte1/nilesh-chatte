import { motion } from "framer-motion";
import nileshPhoto from "@/assets/nilesh-photo.png";

const IntroScene = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-cinema-dark flex items-center justify-center">
      {/* Animated photo background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 1.05, opacity: 0.25 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img
          src={nileshPhoto}
          alt="Nilesh Chatte"
          className="h-full w-auto object-cover"
          style={{ filter: "grayscale(60%) contrast(1.2)" }}
        />
      </motion.div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

      {/* Letterbox bars */}
      <motion.div
        className="absolute top-0 left-0 right-0 letterbox-bar z-20"
        initial={{ height: "50vh" }}
        animate={{ height: "3vh" }}
        transition={{ duration: 2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 letterbox-bar z-20"
        initial={{ height: "50vh" }}
        animate={{ height: "3vh" }}
        transition={{ duration: 2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Cinematic vignette */}
      <div className="absolute inset-0 cinema-vignette z-10" />

      {/* Content - pushed to bottom half */}
      <div className="relative z-30 text-center flex flex-col items-center justify-end h-full pb-[8vh]">
        <motion.p
          className="text-muted-foreground text-sm tracking-[0.5em] uppercase mb-4 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.2 }}
        >
          A Journey Through Code
        </motion.p>

        <motion.h1
          className="font-cinematic text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-gold glow-gold leading-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          NILESH
        </motion.h1>

        <motion.h2
          className="font-cinematic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-foreground tracking-[0.3em] mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          CHATTE
        </motion.h2>

        <motion.div
          className="mt-6 flex items-center justify-center gap-4"
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

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 3.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        >
          <p className="text-muted-foreground text-xs tracking-[0.4em] uppercase mb-2">Scroll to begin</p>
          <motion.div
            className="w-5 h-8 border border-primary/30 rounded-full mx-auto flex justify-center pt-1"
          >
            <motion.div
              className="w-1 h-2 bg-primary/50 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroScene;
