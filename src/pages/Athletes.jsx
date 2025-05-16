import Bio from '../components/Bio';
import '../App.css';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share';

function Athletes() {
    const shareUrl = window.location.href;
    const title = "Check this out!";
    const kobeBryant = {
        "name": "Kobe Bryant",
        "article": "https://vault.si.com/vault/2014/08/25/twilight-the-saga",
        "ai": "Kobe Bryant's path to greatness was paved with extraordinary dedication, sacrifice, and an unrelenting obsession with mastery. Known for his “Mamba Mentality,” Bryant famously woke up at 4 a.m. to train, often completing multiple workouts before his peers arrived at the gym. But beyond the headlines, lesser-known anecdotes reveal the depth of his discipline—such as the time during the 2008 Olympics when he refused to join Team USA at a club in Las Vegas and instead hit the gym for a solo 2 a.m. workout, inspiring teammates like Dwyane Wade and LeBron James to follow suit.",
        "ia": "He once spent an entire offseason honing his left-handed shot after a finger injury, just in case he needed it in a game. Bryant also watched game tape during team dinners and texted trainers in the middle of the night to adjust routines. His greatness was not just talent, but a product of deliberate sacrifice—giving up comfort, social life, and even sleep—in pursuit of being the best.",
        "video": "https://www.youtube.com/watch?v=hzKraDjWy28"
    }

    return (
        <main className="max-w-[1000px] w-[90vw] mx-auto">
            <div className="my-10 text-center">
                <h2 className="font-playfair text-7xl">Athletes</h2>
                <p className="mt-5 text-xl w-[60vw] mx-auto text-[#987169]">Here's the icons, the people the world sees on perhaps the biggest stages.
                    Everyone as a child has dreamed of hundreds of thousands to millions of fans
                    screaming their name as they perform in front of the world. These are the people
                    who actually made that dream happen.
                </p>
            </div>
            <Bio {...kobeBryant} />
            <div className="flex my-8 items-center justify-center gap-3">
                <FacebookShareButton url={shareUrl} quote={title}>
                    <FacebookIcon size={40} round />
                </FacebookShareButton>

                <TwitterShareButton url={shareUrl} title={title}>
                    <TwitterIcon size={40} round />
                </TwitterShareButton>

                <LinkedinShareButton url={shareUrl} title={title}>
                    <LinkedinIcon size={40} round />
                </LinkedinShareButton>
            </div>
        </main>
    );
}

export default Athletes;