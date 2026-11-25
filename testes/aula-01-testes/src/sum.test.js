import { expect, test } from 'vitest'
import { sum, multi, divi, dimi } from './sum.js'

test('multilpica 10 e 3 e retorna 30', () => {
    expect(multi(10, 3)).toBe(30)
})

test('soma 1 e 2 e retorna 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('divide 10 por 2 e retorna 5', () => {
    expect(divi(10, 2)).toBe(5)
})

test('diminui 10 e 2 e retorna 8', () => {
    expect(dimi(10, 2)).toBe(8)
})
