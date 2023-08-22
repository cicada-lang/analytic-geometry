import { Mod } from '../../pages/playground/Mod.ts'
import { State } from './State.ts'
import { createFormula } from './formula/createFormula.ts'
import { createMotion } from './motion/createMotion.ts'

export function stateRefresh(state: State, mod: Mod): void {
  for (const formula of mod.formulas) {
    createFormula(state, formula)
  }

  for (const motion of mod.motions) {
    createMotion(state, motion)
  }
}
