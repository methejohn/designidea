import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useViewport } from '@/contexts/ViewportContext';
import Gnb from '../Gnb';
import styles from './Header.module.scss';

function Header({ mainVidRef, lenisRef }) {
  const [isInvert, setIsInvert] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const lastScrollRef = useRef(0);
  const scrollUpdateRef = useRef(false);
  const headerRef = useRef(null);
  const location = useLocation();

  const viewport = useViewport();
  const isMobile = viewport.type === 'mobile';

  useEffect(() => {
    // 인덱스 페이지에서 헤더 색 변경
    setIsInvert(location.pathname !== '/');

    // path 바뀔 시에 모바일 메뉴 닫기
    if (isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location.pathname]);

  // 모바일에서 데스크탑 전환시 모바일 메뉴 닫기
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  // 스크롤시 헤더 사라지는 효과 및 색 변경
  useEffect(() => {
    function handleScroll() {
      if (!scrollUpdateRef.current) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          if (location.pathname === '/') {
            if (
              mainVidRef.current &&
              currentScroll > mainVidRef.current.offsetHeight
            ) {
              setIsInvert(true);
            } else {
              setIsInvert(false);
            }
          }
          if (currentScroll > lastScrollRef.current && currentScroll > 0) {
            setIsHidden(true);
          } else if (
            currentScroll < lastScrollRef.current ||
            currentScroll === 0
          ) {
            setIsHidden(false);
          }
          lastScrollRef.current = currentScroll;
          scrollUpdateRef.current = false;
        });
        scrollUpdateRef.current = true;
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mainVidRef, location.pathname]);

  // 메뉴 클릭시 lenis 및 body 스타일 설정
  useEffect(() => {
    const body = document.body;
    body.classList.toggle('hidden', isMenuOpen);

    const lenis = lenisRef?.current?.lenis;
    if (lenis) isMenuOpen ? lenis.stop() : lenis.start();
  }, [isMenuOpen, lenisRef]);

  function handleClick() {
    setIsMenuOpen((open) => !open);
  }

  return (
    <header
      className={`${styles.header} ${isInvert ? styles.invert : ''} ${
        isHidden ? styles.hidden : ''
      }${isMobile && isMenuOpen ? 'mobile' : ''}`}
      ref={headerRef}
    >
      <h1>
        <Link to="/">
          <svg
            width="254"
            height="33"
            viewBox="0 0 254 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_405)">
              <path
                d="M161.076 0.716797H154.737V31.9533H161.076V0.716797Z"
                fill="white"
              />
              <path
                d="M179.421 0.716768H166.734V31.9533H179.421C188.109 31.9533 194.417 25.121 194.417 15.7085C194.417 7.43993 187.689 0.712402 179.421 0.712402V0.716768ZM179.421 26.697H173.077V5.99925H179.421C184.275 5.99925 188.078 10.5396 188.078 16.3328C188.078 22.1261 184.197 26.697 179.421 26.697Z"
                fill="white"
              />
              <path
                d="M220.074 26.7493H197.962V31.9532H220.074V26.7493Z"
                fill="white"
              />
              <path
                d="M242.13 0.716797H234.429L222.558 31.9533H229.124L231.857 24.7674H244.705L247.434 31.9533H254L242.13 0.716797ZM233.822 19.5853L238.279 7.85906L242.737 19.5853H233.826H233.822Z"
                fill="white"
              />
              <path
                d="M209.016 0.742891C202.664 0.742891 197.495 5.72414 197.495 11.8492C197.495 17.9743 202.664 22.9555 209.016 22.9555C213.508 22.9555 217.586 20.4321 219.472 16.503H212.919C211.875 17.7516 210.492 18.437 209.02 18.437C206.68 18.437 204.589 16.6645 203.816 14.0233L203.76 13.8225H214.294H220.362C220.485 13.1502 220.546 12.491 220.546 11.8448C220.546 5.71977 215.377 0.738525 209.025 0.738525L209.016 0.742891ZM203.755 9.87591L203.812 9.67509C204.585 7.03384 206.676 5.26138 209.016 5.26138C211.356 5.26138 213.447 7.03384 214.22 9.67509L214.277 9.87591H203.751H203.755Z"
                fill="white"
              />
              <path
                d="M0 31.9531V0.830078H10.0585C19.1304 0.830078 24.5002 6.67573 24.5002 16.3501C24.5002 26.0245 19.1261 31.9531 9.66999 31.9531H0ZM9.41242 28.5173C17.0655 28.5173 20.7195 23.9158 20.7195 16.3501C20.7195 8.78436 17.0655 4.27024 9.80097 4.27024H3.868V28.5129H9.41242V28.5173Z"
                fill="white"
              />
              <path
                d="M30.1755 0.830078H49.0484V4.27024H34.0479V14.6737H48.0618V18.0702H34.0479V28.5173H49.2667V31.9574H30.1799V0.830078H30.1755Z"
                fill="white"
              />
              <path
                d="M65.2496 3.84253C61.124 3.84253 58.413 5.99045 58.413 8.95912C58.413 12.2247 62.067 13.4296 64.4289 14.032L67.5241 14.8921C70.877 15.7521 76.3385 17.6861 76.3385 23.4881C76.3385 28.5611 72.2565 32.5164 65.0313 32.5164C58.3256 32.5164 54.1564 29.0325 53.8115 23.8767H57.7668C58.1117 27.3605 61.3336 28.9932 65.0313 28.9932C69.3315 28.9932 72.5534 26.8017 72.5534 23.4052C72.5534 20.3972 69.6721 19.2359 66.4065 18.2886L62.5822 17.2583C57.6839 15.8394 54.6716 13.3466 54.6716 9.13375C54.6716 3.89056 59.3559 0.406738 65.3762 0.406738C71.3965 0.406738 75.736 3.92985 75.9063 8.66225H72.1212C71.7763 5.61064 68.9823 3.8469 65.2453 3.8469L65.2496 3.84253Z"
                fill="white"
              />
              <path
                d="M85.7552 31.9531H81.8872V0.830078H85.7552V31.9531Z"
                fill="white"
              />
              <path
                d="M105.056 4.01277C99.5552 4.01277 95.1677 8.35226 95.1677 16.3939C95.1677 24.4354 99.5508 28.7749 105.314 28.7749C110.579 28.7749 114.167 25.2518 114.254 19.7467H106.13V16.3502H118.035V19.703C118.035 27.439 112.705 32.3854 105.309 32.3854C97.0143 32.3854 91.4263 26.2385 91.4263 16.3939C91.4263 6.54923 97.058 0.402344 105.056 0.402344C111.635 0.402344 116.704 4.52792 117.865 10.5482H113.866C112.534 6.54923 109.483 4.01277 105.052 4.01277H105.056Z"
                fill="white"
              />
              <path
                d="M148.556 31.9531H144.858L128.006 7.7104H127.705V31.9531H123.837V0.830078H127.579L144.43 25.1164H144.731V0.830078H148.556V31.9531Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_405">
                <rect
                  width="254"
                  height="32.1096"
                  fill="white"
                  transform="translate(0 0.402344)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="blind">DESIGN IDEA</span>
        </Link>
      </h1>
      <Gnb />
      <button onClick={handleClick}>
        {isMobile && isMenuOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H20M4 6H20M4 18H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </header>
  );
}

export default Header;
