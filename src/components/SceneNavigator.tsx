import { motion } from "framer-motion";

interface SceneNavigatorProps {
  totalScenes: number;
  currentScene: number;
  onNavigate: (index: number) => void;
  labels: string[];
}

const SceneNavigator = ({ totalScenes, currentScene, onNavigate, labels }: SceneNavigatorProps) => {
  return (
    <div className="pointer-events-none fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-background/55 px-3 py-2 backdrop-blur-md md:bottom-auto md:left-auto md:right-6 md:top-1/2 md:flex-col md:items-end md:gap-3 md:rounded-none md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none md:-translate-y-1/2 md:translate-x-0">
      {Array.from({ length: totalScenes }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className="pointer-events-auto group flex items-center gap-3 cursor-pointer"
        >
          <motion.span
            className="hidden text-xs font-body tracking-wider uppercase opacity-0 transition-opacity duration-300 text-gold-dim group-hover:opacity-100 md:block"
            initial={false}
          >
            {labels[i]}
          </motion.span>
          <motion.div
            className="rounded-full transition-all duration-300"
            animate={{
              width: currentScene === i ? 24 : 8,
              height: 8,
              backgroundColor: currentScene === i
                ? "hsl(43 80% 55%)"
                : "hsl(43 80% 55% / 0.25)",
            }}
          />
        </button>
      ))}
    </div>
  );
};

export default SceneNavigator;
