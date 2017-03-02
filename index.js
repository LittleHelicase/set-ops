/**
 * The following methods are inspired by http://www.2ality.com/2015/01/es6-set-operations.html
 */

module.exports = {
  /**
   * The union of the two sets (all elements in both sets, no duplicates). (not inplace)
   * @param {Set} set1 First set of anything.
   * @param {Set} set2 Second set...
   * @returns {Set} The union set (does not change any of the input sets) which contains all elements that are in at least one of the input sets.
   */
  union: function (set1, set2) {
    return new Set([...set1, ...set2])
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
   * The intersection of the two sets. (not inplace)
   * @param {Set} set1 One of the sets..
   * @param {Set} set2 And the other set.
   * @param {Set} The intersection of both sets. I.e. every element that is in both sets.
   */
  intersection: function (set1, set2) {
    return new Set([...set1].filter(x => set2.has(x)));
  }
}

