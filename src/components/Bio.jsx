import { useState, useEffect } from 'react';
import '../App.css';

function Bio({ name, article, ai, ia, video }) {
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
        <div className="flex flex-col gap-4 items-center mx-2 mb-8 p-8 border-2 border-amber-200 rounded-2xl">
            <h3 className="font-playfair text-4xl">{name}</h3>
            <a className="text-xl underline hover:text-amber-700" href={article} target="_blank">Read Full Article</a>
            <p className="mb-2">{ai}</p>
            <p className="mb-6">{ia}</p>
            <iframe
                src={`https://www.youtube.com/embed/${new URLSearchParams(new URL(video).search).get("v")}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-[70vw] h-[39vw] xl:w-[844px] xl:h-[475px]"
            ></iframe>
            <div className="flex items-center justify-center gap-4 mt-4">
                <button
                    onClick={handleClick}
                    aria-label="Upvote"
                    className="flex items-center gap-2 p-2 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900 transition group"
                    role="button"
                >
                    <svg
                        className="fill-amber-600 group-hover:scale-110 transition-transform"
                        xmlns="http://www.w3.org/2000/svg"
                        height="36px"
                        viewBox="0 -960 960 960"
                        width="36px"
                    >
                        <path d="M716-120H272v-512l278-288 39 31q6 5 9 14t3 22v10l-45 211h299q24 0 42 18t18 42v81.84q0 7.16 1.5 14.66T915-461L789-171q-8.88 21.25-29.59 36.12Q738.69-120 716-120Zm-384-60h397l126-299v-93H482l53-249-203 214v427Zm0-427v427-427Zm-60-25v60H139v392h133v60H79v-512h193Z" />
                    </svg>
                    <span className="text-xl text-gray-800 dark:text-gray-100">{upvotes}</span>
                </button>
            </div>
        </div>
    );
}

export default Bio;