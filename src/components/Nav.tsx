// Nav.tsx
'use client'
import { useState, useEffect } from 'react';

export default function Nav() {
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition < window.innerHeight - 100) {
            setActiveSection('home');
        } else if (scrollPosition < 2 * window.innerHeight - 100) {
            setActiveSection('carros');
        } else if (scrollPosition < 3 * window.innerHeight - 100) {
            setActiveSection('sobre');
        } else {
            setActiveSection('contato');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-black fixed w-full z-50">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            <div className="flex items-center">
                    <button className='hidden lg:block text-2xl font-semibold bg-white text-black p-8 px-12'>
                        SHOP
                    </button>
                </div>
                <div className="flex items-center text-white space-x-6 lg:space-x-12">
                    <button
                        className={`text-base md:text-lg ${activeSection === 'home' ? 'bg-transparent text-white py-2 border-t-2 border-white' : ''}`}
                        onClick={() => scrollToSection('home')}>
                        HOME
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'sobre' ? 'bg-transparent text-white py-2 border-t-2 border-yellow-500' : ''}`}
                        onClick={() => scrollToSection('sobre')}>
                        ABOUT
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'carros' ? 'bg-transparent text-white py-2 border-t-2 border-yellow-500' : ''}`}
                        onClick={() => scrollToSection('carros')}>
                        PODUCTS
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'contato' ? 'bg-transparent text-white py-2 border-t-2 border-yellow-500' : ''}`}
                        onClick={() => scrollToSection('contato')}>
                        CONTACT
                    </button>
                </div>
                <div className="flex items-center">
                </div>
            </div>
        </nav>
    );
}