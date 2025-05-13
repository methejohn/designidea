import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import gsap from 'gsap';
import { ReactLenis } from 'lenis/react';
import { ViewportProvider } from './contexts/ViewportContext';
import ScrollToTop from '@/components/common/ScrollToTop';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Eternos from './pages/Eternos';

function App() {
  const mainVidRef = useRef();
  const lenisRef = useRef();
  const [lenisInstance, setLenisInstance] = useState(null);

  // lenis 기본 설정
  useEffect(() => {
    function update(time) {
      if (lenisRef.current?.lenis) {
        setLenisInstance(lenisRef.current.lenis);
        lenisRef.current.lenis.raf(time * 1000);
      }
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ViewportProvider>
      <BrowserRouter>
        <ReactLenis options={{ autoRaf: false }} root ref={lenisRef}>
          <ScrollToTop lenis={lenisInstance} />
          <Header mainVidRef={mainVidRef} lenisRef={lenisRef} />
          <Routes>
            <Route index element={<Homepage mainVidRef={mainVidRef} />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="work/eternos" element={<Eternos />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer />
        </ReactLenis>
      </BrowserRouter>
    </ViewportProvider>
  );
}

export default App;
