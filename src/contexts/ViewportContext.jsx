import { createContext, useContext, useEffect, useState } from 'react';

const ViewportContext = createContext();

function ViewportProvider({ children }) {
  const [viewport, setViewport] = useState(getViewport());

  function getViewport() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      type: width <= 1000 ? 'mobile' : 'desktop',
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setViewport(getViewport());
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ViewportContext.Provider value={viewport}>
      {children}
    </ViewportContext.Provider>
  );
}

function useViewport() {
  const context = useContext(ViewportContext);
  if (context === undefined)
    throw new Error('ViewportContext was used outside ViewportProvider');

  return context;
}

export { ViewportProvider, useViewport };
