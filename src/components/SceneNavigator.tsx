import { motion } from "framer-motion";

interface SceneNavigatorProps {
  totalScenes: number;
  currentScene: number;
  onNavigate: (index: number) => void;
  labels: string[];
}

const SceneNavigator = ({ totalScenes, currentScene, onNavigate, labels }: SceneNavigatorProps) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3">
      {Array.from({ length: totalScenes }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <motion.span
            className="text-xs font-body tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold-dim"
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
