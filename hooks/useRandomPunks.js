import { useState, useEffect } from "react";

export default function useRandomPunks(id = "") {
    const [punks, setPunks] = useState("");

    function random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        let punkId = id || random(0, 9999);
        setPunks(`https://cryptopunks.app/cryptopunks/cryptopunk${punkId}.png`);
    }, []);

    return punks;
}
