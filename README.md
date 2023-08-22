# Analytic Geometry

A program to draw analytic geometry graphs on canvas.

-> [Visit the website](https://analytic-geometry.xieyuheng.com)!

## Usage

We can write JavaScript code in the playground.

Use `colors` to specify color of graph.

- We use [tailwindcss colors themes](https://tailwindcss.com/docs/customizing-colors).

Use `createFormula` to add formulas:

[ [Open in Playground](https://analytic-geometry.xieyuheng.com/playground/Y3JlYXRlRm9ybXVsYSh7CiAgZGVzY3JpcHRpb246ICdzaW4nLAogIGY6ICh4KSA9PiBNYXRoLnNpbih4KSwKICBjb2xvcjogY29sb3JzLnJvc2VbNDAwXSwKfSkKCmNyZWF0ZUZvcm11bGEoewogIGRlc2NyaXB0aW9uOiAneCAqKiAyJywKICBmOiAoeCkgPT4geCAqKiAyLAogIGNvbG9yOiBjb2xvcnMucm9zZVs0MDBdLAp9KQoKY3JlYXRlRm9ybXVsYSh7CiAgZGVzY3JpcHRpb246ICd4ICogc2luKHgpJywKICBmOiAoeCkgPT4geCAqIE1hdGguc2luKHgpLAogIGNvbG9yOiBjb2xvcnMucm9zZVs0MDBdLAp9KQ) ]

```js
createFormula({
  description: 'sin',
  f: (x) => Math.sin(x),
  color: colors.rose[400],
})

createFormula({
  description: 'x ** 2',
  f: (x) => x ** 2,
  color: colors.rose[400],
})

createFormula({
  description: 'x * sin(x)',
  f: (x) => x * Math.sin(x),
  color: colors.rose[400],
})
```

Use `createMotions**` to add motions:

[ [Open in Playground](https://analytic-geometry.xieyuheng.com/playground/Y3JlYXRlTW90aW9uKHsKICBkZXNjcmlwdGlvbjogJ0NpcmNsZSBvZiByYWRpYW4gMy4nLAogIHg6ICh0KSA9PiBNYXRoLnNpbih0KSAqIDMsCiAgeTogKHQpID0-IE1hdGguY29zKHQpICogMywKICByYW5nZTogWzAsIE1hdGguUEkgKiAyXSwKICBjb2xvcjogY29sb3JzLm9yYW5nZVs0MDBdLAp9KQoKLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnV0dGVyZmx5X2N1cnZlXyh0cmFuc2NlbmRlbnRhbCkKCmNyZWF0ZU1vdGlvbih7CiAgZGVzY3JpcHRpb246ICdCdXR0ZXJmbHkgY3VydmUuJywKICB4OiAodCkgPT4KICAgIDUgKgogICAgTWF0aC5zaW4odCkgKgogICAgKE1hdGguRSAqKiBNYXRoLmNvcyh0KSAtCiAgICAgIDIgKiBNYXRoLmNvcyg0ICogdCkgLQogICAgICBNYXRoLnNpbihNYXRoLnNpbihNYXRoLnNpbihNYXRoLnNpbihNYXRoLnNpbih0IC8gMTIpKSkpKSksCiAgeTogKHQpID0-CiAgICA1ICoKICAgIE1hdGguY29zKHQpICoKICAgIChNYXRoLkUgKiogTWF0aC5jb3ModCkgLQogICAgICAyICogTWF0aC5jb3MoNCAqIHQpIC0KICAgICAgTWF0aC5zaW4oTWF0aC5zaW4oTWF0aC5zaW4oTWF0aC5zaW4oTWF0aC5zaW4odCAvIDEyKSkpKSkpLAogIHJhbmdlOiBbMCwgTWF0aC5QSSAqIDEyXSwKICBwcmVjaXNpb246IDAuMDEsCiAgY29sb3I6IGNvbG9ycy5vcmFuZ2VbNDAwXSwKfSk) ]

```js
createMotion({
  description: 'Circle of radian 3.',
  x: (t) => Math.sin(t) * 3,
  y: (t) => Math.cos(t) * 3,
  range: [0, Math.PI * 2],
  color: colors.orange[400],
})

// https://en.wikipedia.org/wiki/Butterfly_curve_(transcendental)

createMotion({
  description: 'Butterfly curve.',
  x: (t) =>
    5 *
    Math.sin(t) *
    (Math.E ** Math.cos(t) -
      2 * Math.cos(4 * t) -
      Math.sin(Math.sin(Math.sin(Math.sin(Math.sin(t / 12)))))),
  y: (t) =>
    5 *
    Math.cos(t) *
    (Math.E ** Math.cos(t) -
      2 * Math.cos(4 * t) -
      Math.sin(Math.sin(Math.sin(Math.sin(Math.sin(t / 12)))))),
  range: [0, Math.PI * 12],
  precision: 0.01,
  color: colors.orange[400],
})
```

## Development

```
npm install          // Install dependencies
npm run build        // Compile `src/` to `lib/`
npm run build:watch  // Watch the compilation
npm run test         // Run test
```

## Contributions

To make a contribution, fork this project and create a pull request.

Please read the [STYLE-GUIDE.md](STYLE-GUIDE.md) before you change the code.

## License

[GPLv3](LICENSE)
