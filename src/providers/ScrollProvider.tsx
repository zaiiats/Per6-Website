/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Community from '../components/Community/Community';

interface ScrollContextType {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  sections: any[];
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: any) => {
  const sections = useMemo(
    () => [
      { component: <Hero />, name: 'Hero' },
      { component: <Projects />, name: 'Projects' },
      { component: <Community />, name: 'Community' },
    ],
    []
  );
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = sections.length;
  const timer = useRef<number | null>(null);
  const isUpdating = useRef(false);

  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const SWIPE_THRESHOLD = 50;

  const changePage = useCallback(
    (direction: 'up' | 'down') => {
      if (isUpdating.current) return;
      if (timer.current) {
        clearTimeout(timer.current);
      }
      isUpdating.current = true;
      setCurrentPage((prev) => {
        let newPage = prev;
        if (direction === 'down' && prev < totalPages - 1) newPage = prev + 1;
        if (direction === 'up' && prev > 0) newPage = prev - 1;
        return newPage;
      });
      timer.current = window.setTimeout(() => {
        isUpdating.current = false;
      }, 600);
    },
    [totalPages]
  );

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      if (event.deltaY > 0) changePage('down');
      else if (event.deltaY < 0) changePage('up');
    },
    [changePage]
  );

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') changePage('down');
      if (event.key === 'ArrowUp') changePage('up');
    },
    [changePage]
  );

  const handleTouchStart = useCallback((event: TouchEvent) => {
    touchStartY.current = event.touches[0].clientY;
    touchEndY.current = null; // Reset touch end
  }, []);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    touchEndY.current = event.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStartY.current !== null && touchEndY.current !== null) {
      const distance = touchStartY.current - touchEndY.current;

      if (Math.abs(distance) > SWIPE_THRESHOLD) {
        if (distance > 0) {
          changePage('down');
        } else {
          changePage('up');
        }
      }
    }
  }, [changePage]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyPress);
    
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
      
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleScroll, handleKeyPress, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return (
    <ScrollContext.Provider value={{ currentPage, setCurrentPage, sections }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  return context as ScrollContextType;
};
