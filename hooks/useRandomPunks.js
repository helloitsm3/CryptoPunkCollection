import { useState, useEffect } from "react";
import { random } from "../components/utils";

/**
 * A custom hook to fetch random Crypto Punk image
 *
 * @param {string} id: This is the Crypto Punk token ID. If empty, it'll return a random image
 * @example
 *
 * const punks = useRandomPunks(id="100")
 * => https://cryptopunks.app/cryptopunks/cryptopunk100.png
 *
 * const punks = useRandomPunks()
 * => https://cryptopunks.app/cryptopunks/cryptopunk8123.png    // A random Crypto Punk image
 */
export default function useRandomPunks(id = "") {
    const [punks, setPunks] = useState("");

    useEffect(() => {
        let punkId = id || random(0, 9999);
        setPunks(`https://cryptopunks.app/cryptopunks/cryptopunk${punkId}.png`);
    }, []);

    return punks;
}
