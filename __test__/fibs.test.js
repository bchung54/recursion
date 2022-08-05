import {fibs, fibsArrayRec, fibsRec} from '../fibs';

it('should return [0, 1, 1, 2, 3, 5, 8, 13] for fibs(8)', () => {
	expect(fibs(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});


it('should return [0, 1, 1, 2, 3, 5, 8, 13] for fibsArrayRec(8)', () => {
    expect(fibsArrayRec(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

it('should return [0, 1, 1, 2, 3, 5, 8, 13] for fibsRec(8)', () => {
	expect(fibsRec(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});