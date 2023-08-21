import { Vector } from "./Vector"

export function vectorAdd(x: Vector, y: Vector): Vector {
  if (x.length !== y.length) {
    throw new Error(
      [
        `[vectorAdd] Vector length mismatch.`,
        ``,
        `  x.length: ${x.length}`,
        `  y.length: ${y.length}`,
      ].join("\n"),
    )
  }

  const z: Vector = []
  for (let i = 0; i < x.length; i++) {
    z.push(x[i] + y[i])
  }

  return z
}
