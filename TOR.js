export function FLX_CORE(echo){
    return {
        mode: "flex",
        bend: echo.resonance * 3.14,
        curve: Math.tan(echo.resonance)
    };
}
