import { useState, useCallback, useRef, useEffect } from "react";

export const useSceneManager = (totalScenes: number) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [direction, setDirection] = useState(0);
  const isTransitioning = useRef(false);
  const touchStartY = useRef(0);
  const touchTriggered = useRef(false);
  const atBoundaryCount = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning.current || index === currentScene) return;
      if (index < 0 || index >= totalScenes) return;
      isTransitioning.current = true;
      setDirection(index > currentScene ? 1 : -1);
      setCurrentScene(index);
      atBoundaryCount.current = 0;
      setTimeout(() => {
        isTransitioning.current = false;
      }, 1200);
    },
    [currentScene, totalScenes]
  );

  const next = useCallback(() => goTo(currentScene + 1), [currentScene, goTo]);
  const prev = useCallback(() => goTo(currentScene - 1), [currentScene, goTo]);

  const isScrollableElement = useCallback((el: HTMLElement) => {
    const { overflowY } = window.getComputedStyle(el);
    const allowsScroll = ["auto", "scroll", "overlay"].includes(overflowY) || el.hasAttribute("data-scroll-container");

    return allowsScroll && el.scrollHeight > el.clientHeight;
  }, []);

  const getScrollableElement = useCallback((): HTMLElement | null => {
    // Find the scrollable content area within the current scene
    const sceneEl = document.querySelector(".fixed.inset-0 section, .fixed.inset-0 > div > section");
    if (!sceneEl) return null;
    
    // Check if the scene itself or a scroll container inside it is scrollable
    const scrollContainers = sceneEl.querySelectorAll("[data-scroll-container], .overflow-y-auto, .overflow-auto");
    for (const el of scrollContainers) {
      const htmlEl = el as HTMLElement;
      if (isScrollableElement(htmlEl)) return htmlEl;
    }
    
    // Check if the section itself is scrollable
    const sectionEl = sceneEl as HTMLElement;
    if (isScrollableElement(sectionEl)) return sectionEl;
    
    return null;
  }, [isScrollableElement]);

  const isAtScrollBoundary = useCallback((scrollDir: "down" | "up"): boolean => {
    const el = getScrollableElement();
    if (!el) return true; // No scrollable content, allow transition

    const threshold = 5;
    if (scrollDir === "down") {
      return el.scrollTop + el.clientHeight >= el.scrollHeight - threshold;
    } else {
      return el.scrollTop <= threshold;
    }
  }, [getScrollableElement]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 30) return;
      
      const scrollDir = e.deltaY > 0 ? "down" : "up";
      const scrollable = getScrollableElement();
      
      if (scrollable && !isAtScrollBoundary(scrollDir)) {
        // Let the content scroll naturally
        return;
      }
      
      e.preventDefault();
      
      if (isAtScrollBoundary(scrollDir)) {
        atBoundaryCount.current++;
        // Require 2 consecutive boundary scrolls to trigger transition
        if (atBoundaryCount.current >= 2) {
          if (scrollDir === "down") next();
          else prev();
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " " || e.key === "PageDown") {
        if (!isAtScrollBoundary("down")) return;
        e.preventDefault();
        next();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (!isAtScrollBoundary("up")) return;
        e.preventDefault();
        prev();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchTriggered.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchTriggered.current) return;

      const diff = touchStartY.current - e.touches[0].clientY;
      if (Math.abs(diff) < 60) return;

      const scrollDir = diff > 0 ? "down" : "up";
      if (!isAtScrollBoundary(scrollDir)) return;

      e.preventDefault();
      touchTriggered.current = true;
      atBoundaryCount.current = 0;

      if (diff > 0) next();
      else prev();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchTriggered.current) {
        touchTriggered.current = false;
        return;
      }

      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return;
      
      const scrollDir = diff > 0 ? "down" : "up";
      if (!isAtScrollBoundary(scrollDir)) return;
      
      if (diff > 0) next();
      else prev();

      touchTriggered.current = false;
    };

    // Reset boundary count when user scrolls within content
    const handleScroll = () => {
      atBoundaryCount.current = 0;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [next, prev, isAtScrollBoundary, getScrollableElement]);

  return { currentScene, direction, goTo, next, prev };
};
