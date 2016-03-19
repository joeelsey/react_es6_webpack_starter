import jsdom from 'jsdom'
import TestUtils from 'react-addons-test-utils'

function renderShallow (componentInstance) {
  const renderer = TestUtils.createRenderer()
  renderer.render(componentInstance)
  return renderer.getRenderOutput()
}

export { renderShallow }
