import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useViewport } from '@/contexts/ViewportContext';

function ScrollToTop({ lenis }) {
  const { pathname } = useLocation();
  const viewport = useViewport();
  const previousTypeRef = useRef(viewport.type);

  function forceScrollToTop() {
    if (lenis) {
      if (lenis.isStopped) {
        lenis.start();
      }
      lenis.scrollTo(0, { immediate: true });
    }
  }

  // 패스 변경시
  useEffect(() => {
    forceScrollToTop();
  }, [pathname]);

  // 데스크탑 모바일 간 전환시
  useEffect(() => {
    if (previousTypeRef.current != viewport.type) {
      forceScrollToTop();
      previousTypeRef.current = viewport.type;
    }
  }, [viewport.type]);

  return null;
}

export default ScrollToTop;
