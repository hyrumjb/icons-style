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

function Creators() {
    const shareUrl = window.location.href;
    const title = "Check this out!";
    const travisKalanick = {
        "name": "Travis Kalanick",
        "article": "https://lowercasecapital.com/2015/02/04/why-i-would-never-want-to-compete-with-travis-kalanick/",
        "ai": "Travis Kalanick's success as an entrepreneur and his formidable competitive edge stem from his relentless drive, strategic intensity, and deep understanding of both technology and market dynamics. As highlighted in the Lowercase Capital article, Kalanick possessed a uniquely aggressive mindset—treating competition as warfare and relentlessly pursuing victory, even in the face of regulatory and public resistance. His ability to scale Uber at a breakneck pace while outmaneuvering incumbents reflected not just vision, but a willingness to challenge norms, take bold risks, and push through obstacles with unwavering focus. This combination of technical acumen, operational aggression, and sheer willpower made him a transformative—and at times polarizing—force in the startup world.",
        "video": "https://www.youtube.com/watch?v=d5LsVxMP2Bo"
    }

    const mrBeast = {
        "name": "Jimmy Donaldson",
        "article": "https://drive.google.com/file/d/1RF7sTliNiNGyYK6p8MX_JEgDyUhRTsoF/view",
        "ai": "MrBeast (Jimmy Donaldson) became one of the most influential creators on the planet not through luck, but through an intense combination of hard work, obsession, and singular focus. As reflected in his widely discussed leaked staff document, Donaldson emphasized extreme attention to detail, relentless pursuit of improvement, and a near-militant commitment to excellence in every aspect of content production. He held his team to high standards, insisting that every decision—from thumbnail design to video pacing—be made with deliberate care and data-driven precision. This obsessive approach wasn’t arbitrary; it reflected his deep belief that world-class content demands world-class effort. By treating YouTube like a craft and a business simultaneously, MrBeast transformed from a passionate teen experimenting with videos into a professional powerhouse, reshaping the creator economy with a work ethic that rivaled top entrepreneurs and CEOs.",
        "video": "https://www.youtube.com/watch?v=V6lHIXR9tcc"
    }

    return (
        <main>
            <div className="description-box">
                <h2>Creators</h2>
                <p className="description">Here's the world-changers, the shakers and makers who are 
                    putting something out into the world, who are building things and 
                    creating the world they can see in their head.
                </p>
            </div>
            <Bio {...travisKalanick} />
            <Bio {...mrBeast} />
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

export default Creators;