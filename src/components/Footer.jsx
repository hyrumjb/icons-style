import '../App.css';
import { useState, useEffect } from 'react';

function Footer() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    function toggleDark() {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
    }

    function toggleLight() {
        setTheme("light");
        localStorage.setItem("theme", "light");
    }

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.remove("dark");
            console.log("Switch to light");
        } else {
            document.documentElement.classList.add("dark");
            console.log("Switch to dark");
        }
    }, [theme])

    return (
        <>
            <footer className="flex pt-10 pb-20 p-[10vw] mx-auto justify-between bg-amber-50 dark:bg-stone-800 transition-all duration-300">
                <div className="flex flex-col gap-4">
                    <svg className="w-15 fill-[#987169]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z" />
                    </svg>
                    <p>&copy; 2025 Hyrum Bradshaw</p>
                </div>

                <div className="flex gap-10">
                    <div className="footer-column">
                        <ul className="flex flex-col gap-2 font-light">
                            <li className="font-bold">Resources</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Vite</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Tailwind</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                        <ul className="flex flex-col gap-2 font-light">
                            <li className="font-bold">Learn More</li>
                            <li>My Site</li>
                            <li>Food Project</li>
                            <li>Silicon Slopes</li>
                        </ul>
                        <div className="flex gap-2">
                            <svg className="w-10 dark:fill-white" onClick={toggleLight} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
                            </svg>
                            <svg className="w-10 dark:fill-white" onClick={toggleDark} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;