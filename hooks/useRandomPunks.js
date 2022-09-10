import { useState, useEffect } from "react";

export default function useRandomPunks() {
    const [punks, setPunks] = useState("");

    function random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        setPunks(`https://cryptopunks.app/cryptopunks/cryptopunk${random(0, 9999)}.png`);
    }, []);

    return punks;
}
