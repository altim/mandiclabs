varying vec2 vUv;
varying float vElevation;

vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
    return a + b * cos(6.2831853 * (c * t + d));
}

void main() {

    vec3 a = vec3(0.87, 0.24, 0);
    vec3 b = vec3(0.72, 0.4, 0.22);
    vec3 c = vec3(0.81, 0.54, 0.41);
    vec3 d = vec3(0.02, 0.03, 0.89);

    float t = clamp((vElevation / 0.3) * 0.5 + 0.5, 0.0, 1.0); // elevation ∈ ~[-0.3,0.3]
    vec3 color = palette(t, a, b, c, d);

    float distanceFromCenter = distance(vec2(0.5, 0.5), vUv) * 2.0;
    color = mix(color, vec3(0, 0, 0), distanceFromCenter);
    gl_FragColor = vec4(color, 1.0);
}