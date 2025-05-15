import { useState, useEffect } from 'react';
import '../App.css';

function Bio({ name, article, ai, video }) {
    const [upvotes, setUpvotes] = useState(() => {
        return Number(localStorage.getItem(`upvotes-${name}`)) || 0;
    });

    useEffect(() => {
        localStorage.setItem(`upvotes-${name}`, upvotes);
    }, [upvotes]);

    const handleClick = () => {
        setUpvotes(prev => prev + 1);
    };

    return (
        <div className="bio-box">
            <h3 className="font-playfair">{name}</h3>
            <a href={article} target="_blank">Article</a>
            <p>{ai}</p>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${new URLSearchParams(new URL(video).search).get("v")}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="likes">
                <svg className="thumb" onClick={handleClick} xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px">
                    <path d="M716-120H272v-512l278-288 39 31q6 5 9 14t3 22v10l-45 211h299q24 0 42 18t18 42v81.84q0 7.16 1.5 14.66T915-461L789-171q-8.88 21.25-29.59 36.12Q738.69-120 716-120Zm-384-60h397l126-299v-93H482l53-249-203 214v427Zm0-427v427-427Zm-60-25v60H139v392h133v60H79v-512h193Z" />
                </svg>
                <p>{upvotes}</p>
            </div>
        </div>
    );
}

export default Bio;