// Contact.tsx
'use client'
import { useState, useEffect } from "react";

export default function Contact() {
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

    const backgroundImage = isMobile ? "/bg-mobile.png" : "/bg3.png";

    return (
        <div id="contact" className="h-full lg:h-screen flex items-center justify-center py-32 px-8 lg:px-64 pb-12 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="bg-black py-8 lg:py-16 px-4 lg:px-6 rounded shadow-md flex flex-col lg:flex-row items-center justify-between gap-6 w-full max-w-lg lg:max-w-none">
                <div className="flex flex-col lg:flex-row w-full lg:w-auto justify-center items-center lg:mr-4">
                    <h1 className="text-2xl lg:text-6xl font-bold mb-4 lg:mb-0">Newsletter</h1>
                </div>
                <div className="flex flex-col lg:flex-row w-full lg:w-auto justify-center items-center">
                    <input type="email" placeholder="Enter your email" className="mb-4 lg:mb-0 lg:mr-2 p-2 w-full lg:w-auto" />
                    <button className="bg-yellow-500 text-black p-2 w-full lg:w-auto">Subscribe</button>
                </div>
            </div>
        </div>
    );
}