import '../App.css';
import { NavLink } from 'react-router-dom';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share';

import dwayneImg from "../assets/dwayne.png";
import barackImg from "../assets/barack.jpg";
import girlImg from "../assets/girl.png";

function Home() {
    const shareUrl = window.location.href;
    const title = "Check this out!";
    
    return (
        <main className="max-w-[1000px] w-[90vw] mx-auto">
            <div className="mt-10 mb-10 text-center">
                <h2 className="font-playfair text-6xl sm:text-7xl tracking-tight text-black dark:text-white">Welcome to Icons</h2>
                <p className="mt-5 text-xl w-[60vw] mx-auto text-[#987169]">Let's get to know the legends of our society, people who stand out wildly in their respective fields . . .</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mx-2 mb-8 p-4 border-2 border-amber-200 rounded-2xl">
                <img className="lg:h-85 lg:w-auto sm:h-65 sm:w-auto rounded-2xl w-[70vw] h-auto" src={barackImg} alt="Barack Obama" />
                <p className="p-6 text-lg text-center">This spans a wide range of fields—including politics, entertainment, science, activism, and business—and features those who are shaping the future.</p>
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-4 items-center justify-center mx-2 mb-8 p-4 border-2 border-amber-200 rounded-2xl">
                <p className="p-6 text-lg text-center">Heroes, giants, titans, luminaries, pioneers, greats, trailblazers, masters, and hall-of-famers.</p>                
                <img className="lg:h-85 lg:w-auto sm:h-75 sm:w-auto rounded-2xl w-[70vw] h-auto" src={girlImg} alt="Spanx founder" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mx-2 mb-8 p-4 border-2 border-amber-200 rounded-2xl">
                <img className="lg:h-85 lg:w-auto sm:h-75 sm:w-auto rounded-2xl w-[70vw] h-auto" src={dwayneImg} alt="Dwayne Johnson" />
                <p className="p-6 text-lg text-center">This site is not a ranking but, similar to the <i>TIME100</i>, is a celebration of impact and influence across the globe.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <NavLink className="px-6 py-3 text-center text-lg font-semibold text-white bg-[#7b4f46] rounded-2xl shadow-md hover:bg-[#5f3b34] hover:shadow-lg hover:scale-105 focus:oultine-none focus:ring-4 focus:ring-[#a37970] transition-all duration-200 ease-in-out" to="/icons-style/creators">Learn more about the world's greatest creators.</NavLink>
                <NavLink className="px-6 py-3 text-center text-lg font-semibold text-white bg-[#7b4f46] rounded-2xl shadow-md hover:bg-[#5f3b34] hover:shadow-lg hover:scale-105 focus:oultine-none focus:ring-4 focus:ring-[#a37970] transition-all duration-200 ease-in-out" to="/icons-style/athletes">Discover the inside scoop on the best athletes.</NavLink>
            </div>
            <div className="flex my-8 items-center justify-center gap-3">
                <FacebookShareButton url={shareUrl} quote={title} className="hover:scale-110 transition-transform">
                    <FacebookIcon size={40} round />
                </FacebookShareButton>

                <TwitterShareButton url={shareUrl} title={title} className="hover:scale-110 transition-transform">
                    <TwitterIcon size={40} round />
                </TwitterShareButton>

                <LinkedinShareButton url={shareUrl} title={title} className="hover:scale-110 transition-transform">
                    <LinkedinIcon size={40} round />
                </LinkedinShareButton>
            </div>
        </main>
    );
}

export default Home;