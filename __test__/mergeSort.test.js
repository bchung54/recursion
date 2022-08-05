import mergeSort from "../mergeSort";

it('should sort a given array recursively and return [1,2,3,4,5,6,7,8] for mergeSort([4,8,6,2,1,7,5,3])', () => {
    const testArr = [4, 8, 6, 2, 1, 7, 5, 3];
    expect(mergeSort(testArr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});