import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
    children?: React.ReactNode;
    highlightedBackground?: React.ReactNode;
}

function Layout(props: Props) {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-[#030712]">
            {props.highlightedBackground && (
                <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
                    {props.highlightedBackground}
                </div>
            )}
            <div className="relative z-10 grid h-screen w-full grid-rows-[82px_1fr] flex-col">
                <Navbar />
                <div className="relative flex w-full flex-col">
                    {props.children}
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Layout;
