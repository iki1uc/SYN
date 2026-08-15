import { BOOM_ENGINE } from "./boom.engine.js";

export function SYN_CORE(mia, echo, boom) {
    const lock = (mia.fusion + echo.resonance) % 100;
    const stable = mia.fusion > 50 && echo.state === "loud";

    return {
        mode: "sync",
        lock,
        stable,
        etage: boom.etage,
        modul: boom.modul,
        aufgabe: boom.aufgabe,
        pulse: boom.pulse,
        warp: boom.warp,
        drift: boom.drift
    };
}
