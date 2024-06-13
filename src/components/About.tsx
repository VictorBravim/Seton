// About.tsx
'use client'
import { useState, useEffect } from "react";

export default function About() {
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
        <div id="About" className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-64 pb-12 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        </div>
    );
}