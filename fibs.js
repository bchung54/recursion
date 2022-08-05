export const fibs = (number) => {
    let prev2Num = 0;
    let prevNum = 1;
    let fibNumber = 1;
    let arr = [0];

    for (let counter = 1; counter < number; counter++) {
        arr.push(fibNumber);
        fibNumber = prev2Num + prevNum;
        prev2Num = prevNum;
        prevNum = fibNumber;
    }
    return arr;
}

const fibsNumberRec = (number) => {
    if (number + 1 == 1) {
        return 0;
    }
    if (number + 1 == 2) {
        return 1;
    }
    return fibsNumberRec(number - 1) + fibsNumberRec(number - 2);
}

export const fibsArrayRec = (number) => {
    const outputArr = [];
    for (let i = 0; i < number; i++) {
        outputArr.push(fibsNumberRec(i));
    }
    return outputArr;
}

export const fibsRec = (number) => {
    if (number == 1) {
        return [0];
    }
	if (number == 2) {
		return [0, 1];
	}
	const prevArray = fibsRec(number - 1);
    return [...prevArray, prevArray[prevArray.length - 1] + prevArray[prevArray.length - 2]];
};