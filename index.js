/**
 * The following methods are inspired by http://www.2ality.com/2015/01/es6-set-operations.html
 */

module.exports = {
  /**
   * The union of the specified sets (all elements in all sets, no duplicates). (not inplace)
   * @param {Set[]} sets The sets.
   * @returns {Set} The union set (does not change any of the input sets) which contains all elements that are in at least one of the input sets.
   */
  union: function (...sets) {
    return new Set(Array.prototype.reduce.call(sets, (set, current) => [ ...set, ...current ], []))
  },

  /**
   * The difference of the two sets. (not inplace)
   * @param {Set} set1 The basic set. Only elements in this set can be in the difference of both sets.
   * @param {Set} set2 The difference set. All elements in this set will not be in the resulting set.
   * @returns {Set} A new set containing all elements of the first set that are not in the second set.
   */
  difference: function (set1, set2) {
    return new Set([...set1].filter(x => !set2.has(x)))
  },

  /**
   * The intersection of the specified sets. (not inplace)
   * @param {Set[]} sets The sets.
   * @returns {Set} The intersection of the specified sets. I.e. every element that is in all sets.
   */
  intersection: function (...sets) {
    const [set1, ...otherSets] = sets
    return new Set([...set1].filter(x => otherSets.every((set) => set.has(x))))
  }
}
