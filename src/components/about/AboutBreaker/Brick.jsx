import React, { forwardRef, useEffect, useRef } from 'react';
import { useViewport } from '@/contexts/ViewportContext';
import styles from './Brick.module.scss';

function Brick({ image, text, name }, ref) {
  const brickBoxRef = useRef(null);
  const brickRef = useRef(null);
  const imgRef = useRef(null);

  const viewport = useViewport();
  const isMobile = viewport.type === 'mobile';

  // 외부 ref 연결
  useEffect(() => {
    if (!ref) return;

    if (typeof ref === 'function') {
      ref(brickRef.current);
    } else {
      ref.current = brickRef.current;
    }
  }, [ref]);

  // 이미지 사이즈 계산
  useEffect(() => {
    const img = imgRef.current;
    const box = brickBoxRef.current;

    if (!img || !box) return;

    function setBrickSize() {
      const { naturalWidth, naturalHeight } = img;
      if (!naturalWidth || !naturalHeight) return;

      let width, height;

      if (isMobile) {
        width = `${naturalWidth}px`;
        height = `${naturalHeight}px`;

        if (viewport.width <= 640) {
          width = `${naturalWidth / 2}px`;
          height = `${naturalHeight / 2}px`;
        }

        brickRef.current.hidden = false;
      } else {
        // 데스크톱: 이미지 비율을 기반으로 vw 계산
        width = `${(img.naturalWidth / 1920) * 100}vw`;
        height = `${(img.naturalHeight / 1920) * 100}vw`;
      }

      box.style.width = width;
      box.style.height = height;
    }

    if (img.complete) {
      setBrickSize();
    } else {
      img.addEventListener('load', setBrickSize);
    }

    return () => {
      if (img) {
        img.removeEventListener('load', setBrickSize);
      }
    };
  }, [image, isMobile, viewport.width]);

  return (
    <div className={styles.brickBox} ref={brickBoxRef}>
      <div className={styles.brick} ref={brickRef}>
        <div className={styles.img}>
          <img ref={imgRef} src={image} alt="brick-img" loading="lazy" />
        </div>
        {text && (
          <div className={styles.textBox}>
            <span className={name}>
              {text.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default forwardRef(Brick);
