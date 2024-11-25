import { sum } from "../sum";

test('Sum function should calculate the sum of 2 numbers', () => {

    const result = sum(5,4);

    // Assertion
    expect(result).toBe(9);

})