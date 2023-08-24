import { State } from './State'
import { renderCamera } from './camera/renderCamera'
import { renderController } from './controller/renderController'
import { renderFormula } from './formula/renderFormula'
import { updateHovered } from './hoverable-point/updateHovered'
import { renderMotion } from './motion/renderMotion'
import { onClick } from './mouse/onClick'
import { renderCoordinate } from './renderCoordinate'
import { renderHoveredPoint } from './renderHoveredPoint'
import { renderInfo } from './renderInfo'

export function render(state: State, passedTime?: number): void {
  passedTime = passedTime || 0
  const deltaTime = passedTime - state.lastTime
  state.lastTime = passedTime

  state.ctx.clearRect(0, 0, state.width, state.height)

  renderCoordinate(state)

  for (const [id, formula] of state.formulas) {
    renderFormula(state, id, formula)
  }

  for (const [id, motion] of state.motions) {
    renderMotion(state, id, motion)
  }

  const clickPeriod = 120
  if (state.mouse.isDown && state.clickCoollingTimer <= 0) {
    onClick(state)
    state.clickCoollingTimer = clickPeriod
  } else if (state.clickCoollingTimer > 0) {
    state.clickCoollingTimer -= deltaTime
  }

  updateHovered(state)
  if (state.hoveredPoint) {
    renderHoveredPoint(state, state.hoveredPoint)
  }

  renderController(state)

  renderCamera(state)
  renderInfo(state)

  requestAnimationFrame((passedTime) => render(state, passedTime))
}