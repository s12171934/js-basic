let ucFirst = (str) => str[0].toUpperCase() + str.slice(1);

let camelize = (str) => {
    let arr = str.split("-");
    for(s in arr){
        arr[s] = ucFirst(arr[s]);
    }
    return arr.join("");
}
let filterRange = (arr, a, b) => {
    let newArr = [];
    for(n of arr){
        if(a <= n && n <= b) newArr.push(n);
    }
    return newArr;
}

let filterRangeInPlace = (arr, a, b) => {
    for(n in arr){
        if(a > arr[n] || arr[n] > b) arr.splice(n,1);
    }
}

console.log(camelize("background-color"))

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);

filterRangeInPlace(arr, 1, 4);
console.log(arr);

let arr2 = [5, 2, 1, -10, 8];
console.log(arr2.sort().reverse());

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map(it => it.name);
console.log(names);

john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };
users = [ john, pete, mary ];
let usersMapped = users.map(it => {return {fullName: `${it.name} ${it.surname}`, id: it.id}})
console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

let sortByAge = (users) =>{
    users.sort((u1,u2) => u1.age - u2.age)
}

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };
arr = [ pete, john, mary ];
sortByAge(arr);
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

let shuffle = (arr) => arr.sort((a,b) => 0.5 - Math.random());
arr = [1,2,3,4,5,6];
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };
arr = [ pete, john, mary ];

let getAverageAge = (users) => users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log(getAverageAge(arr));

let unique = (arr) => {
    let uniqueArr = [];
    for(item of arr){
        if(uniqueArr.includes(item)) continue;
        uniqueArr.push(item);
    }
    return uniqueArr;
}
let uniqueSet = (arr) => Array.from(new Set(arr));
let strings = ["Hare", "Krishna", "Hare", "Krishna",
                "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(strings));
console.log(uniqueSet(strings));