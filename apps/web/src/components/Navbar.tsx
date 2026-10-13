'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = ['home', 'play', 'watch', 'about'];
type Route = (typeof routes)[number];

function Navbar() {
    const pn = usePathname();
    console.log('pathname', pn);

    function getActiveRoute(): Route | undefined {
        const path = pn?.split('/')[0] || '';

        switch (path) {
            case '':
                return 'home';
            case 'play':
                return 'play';
            case 'watch':
                return 'watch';
            case 'about':
                return 'about';
        }

        return undefined;
    }

    return (
        <div className="bg-background/20 sticky top-0 z-20 flex h-20.5 w-full px-4 lg:px-12">
            <nav className="mx-auto grid h-full w-full max-w-7xl grid-cols-3 items-center">
                <div className="">
                    <p className="text-lg font-semibold text-neutral-100/95">
                        R<span className="text-neutral-100/60">o</span>
                        okRo
                        <span className="text-neutral-100/60">o</span>m
                    </p>
                </div>
                <div className="flex items-center justify-center gap-12">
                    {routes.map((item, index) => (
                        <Link
                            href={`/${item === 'home' ? '' : item}`}
                            key={index}
                            className="group relative cursor-pointer text-sm font-medium text-neutral-100/90 transition-all duration-300 hover:text-neutral-100/95"
                        >
                            <p>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </p>

                            <div
                                className={cn(
                                    'absolute -bottom-2 h-0.5 rounded-full bg-white/50',
                                    'w-0 group-hover:w-full',
                                    getActiveRoute() === item && 'w-full',
                                    'transition-all duration-300 ease-in-out'
                                )}
                            />
                        </Link>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <button className="cursor-pointer rounded bg-white/15 px-6 py-3 text-sm text-white/80">
                        Play Now
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
