import '../App.css';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share';

function About() {
    const shareUrl = window.location.href;
    const title = "Check this out!";

    return (
        <main className="max-w-[1000px] w-[90vw] mx-autof">
            <div className="description-box">
                <h2 className="font-playfair">Behind this Site:</h2>
                <p className="description">Everyone needs role models and examples.</p>
            </div>
            <p className="about">Some of these come into one's life naturally, like parents, family members,
                and the people in one's general vicinity. Unfortunately, many people are somewhat lacking
                in this category and never seem to have a grasp on where they could go or what they could be.
                It's not that they lack potential, it's that they lack a vision of what is even possible.
                They are so trapped in by the frankly sad and limited world they know that they never even
                dream there could be&mdash;and is&mdash;something better out there. That is precisely the purpose of
                ICONS: to inspire people, open minds, and help humanity realize its potential.
            </p>
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

export default About;