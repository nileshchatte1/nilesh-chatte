import { useState, useCallback, useRef, useEffect } from "react";

export const useSceneManager = (totalScenes: number) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = prev, 1 = next
  const isTransitioning = useRef(false);
  const touchStartY = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning.current || index === currentScene) return;
      if (index < 0 || index >= totalScenes) return;
      isTransitioning.current = true;
      setDirection(index > currentScene ? 1 : -1);
      setCurrentScene(index);
      setTimeout(() => {
        isTransitioning.current = false;
      }, 1200);
    },
    [currentScene, totalScenes]
  );

  const next = useCallback(() => goTo(currentScene + 1), [currentScene, goTo]);
  const prev = useCallback(() => goTo(currentScene - 1), [currentScene, goTo]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 30) return;
      if (e.deltaY > 0) next();
      else prev();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return;
      if (diff > 0) next();
      else prev();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [next, prev]);

  return { currentScene, direction, goTo, next, prev };
};
