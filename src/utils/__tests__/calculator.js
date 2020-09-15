import { sum } from '../calculator'

test('sum value', () => {
    expect(sum(1, 2)).toBe(3)
})