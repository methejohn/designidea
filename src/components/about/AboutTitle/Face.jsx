import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

function Face({ num, isMobile }) {
  const faceRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [initial, setInitial] = useState({ x: 0, y: 0 });

  function handleMouseDown(e) {
    if (isMobile) return;

    const face = faceRef.current;
    if (!face) return;

    const match = face.style.transform.match(/-?\d+/g);
    const [x = 0, y = 0] = match ? match.map(Number) : [0, 0];

    setOffset({ x, y });
    setInitial({ x: e.clientX, y: e.clientY });
    setIsDragging(true);
    face.style.cursor = 'grabbing';
  }

  function handleMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();

    const face = faceRef.current;
    if (!face) return;

    const newX = e.clientX - initial.x + offset.x;
    const newY = e.clientY - initial.y + offset.y;

    face.style.transform = `translate(${newX}px, ${newY}px)`;
  }

  function handleMouseUp() {
    if (!isDragging) return;

    const face = faceRef.current;
    if (face) {
      face.style.cursor = 'grab';
    }
    setIsDragging(false);
  }

  useEffect(() => {
    if (isDragging && !isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isMobile]);

  // face 위치 초기화
  useEffect(() => {
    if (!isMobile) return;

    const face = faceRef.current;
    if (!face) return;

    const hasTransform = face.style.transform;

    // 모바일로 실행했을때 초기화 방지
    if (!hasTransform) return;

    gsap.set(face, {
      clearProps: 'all',
    });
  }, [isMobile]);

  return (
    <div ref={faceRef} onMouseDown={handleMouseDown}>
      <img src={`/face${num}.png`} loading="lazy" alt={`face${num}`} />
    </div>
  );
}

export default Face;
