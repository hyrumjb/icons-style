import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className="flex items-center justify-between bg-amber-50 h-20 sticky top-0 dark:bg-stone-800 transition-all duration-300">
                <div className="flex gap-5 items-center ml-4">
                    <svg className="fill-[#987169] w-[60px] dark:fill-white transition-all duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z" />
                    </svg>
                    <h1 className="font-playfair text-2xl">ICONS</h1>
                </div>

                <div className="hidden md:flex items-center">
                    <nav className="flex gap-6 text-lg mr-4 text-[#987169]">
                        <NavLink to="/icons-style/" end className={({ isActive }) => isActive ? 'active' : ''}>
                            Home
                        </NavLink>
                        <NavLink to="/icons-style/about" className={({ isActive }) => isActive ? 'active' : ''}>
                            About
                        </NavLink>
                        <NavLink to="/icons-style/creators" className={({ isActive }) => isActive ? 'active' : ''}>
                            Creators
                        </NavLink>
                        <NavLink to="/icons-style/athletes" className={({ isActive }) => isActive ? 'active' : ''}>
                            Athletes
                        </NavLink>
                    </nav>
                </div>

                <div className="block md:hidden mr-4">
                    <button onClick={() => setIsModalOpen(true)}>
                        <svg className="fill-black h-[40px] hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    </button>
                </div>
            </header>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white dark:bg-stone-700 rounded-lg p-6 w-4/5 max-w-sm shadow-lg text-center space-y-4">
                        <nav className="flex flex-col gap-6 text-lg mr-4 text-[#987169]" onClick={() => setIsModalOpen(false)}>
                            <NavLink to="/icons-style/" end className={({ isActive }) => isActive ? 'active' : ''}>
                                Home
                            </NavLink>
                            <NavLink to="/icons-style/about" className={({ isActive }) => isActive ? 'active' : ''}>
                                About
                            </NavLink>
                            <NavLink to="/icons-style/creators" className={({ isActive }) => isActive ? 'active' : ''}>
                                Creators
                            </NavLink>
                            <NavLink to="/icons-style/athletes" className={({ isActive }) => isActive ? 'active' : ''}>
                                Athletes
                            </NavLink>
                            <button className="mt-4 text-sm text-gray-500 dark:text-gray-300 underline hover:cursor-pointer">
                                &#10005;
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;