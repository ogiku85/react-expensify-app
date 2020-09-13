const add = (a,b) => a + b ;

test('should add two numbers', () =>{
    let p1 = 3;
    let p2 = 4;
    let expectedResult = 7;
    const result = add(3,4);

    expect(result).toBe(expectedResult);
    // if(result !== expectedResult){
    //     throw new Error(`You added ${p1} and ${p2}. The result was ${result}. Expected ${expectedResult}`);
    // }
});