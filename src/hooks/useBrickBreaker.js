import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useViewport } from '../contexts/ViewportContext';

gsap.registerPlugin(ScrollTrigger);

export default function useBrickBreaker({
  groupRef,
  paddleRef,
  ballRef,
  brickRefs,
}) {
  const viewport = useViewport();
  const isMobile = viewport.type === 'mobile';

  const animationFrame = useRef(null);
  const cursorX = useRef({ x: window.innerWidth / 2 });
  const time = useRef({ previous: performance.now(), delta: 16 });

  const player = useRef({
    gameover: true,
    inPlay: false,
    ballDirection: [0, -10 * time.current.delta * 0.1],
    ballRotation: 0,
  });

  const settings = useRef({
    breakerWidth: window.innerWidth,
    breakerHeight: window.innerHeight,
    paddleWidth: 0,
    ballRadius: 0,
    paddleTransformValue: 0,
    paddleX: window.innerWidth / 2,
  });

  // 모바일 애니메이션
  useEffect(() => {
    if (!isMobile) return;

    const ctx = gsap.context(() => {
      const shuffledBricks = [...brickRefs.current].sort(
        () => Math.random() - 0.5
      );

      const tl = gsap.timeline({
        paused: true,
        repeat: -1,
        repeatDelay: 0.5,
      });

      tl.fromTo(
        shuffledBricks,
        {
          visibility: 'visible',
        },
        {
          visibility: 'hidden',
          duration: 1,
          stagger: 0.5,
          delay: 0.1,
        },
        'a'
      ).set(shuffledBricks, { visibility: 'visible' }, 'b');

      ScrollTrigger.create({
        trigger: groupRef.current,
        start: 'top 50%',
        once: true,
        onEnter: () => {
          tl.play();
        },
      });
    }, groupRef);

    return () => ctx.revert();
  }, [brickRefs, groupRef, isMobile]);

  // 데스크탑 초기 세팅
  useEffect(() => {
    if (isMobile) return;

    settings.current.paddleTransformValue =
      paddleRef.current?.offsetWidth / 2 + 10;
    settings.current.ballRadius = ballRef.current.offsetWidth;
    settings.current.paddleWidth = paddleRef.current.offsetWidth;

    return () => {
      cancelAnimationFrame(animationFrame.current);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  // 뷰포트 변화 대응
  useEffect(() => {
    if (isMobile) return;
    settings.current.breakerWidth = viewport.width;
    settings.current.breakerHeight = viewport.height;
  }, [viewport.width, viewport.height, isMobile]);

  // 모바일 모드 대응
  useEffect(() => {
    if (isMobile && !player.current.gameover) {
      destroy();
      reInitElements();
    }
  }, [isMobile]);

  // 게임 로직
  function handleClick() {
    if (isMobile) return;

    if (player.current.gameover) startGame();
    if (!player.current.inPlay) {
      player.current.inPlay = true;
      paddleRef.current?.classList.add('active');
    }
  }

  function handleMouseMove(e) {
    cursorX.current.x = e.clientX;
  }

  function isCollide(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();
    return !(
      aRect.right < bRect.left ||
      aRect.left > bRect.right ||
      aRect.bottom < bRect.top ||
      aRect.top > bRect.bottom
    );
  }

  function resetBallPosition() {
    const paddle = paddleRef.current;
    const ball = ballRef.current;
    const { ballRadius } = settings.current;
    if (!paddle || !ball) return;

    ball.style.top = `${paddle.offsetTop - 100}px`;
    ball.style.left = `${paddle.offsetLeft - ballRadius / 2}px`;
    player.current.ballDirection = [0, -10 * time.current.delta * 0.1];
    player.current.ballRotation = 0;
    ball.style.transform = `rotate(0deg)`;
  }

  function moveBall() {
    const ball = ballRef.current;
    const paddle = paddleRef.current;
    if (!ball || !paddle) return;

    let posBall = {
      x: ball.offsetLeft,
      y: ball.offsetTop,
    };

    const { breakerWidth, breakerHeight, ballRadius, paddleWidth } =
      settings.current;

    // 벽 충돌
    if (posBall.y > breakerHeight - ballRadius || posBall.y < 0) {
      if (posBall.y > breakerHeight - ballRadius) {
        stopGame();
        return;
      } else {
        player.current.ballDirection[1] *= -1;
        player.current.ballRotation *= -1;
      }
    }

    if (posBall.x > breakerWidth - ballRadius || posBall.x < 0) {
      player.current.ballDirection[0] *= -1;
      player.current.ballRotation *= -1;
    }

    // 패들 충돌
    if (isCollide(paddle, ball)) {
      const paddleLeft = paddle.offsetLeft;
      const temp =
        (posBall.x -
          ballRadius / 2 -
          (paddleLeft - paddleWidth / 2) -
          paddleWidth / 2) /
        10;
      player.current.ballDirection[0] = temp;
      player.current.ballDirection[1] *= -1;
      player.current.ballRotation = temp * 15;
    }

    // 벽돌 충돌
    for (const brick of brickRefs.current) {
      if (brick && !brick.hidden && isCollide(brick, ball)) {
        brick.hidden = true;
        player.current.ballDirection[1] *= -1;
        player.current.ballRotation *= -1;
        break;
      }
    }

    // 모든 벽돌 제거 시 종료
    const allHidden = brickRefs.current.every((b) => !b || b.hidden);
    if (allHidden && !player.current.gameover) {
      endGame();
      return;
    }

    player.current.ballRotation += player.current.ballDirection[0] * 2;
    ball.style.transform = `rotate(${player.current.ballRotation}deg)`;

    posBall.y += player.current.ballDirection[1];
    posBall.x += player.current.ballDirection[0];

    ball.style.top = `${posBall.y}px`;
    ball.style.left = `${posBall.x}px`;
  }

  function update(timestamp) {
    if (player.current.gameover) return;

    time.current.delta = timestamp - time.current.previous;
    time.current.previous = timestamp;

    const paddle = paddleRef.current;
    if (!paddle) return;

    settings.current.paddleX +=
      (cursorX.current.x - settings.current.paddleX) *
      0.005 *
      time.current.delta;
    settings.current.paddleX = Math.max(
      settings.current.paddleTransformValue,
      Math.min(
        settings.current.paddleX,
        window.innerWidth - settings.current.paddleTransformValue
      )
    );

    paddle.style.left = `${settings.current.paddleX}px`;

    if (!player.current.inPlay) {
      resetBallPosition();
    } else {
      moveBall();
    }

    animationFrame.current = requestAnimationFrame(update);
  }

  function startGame() {
    player.current.gameover = false;
    player.current.inPlay = false;

    cursorX.current.x = settings.current.breakerWidth / 2;
    settings.current.paddleX = settings.current.breakerWidth / 2;

    resetBallPosition();
    window.addEventListener('mousemove', handleMouseMove);
    animationFrame.current = requestAnimationFrame(update);
  }

  function stopGame() {
    player.current.inPlay = false;
    player.current.ballDirection = [0, -10 * time.current.delta * 0.1];
    resetBallPosition();
    paddleRef.current?.classList.remove('active');
  }

  function reInitElements() {
    gsap.set([paddleRef.current, ballRef.current], { clearProps: 'all' });
    paddleRef.current?.classList.remove('active');
  }

  function destroy() {
    player.current.inPlay = false;
    player.current.gameover = true;
    cancelAnimationFrame(animationFrame.current);
    animationFrame.current = null;
  }

  function endGame() {
    destroy();
    window.removeEventListener('mousemove', handleMouseMove);

    gsap.to(groupRef.current, {
      duration: 1,
      opacity: 0,
      onComplete: () => {
        resetBallPosition();
        brickRefs.current.forEach((brick) => {
          if (brick) brick.hidden = false;
        });
        reInitElements();
      },
    });

    gsap.to(groupRef.current, {
      duration: 1,
      opacity: 1,
      delay: 1,
    });
  }

  return {
    handleClick,
  };
}
