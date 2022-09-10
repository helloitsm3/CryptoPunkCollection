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
            <a className="flex flex-col" target="_blank">
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
const Collection = ({ data }) => {
    const test = [
        { type: "Female", image: "cryptopunk100.png", accessories: ["Tassle Hat"] },
        { type: "Male", image: "cryptopunk100.png", accessories: ["Police Cap", "Nerd Glasses"] },
        {
            type: "Male",
            image: "cryptopunk100.png",
            accessories: ["Vampire Hair", "Luxurious Beard"],
        },
        {
            type: "Female",
            image: "cryptopunk100.png",
            accessories: ["Black Lipstick", "Green Eye Shadow", "Blonde Bob"],
        },
        {
            type: "Male",
            image: "cryptopunk100.png",
            accessories: ["Normal Beard Black", "Earring", "Crazy Hair", "Eye Patch"],
        },
        { type: "Male", image: "cryptopunk100.png", accessories: ["Mohawk Thin"] },
        { type: "Female", image: "cryptopunk100.png", accessories: ["Straight Hair Blonde"] },
        { type: "Female", image: "cryptopunk100.png", accessories: ["Tassle Hat"] },
        { type: "Male", image: "cryptopunk100.png", accessories: ["Police Cap", "Nerd Glasses"] },
        {
            type: "Male",
            image: "cryptopunk100.png",
            accessories: ["Vampire Hair", "Luxurious Beard"],
        },
        {
            type: "Female",
            image: "cryptopunk100.png",
            accessories: ["Black Lipstick", "Green Eye Shadow", "Blonde Bob"],
        },
        {
            type: "Male",
            image: "cryptopunk100.png",
            accessories: ["Normal Beard Black", "Earring", "Crazy Hair", "Eye Patch"],
        },
        { type: "Male", image: "cryptopunk100.png", accessories: ["Mohawk Thin"] },
        { type: "Female", image: "cryptopunk100.png", accessories: ["Straight Hair Blonde"] },
        { type: "Female", image: "cryptopunk100.png", accessories: ["Tassle Hat"] },
        { type: "Male", image: "cryptopunk100.png", accessories: ["Police Cap", "Nerd Glasses"] },
        {
            type: "Male",
            image: "cryptopunk100.png",
            accessories: ["Vampire Hair", "Luxurious Beard"],
        },
        {
            type: "Female",
            image: "cryptopunk100.png",
            accessories: ["Black Lipstick", "Green Eye Shadow", "Blonde Bob"],
        },
        {
            type: "Male",
            image: "cryptopunk100.png",
            accessories: ["Normal Beard Black", "Earring", "Crazy Hair", "Eye Patch"],
        },
        { type: "Male", image: "cryptopunk100.png", accessories: ["Mohawk Thin"] },
        { type: "Female", image: "cryptopunk100.png", accessories: ["Straight Hair Blonde"] },
        { type: "Female", image: "cryptopunk100.png", accessories: ["Tassle Hat"] },
        { type: "Male", image: "cryptopunk100.png", accessories: ["Police Cap", "Nerd Glasses"] },
        {
            type: "Male",
            image: "cryptopunk100.png",
            accessories: ["Vampire Hair", "Luxurious Beard"],
        },
        {
            type: "Female",
            image: "cryptopunk100.png",
            accessories: ["Black Lipstick", "Green Eye Shadow", "Blonde Bob"],
        },
        {
            type: "Male",
            image: "cryptopunk100.png",
            accessories: ["Normal Beard Black", "Earring", "Crazy Hair", "Eye Patch"],
        },
        { type: "Male", image: "cryptopunk100.png", accessories: ["Mohawk Thin"] },
        { type: "Female", image: "cryptopunk100.png", accessories: ["Straight Hair Blonde"] },
    ];

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">Collection</h2>

            <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-8 py-10 px-10">
                {test.slice(0, 15).map((punk, index) => (
                    <RenderPunks punk={punk} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Collection;
