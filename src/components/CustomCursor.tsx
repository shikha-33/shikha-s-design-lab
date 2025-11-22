import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Immediate update for the dot
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

            // Check if hovering over interactive elements
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('card-interactive') ||
                target.classList.contains('glass-card');

            setIsHovering(!!isInteractive);
        };

        const animate = () => {
            // Lerp for the follower (smooth delay)
            // Lower factor = slower/smoother follow (0.1 is good for fluid feel)
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;

            follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;

            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMouseMove);
        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    // Don't render on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            {/* Main Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-opacity duration-300"
                style={{ willChange: 'transform' }}
            />

            {/* Fluid Follower */}
            <div
                ref={followerRef}
                className={`fixed top-0 left-0 border border-primary/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${isHovering ? 'w-12 h-12 bg-primary/10 border-primary' : 'w-8 h-8'
                    }`}
                style={{ willChange: 'transform' }}
            />
        </>
    );
};

export default CustomCursor;
