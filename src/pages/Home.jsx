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
        <main>
            <div className="description-box">
                <h2>Welcome to Icons</h2>
                <p className="description">Let's get to know the legends of our society, people who stand out wildly in their respective fields . . .</p>
            </div>
            <div className="home-box right">
                <img src={barackImg} alt="Barack Obama" className="main-image" />
                <p>This spans a wide range of fields—including politics, entertainment, science, activism, and business—and features those who are shaping the future.</p>
            </div>
            <div className="home-box left">
                <p>Heroes, giants, titans, luminaries, pioneers, greats, trailblazers, masters, and hall-of-famers.</p>                
                <img src={girlImg} alt="Spanx founder" className="main-image" />
            </div>
            <div className="home-box right">
                <img src={dwayneImg} alt="Dwayne Johnson" className="main-image" />
                <p>This site is not a ranking but, similar to the <i>TIME100</i>, is a celebration of impact and influence across the globe.</p>
            </div>
            <div className="links-box">
                <NavLink to="/icons/creators">Learn more about the world's greatest creators.</NavLink>
                <NavLink to="/icons/athletes">Discover the inside scoop on the best athletes.</NavLink>
            </div>
            <div className="share-buttons">
                <FacebookShareButton url={shareUrl} quote={title}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton url={shareUrl} title={title}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>

                <LinkedinShareButton url={shareUrl} title={title}>
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </div>
        </main>
    );
}

export default Home;