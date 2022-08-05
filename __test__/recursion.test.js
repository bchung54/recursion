import * as Recursion from '../recursion';

describe('Question 1: Sum all numbers, from 1 up to number passed in', () => {
    it('should return 6, since 1 + 2 + 3 = 6, for sumRange(3)', () => {
        expect(Recursion.sumRange(3)).toBe(6);
    })
});

describe('Question 2: Power function', () => {
    it('should return correct powers of 2', () => {
        expect(Recursion.power(2, 4)).toBe(16);
        expect(Recursion.power(2, 3)).toBe(8);
        expect(Recursion.power(2, 2)).toBe(4);
        expect(Recursion.power(2, 1)).toBe(2);
        expect(Recursion.power(2, 0)).toBe(1);
    })
})

describe('Question 3: Calculate factorial', () => {
	it('should return 120 for factorial(5)', () => {
		expect(Recursion.factorial(5)).toBe(120);
	});
});

describe('Question 4: Check all values in an array', () => {

	it('should return false for all([1, 2, 9], (num) => num < 7 )', () => {
		expect(Recursion.all([1, 2, 9], (num) => num < 7)).toBe(false);
	});

    it('should return false for all([9, 1, 2], (num) => num < 7 )', () => {
		expect(Recursion.all([9, 1, 2], (num) => num < 7)).toBe(false);
	});

    it('should return true for all([1, 2, 3], (num) => num < 7 )', () => {
        expect(Recursion.all([1, 2, 3], (num) => num < 7)).toBe(true);
    });
});

describe('Question 5: Product of an array', () => {
	it('should return 6 for productOfArray([1,2,3])', () => {
		expect(Recursion.productOfArray([1, 2, 3])).toBe(6);
	});
    it('should return 60 for productOfArray([1,2,3,10])', () => {
        expect(Recursion.productOfArray([1, 2, 3, 10])).toBe(60);
    });
});

describe('Question 6: Search JS object', () => {
    const nestedObject = {
        data: {
            info: {
                stuff: {
                    thing: {
                        moreStuff: {
                            magicNumber: 44,
                            something: 'foo2'
                        }
                    }
                }
            }
        }
    };

	it('should return true for contains(nestedObject, 44)', () => {
		expect(Recursion.contains(nestedObject, 44)).toBe(true);
	});

	it('should return false for contains(nestedObject, "foo")', () => {
		expect(Recursion.contains(nestedObject, 'foo')).toBe(false);
	});
});

describe('Question 7: Parse a multi-dimensional array', () => {
    const seven = Recursion.totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]);

	it('should return 7 for totalIntegers([[[5], 3], 0, 2, [\'foo\'], [], [4, [5, 6]]])', () => {
		expect(seven).toBe(7);
	});
});

describe('Question 8: Sum squares of numbers in list that may contain more lists', () => {
    it('should return 14 for SumSquares([1,2,3])', () => {
        const lst = [1, 2, 3]; // 1 + 4 + 9 = 14
        expect(Recursion.SumSquares(lst)).toBe(14);
    });

    it('should return 14 for SumSquares([[1, 2], 3])', () => {
        const lst = [[1, 2], 3]; // 1 + 4 + 9 = 14
        expect(Recursion.SumSquares(lst)).toBe(14);
    });

	
    it('should return 1 for SumSquares([[[[[[[[[1]]]]]]]]])', () => {
        const lst = [[[[[[[[[1]]]]]]]]]; // 1 = 1
        expect(Recursion.SumSquares(lst)).toBe(1);
    });

	
	it('should return 1 for SumSquares([10, [[10], 10], [10]])', () => {
        const lst = [10, [[10], 10], [10]]; // 100 + 100 + 100 + 100 = 400
        expect(Recursion.SumSquares(lst)).toBe(400);
    });
});

describe('Question 9: Return an array containing repetitions of the number argument', () => {
    it('should return [5, 5, 5] for replicate(3, 5)', () => {
        expect(Recursion.replicate(3, 5)).toStrictEqual([5, 5, 5]);
    });

    it('should return [69] for replicate(1, 69)', () => {
        expect(Recursion.replicate(1, 69)).toStrictEqual([69]);
    });

    it('should return [] for replicate(-2, 6)', () => {
        expect(Recursion.replicate(-2, 6)).toStrictEqual([]);
    });
});