export function SYN_CORE(mia, echo){
    return {
        mode: "sync",
        lock: (mia.fusion + echo.resonance) % 100,
        stable: mia.fusion > 50 && echo.state === "loud"
    };
}
