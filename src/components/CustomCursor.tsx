import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let pointerX = -100;
    let pointerY = -100;
    let ringX = pointerX;
    let ringY = pointerY;
    let frame = 0;

    const setInteractiveState = (target: EventTarget | null) => {
      const element = target instanceof HTMLElement ? target : null;
      const interactive = Boolean(element?.closest("a, button, [data-cursor='interactive']"));
      ring.classList.toggle("cursor-active", interactive);
      dot.classList.toggle("cursor-dot-active", interactive);
    };

    const onMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      setInteractiveState(event.target);
    };

    const onLeave = () => {
      dot.classList.add("cursor-hidden");
      ring.classList.add("cursor-hidden");
    };

    const onEnter = () => {
      dot.classList.remove("cursor-hidden");
      ring.classList.remove("cursor-hidden");
    };

    const animate = () => {
      ringX += (pointerX - ringX) * 0.15;
      ringY += (pointerY - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
