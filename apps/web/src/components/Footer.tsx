'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const bgTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const footer = footerRef.current;
        const content = contentRef.current;
        const bgText = bgTextRef.current;
        if (!footer || !content || !bgText) return;

        const ctx = gsap.context(() => {
            const items = Array.from(content.children);

            // Hidden initial state
            gsap.set(items, { autoAlpha: 0, y: 50 });
            gsap.set(bgText, { autoAlpha: 0, y: 30 });

            const tl = gsap.timeline({
                paused: true,
                defaults: { ease: 'power3.out' },
            });

            tl.to(items, {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
            }).to(
                bgText,
                { autoAlpha: 1, y: 0, duration: 1.2, ease: 'power2.out' },
                0.2
            );

            // Animate when the footer actually becomes visible
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries.some((entry) => entry.isIntersecting)) {
                        tl.play();
                        observer.disconnect(); // play once
                    }
                },
                { threshold: 0.1 }
            );

            observer.observe(footer);

            // Cleanup for the observer
            return () => observer.disconnect();
        }, footer);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="bg-background relative overflow-hidden border-t border-white/15"
        >
            <div
                ref={contentRef}
                className="relative mx-auto max-w-7xl border-b border-white/10 px-6 pt-20 pb-6 md:pt-24"
            >
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
                        <div className="max-w-2xl">
                            <p className="mb-4 text-sm text-neutral-400 uppercase">
                                YOUR NEXT MOVE
                            </p>

                            <h2 className="heading-5 text-primary whitespace-pre-wrap">
                                Make your move. Challenge a friend.
                            </h2>

                            <p className="paragraph-4 mt-6 max-w-xl text-neutral-400">
                                No accounts. No distractions. Just two players,
                                one board, and a game worth playing. Create a
                                room and let the match begin.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm transition-colors hover:bg-white hover:text-black"
                            >
                                Play a Game
                                <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-neutral-500">
                            Built for the love of the game.
                        </p>

                        <p className="text-sm text-neutral-500">
                            Think ahead. Play together.
                        </p>
                    </div>
                </div>
            </div>

            <div
                ref={bgTextRef}
                className="pointer-events-none relative inset-x-0 bottom-0 flex items-center justify-center overflow-hidden py-4 select-none"
            >
                <p className="footer-leading text-neutral-500/20">ROOKROOM</p>
                <p className="footer-leading-overlay absolute text-neutral-300">
                    {'Stratify Minds' + '.'}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
