import { createContext, ReactNode, useContext } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Community from '../components/Community/Community';

interface ScrollContextType {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  sections: ReactNode[]
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({children}:any) => {
  const sections = useMemo(
    () => [<Hero />, <Projects />, <About />, <Community />],
    []
  );
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = sections.length;
  const timer = useRef<number | null>(null);
  const isUpdating = useRef(false);

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

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleScroll, handleKeyPress]);

  return (
    <ScrollContext.Provider value={{currentPage, setCurrentPage, sections}}>
      {children}
    </ScrollContext.Provider>
  )
}

export const useScroll = () => {
  const context = useContext(ScrollContext);
  return context as ScrollContextType;
};
