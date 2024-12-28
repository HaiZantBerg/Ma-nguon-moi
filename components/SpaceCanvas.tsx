"use client";

import debounce from "debounce";
import { motion, useMotionValue, useSpring } from "motion/react";
import React, { useCallback, useEffect, useRef } from "react";

const random = (min: number, max: number) => {
    return min + Math.random() * (max - min);
};

class starParticle {
    outerX: number;
    outerY: number;
    radius: number;
    borderTop: number;
    borderBottom: number;
    borderLeft: number;
    borderRight: number;
    innerX: number;
    innerY: number;
    outerVx: number;
    outerVy: number;
    innerVx: number;
    innerVy: number;
    color: string;

    constructor(
        x: number,
        y: number,
        vx: number,
        vy: number,
        radius: number,
        range: number,
        color: string
    ) {
        this.outerX = x;
        this.outerY = y;
        this.outerVx = vx;
        this.outerVy = vy;
        this.radius = radius;
        this.borderTop = -radius * range;
        this.borderBottom = radius * range;
        this.borderLeft = -radius * range;
        this.borderRight = radius * range;
        this.innerX = 0;
        this.innerY = 0;
        this.innerVx = vx;
        this.innerVy = vy;
        this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();

        ctx.arc(
            this.outerX + this.innerX,
            this.outerY + this.innerY,
            this.radius,
            0,
            2 * Math.PI
        );

        ctx.fillStyle = "white";
        ctx.fill();
    }

    update() {
        this.innerX += this.innerVx;
        this.innerY += this.innerVy;

        if (this.innerX > this.borderRight)
            this.innerVx = -random(this.radius / 20, this.radius / 10);
        if (this.innerY > this.borderBottom)
            this.innerVy = -random(this.radius / 20, this.radius / 10);
        if (this.innerX < this.borderLeft)
            this.innerVx = random(this.radius / 20, this.radius / 10);
        if (this.innerY < this.borderTop)
            this.innerVy = random(this.radius / 20, this.radius / 10);
    }
}

export default function SpaceCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const ctx = useRef<CanvasRenderingContext2D | null>(null);

    const starParticleArray: starParticle[] = [];

    const lightSize = 1500;

    const lightSource = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const smoothOptions = { damping: 15, stiffness: 200, mass: 1 };
    const smooth = {
        x: useSpring(lightSource.x, smoothOptions),
        y: useSpring(lightSource.y, smoothOptions),
    };

    const resizeCanvas = useCallback(
        debounce(() => {
            if (!canvasRef.current) return;

            starParticleArray.length = 0;

            // canvasRef.current.width = window.innerWidth;
            // canvasRef.current.height = window.innerHeight;

            // for (let i = 0; i < 100; i++) {
            //     const x = random(10, canvasRef.current.width - 10),
            //         y = random(10, canvasRef.current.height - 10),
            //         radius = random(0.5, 1.25),
            //         vx = random(0.02, 0.05),
            //         vy = random(0.02, 0.05);

            //     starParticleArray.push(
            //         new starParticle(x, y, vx, vy, radius, radius * 3, "white")
            //     );
            // }
        }, 500),
        []
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;

        lightSource.x.set(clientX - lightSize / 2);
        lightSource.y.set(clientY - lightSize / 2);
    };

    const particleAnimation = () => {
        if (!ctx.current) return;

        let animationId: number;

        ctx.current.clearRect(0, 0, window.innerWidth, window.innerHeight);

        starParticleArray.forEach((star) => {
            if (star && ctx.current) {
                star.update();
                star.draw(ctx.current);
            }
        });

        animationId = requestAnimationFrame(particleAnimation);

        return () => {
            cancelAnimationFrame(animationId);
        };
    };

    useEffect(() => {
        if (!canvasRef.current) return;

        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;

        window.addEventListener("resize", resizeCanvas);

        ctx.current = canvasRef.current.getContext("2d");

        for (let i = 0; i < 100; i++) {
            const x = random(10, canvasRef.current.width - 10),
                y = random(10, canvasRef.current.height - 10),
                radius = random(0.5, 1.25),
                vx = random(0.02, 0.05),
                vy = random(0.02, 0.05);

            starParticleArray.push(
                new starParticle(x, y, vx, vy, radius, radius * 3, "white")
            );
        }

        let animationId = requestAnimationFrame(particleAnimation);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full">
            <canvas
                ref={canvasRef}
                className="fixed left-0 top-0 pointer-events-none"
            />
            <div className="fixed top-0 left-0 h-screen w-screen pointer-events-none overflow-hidden">
                <motion.div
                    className="aspect-square rounded-full absolute"
                    style={{
                        width: lightSize,
                        top: smooth.y,
                        left: smooth.x,
                        background:
                            "radial-gradient(circle, rgba(174,171,219,0.05) 0%, rgba(255,255,255,0) 60%)",
                    }}
                />
            </div>
            <div
                className="h-screen"
                style={{
                    backgroundColor: "hsl(244 38.1% 8.2%)",
                }}
                onMouseMove={handleMouseMove}
            ></div>
        </div>
    );
}
