import Socials from "./Socials";
import useRandomPunks from "../hooks/useRandomPunks";

/**
 * A component to render a hero section of the page.
 *
 * @see {@link https://www.awebco.com/blog/hero-section/}
 */
const Hero = () => {
    const punks = useRandomPunks();

    return (
        <div className="flex flex-col justify-center items-center my-24">
            <img src={punks} className="punk-placeholder" />

            <div className="w-1/2 text-center my-10">
                <span className="text-lg">
                    10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain. The project that
                    inspired the modern CryptoArt movement. Selected press and appearances include Mashable, CNBC, The Financial Times,
                    Bloomberg, MarketWatch, The Paris Review, Salon, The Outline, BreakerMag, Christie's of London, Art|Basel, The PBS
                    NewsHour, The New York Times in 2018 and again in 2021. The Cryptopunks are one of the earliest examples of a
                    "Non-Fungible Token" on Ethereum, and were inspiration for the ERC-721 standard that powers most digital art and
                    collectibles.
                </span>
            </div>

            <Socials />
        </div>
    );
};

export default Hero;
