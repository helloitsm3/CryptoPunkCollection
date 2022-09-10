import { useState, useEffect } from "react";
import { random } from "../components/utils";

export default function useRandomPunks(id = "") {
    const [punks, setPunks] = useState("");

    useEffect(() => {
        let punkId = id || random(0, 9999);
        setPunks(`https://cryptopunks.app/cryptopunks/cryptopunk${punkId}.png`);
    }, []);

    return punks;
}
