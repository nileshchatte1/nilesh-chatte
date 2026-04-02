import { motion } from "framer-motion";

const ContactSceneNew = () => {
  return (
    <section className="relative h-full w-full overflow-hidden cinema-gradient flex items-center justify-center">
      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, hsl(43 80% 55% / 0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 text-center">
        <motion.p
          className="text-muted-foreground text-xs tracking-[0.5em] uppercase mb-8 font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Next Chapter Begins
        </motion.p>

        <motion.h2
          className="font-cinematic text-6xl md:text-8xl lg:text-9xl text-gold glow-gold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          LET'S CONNECT
        </motion.h2>

        <motion.div
          className="mt-10 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="mailto:nileshchatte1@gmail.com"
            className="block font-body text-foreground/70 hover:text-gold transition-colors duration-300 text-sm tracking-wider"
          >
            nileshchatte1@gmail.com
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
          className="mt-12 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="h-px w-12 bg-primary/30" />
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-body">Bangalore, India</p>
          <div className="h-px w-12 bg-primary/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSceneNew;
