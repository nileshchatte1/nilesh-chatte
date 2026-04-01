import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

type TransitionType = "zoom-out" | "dissolve" | "warp" | "slide-up" | "rotate" | "galaxy" | "cinematic-fade";

interface SceneTransitionProps {
  children: ReactNode;
  sceneKey: string;
  direction: number;
  transition: TransitionType;
}

const getVariants = (type: TransitionType, direction: number) => {
  switch (type) {
    case "zoom-out":
      return {
        initial: { scale: 3, opacity: 0, filter: "blur(20px)" },
        animate: { scale: 1, opacity: 1, filter: "blur(0px)" },
        exit: { scale: 0.1, opacity: 0, filter: "blur(30px)" },
      };
    case "galaxy":
      return {
        initial: { scale: 0.01, opacity: 0, rotate: 180 },
        animate: { scale: 1, opacity: 1, rotate: 0 },
        exit: { scale: 20, opacity: 0, rotate: -90 },
      };
    case "warp":
      return {
        initial: { scaleY: 0, opacity: 0, originY: direction > 0 ? 0 : 1 },
        animate: { scaleY: 1, opacity: 1 },
        exit: { scaleY: 0, opacity: 0, originY: direction > 0 ? 1 : 0 },
      };
    case "slide-up":
      return {
        initial: { y: direction > 0 ? "100%" : "-100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: direction > 0 ? "-100%" : "100%", opacity: 0 },
      };
    case "rotate":
      return {
        initial: { rotateY: direction > 0 ? 90 : -90, opacity: 0, scale: 0.8 },
        animate: { rotateY: 0, opacity: 1, scale: 1 },
        exit: { rotateY: direction > 0 ? -90 : 90, opacity: 0, scale: 0.8 },
      };
    case "cinematic-fade":
      return {
        initial: { opacity: 0, scale: 1.1 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
      };
    case "dissolve":
    default:
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };
  }
};

const SceneTransition = ({ children, sceneKey, direction, transition }: SceneTransitionProps) => {
  const variants = getVariants(transition, direction);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={sceneKey}
        className="fixed inset-0 w-full h-full"
        initial={variants.initial}
        animate={variants.animate}
        exit={variants.exit}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{ perspective: 1200 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SceneTransition;
