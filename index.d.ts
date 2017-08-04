export = SetOps

declare namespace SetOps {
  /**
   * The union of the specified sets (all elements in all sets, no duplicates). (not inplace)
   * @param {Set[]} sets The sets.
   * @returns {Set} The union set (does not change any of the input sets) which contains all elements that are in at least one of the input sets.
   */
  function union <T> (...sets: Set<T>[]): Set<T>

  /**
   * The difference of the two sets. (not inplace)
   * @param {Set} set1 The basic set. Only elements in this set can be in the difference of both sets.
   * @param {Set} set2 The difference set. All elements in this set will not be in the resulting set.
   * @returns {Set} A new set containing all elements of the first set that are not in the second set.
   */
  function difference <T> (set1: Set<T>, set2: Set<T>): Set<T>

  /**
   * The intersection of the specified sets. (not inplace)
   * @param {Set[]} sets The sets.
   * @returns {Set} The intersection of the specified sets. I.e. every element that is in all sets.
   */
  function intersection <T> (...sets: Set<T>[]): Set<T>
}
