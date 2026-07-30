export function FLX_CORE(echo){
    return {
        mode: "flex",
        bend: echo.resonance * 3.14,
        curve: Math.tan(echo.resonance)
    };
}
export function VEC_PIPELINE(input) {
    const vec = new Vector(input);
    return VEC_CORE.process(vec);
}
