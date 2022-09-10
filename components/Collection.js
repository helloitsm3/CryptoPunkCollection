import { useState, useMemo } from "react";

import Link from "next/link";
import CryptoPunks from "../public/cryptopunks.json";
import RenderAccessories from "./RenderAccessories";

/**
 * A component to render individual Crypto Punks details
 */
const RenderPunks = (punk) => {
    const { type, image, accessories } = punk.punk;
    const title = image.replace("https://www.larvalabs.com/cryptopunks/cryptopunk", "").replace(".png", "").replace("cryptopunk", "");

    return (
        <Link href={`/punks/${title}`} passHref>
            <a className="flex flex-col" target="_blank" rel="noopener noreferrer">
                <img src={image} />

                <div className="flex flex-row items-center justify-between py-3">
                    <span className="text-bright-pink text-lg font-bold">#{title}</span>
                    <span>{type}</span>
                </div>

                <div className="flex flex-wrap">
                    <RenderAccessories accessories={accessories} />
                </div>
            </a>
        </Link>
    );
};

/**
 * A component to render a collection of Crypto Punks
 */
const Collection = () => {
    const counter = 5;
    const [page, setPage] = useState({
        prev: 0,
        next: 5,
    });

    const { prev, next } = page;

    /**
     * Using memo to memoize the slicing of crypto punks array
     */
    const punkSlice = useMemo(() => CryptoPunks.slice(prev, next));

    /**
     * Function to handle previous pagination
     */
    const handlePrev = () => {
        if (prev > 0) {
            setPage((prevState) => ({ prev: prevState.prev - counter, next: prevState.next - counter }));
        }
    };

    /**
     * Function to handle next pagination
     */
    const handleNext = () => {
        if (next < 9999) {
            setPage((prevState) => ({ prev: prevState.prev + counter, next: prevState.next + counter }));
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">Collection</h2>

            <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-8 py-10 px-10">
                {punkSlice.map((punk, index) => (
                    <RenderPunks punk={punk} key={index} />
                ))}
            </div>

            <div className="flex space-x-5 py-10">
                <button onClick={handlePrev} className="bg-blue-500 px-8 py-2 rounded-md">
                    Prev
                </button>
                <button onClick={handleNext} className="bg-blue-500 px-8 py-2 rounded-md">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Collection;
