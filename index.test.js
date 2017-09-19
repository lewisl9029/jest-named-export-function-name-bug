import * as functions from './index'

test('should have function name', () => {
  expect(functions.function1.name).toBe('function1')
  expect(functions.function2.name).toBe('function2')
})
