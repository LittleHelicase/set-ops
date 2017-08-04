import test from 'ava'
import { union, difference, intersection } from './'

test('union', (t) => {
  // {1, 2} ∪ {2, 3, 4} ∪ {1, 4, 5} = {1, 2, 3, 4, 5}
  t.deepEqual(union(new Set([1, 2]), new Set([2, 3, 4]), new Set([1, 4, 5])), new Set([1, 2, 3, 4, 5]))

  // {1, 2} ∪ {} = {1, 2}
  t.deepEqual(union(new Set([1, 2]), new Set()), new Set([1, 2]))

  // union works with one argument
  t.deepEqual(union(new Set([1, 2])), new Set([1, 2]))
})

test('difference', (t) => {
  // {1, 2} \ {1} = {2}
  t.deepEqual(difference(new Set([1, 2]), new Set([1])), new Set([2]))

  // {1, 2} \ {} = {1, 2}
  t.deepEqual(difference(new Set([1, 2]), new Set([])), new Set([1, 2]))

  // {1, 2} \ {3, 4} = {1, 2}
  t.deepEqual(difference(new Set([1, 2]), new Set([3, 4])), new Set([1, 2]))
})

test('intersection', (t) => {
  // {1, 2} ∩ {2, 3, 4} ∩ {1, 4, 5} = {1, 2, 3, 4, 5}
  t.deepEqual(intersection(new Set([1, 2]), new Set([1, 2, 21, 42]), new Set([1, 2, 3])), new Set([1, 2]))

  // {1, 2} ∩ {} = {}
  t.deepEqual(intersection(new Set([1, 2]), new Set()), new Set())

  // {1, 2, 3, 4} ∩ {3, 4} ∩ {4} = {4}
  t.deepEqual(intersection(new Set([1, 2, 3, 4]), new Set([3, 4]), new Set([4])), new Set([4]))
})
