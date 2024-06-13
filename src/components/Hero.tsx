// Hero.tsx
'use client'
import { useState, useEffect } from "react";

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const backgroundImage = isMobile ? "/bg-mobile.png" : "/bg.png";

    return (
        <div id="home" className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-64 pb-12 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="relative z-10 text-black w-full lg:w-1/2">
                <div className="text-center lg:text-left mb-64 lg:mb-4">
                    <p className="text-lg lg:text-2xl mb-2">MODERN WHITE</p>
                    <h1 className="text-7xl font-semibold lg:text-9xl mb-6 pb-4 border-b-4 lg:mr-32 border-black">MINIMAL CHAIR</h1>
                    <p className="text-xl md:text-3xl mb-6">$ 79.99</p>
                    <button className="bg-black border border-black text-white p-2 px-16">
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
            </div>
        </div>
    );
}