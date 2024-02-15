let sumInput = () => {
    let input;
    let sum = 0;
    let arr = [];
    while(true){
        input = prompt("num?", "") ;
        if(input == null || input == "" || !isFinite(input)) break;
        arr.push(+input);
    }
    for(let num of arr){
        sum += num;
    }
    return sum;
}

let getMaxSubSum = (arr) => {
    let max = 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(sum < 0) sum = 0;
        if(sum > max)  max = sum;
    }
    return max;
}

console.log(getMaxSubSum([-1,2,3,-9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));
