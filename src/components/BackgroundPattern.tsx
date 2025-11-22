import { useEffect, useRef } from 'react';

export const BackgroundPattern = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouseX = 0;
        let mouseY = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            originalVx: number;
            originalVy: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.originalVx = (Math.random() - 0.5) * 0.2;
                this.originalVy = (Math.random() - 0.5) * 0.2;
                this.vx = this.originalVx;
                this.vy = this.originalVy;
                this.size = Math.random() * 300 + 100; // Large, subtle blobs
                // Use the primary blue and dark navy with very low opacity
                const isPrimary = Math.random() > 0.5;
                this.color = isPrimary
                    ? `hsla(211, 100%, 50%, ${Math.random() * 0.03 + 0.01})`
                    : `hsla(220, 40%, 25%, ${Math.random() * 0.03 + 0.01})`;
            }

            update() {
                // Basic movement
                this.x += this.vx;
                this.y += this.vy;

                // Mouse interaction
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 400; // Interaction radius

                if (distance < maxDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (maxDistance - distance) / maxDistance;

                    // Gentle repulsion/attraction
                    // Negative force = repulsion, Positive = attraction
                    // Let's do a gentle repulsion for a "moving through water" feel
                    const directionX = forceDirectionX * force * 0.5;
                    const directionY = forceDirectionY * force * 0.5;

                    this.vx -= directionX;
                    this.vy -= directionY;
                } else {
                    // Return to original velocity
                    if (this.vx !== this.originalVx) {
                        this.vx += (this.originalVx - this.vx) * 0.02;
                    }
                    if (this.vy !== this.originalVy) {
                        this.vy += (this.originalVy - this.vy) * 0.02;
                    }
                }

                // Friction to prevent infinite acceleration
                this.vx *= 0.99;
                this.vy *= 0.99;

                // Keep within bounds (wrap around)
                if (this.x < -this.size) this.x = canvas!.width + this.size;
                if (this.x > canvas!.width + this.size) this.x = -this.size;
                if (this.y < -this.size) this.y = canvas!.height + this.size;
                if (this.y > canvas!.height + this.size) this.y = -this.size;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const particleCount = 15; // Few large particles for subtle effect
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 h-full w-full pointer-events-none opacity-60"
            style={{ filter: 'blur(60px)' }}
        />
    );
};
