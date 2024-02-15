function isEmpty(obj){
    let count = 0;
    for(let i in obj){
        count++;
    }
    if(count == 0){
        return true;
    }
    return false;
}

function multiplyNumeric(obj){
    for(key in obj){
        if(typeof(obj[key]) == "number"){
            obj[key] *= 2;
        }
    }
}

let schedule = {};

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));

let salaries = {
    john: 100,
    ann : 160,
    pete : 130
}

let sum = 0;
for(key in salaries){
    sum += salaries[key];
}

console.log(sum);

let menu = {
    width : 200,
    height : 300,
    title : "my menu"
}

console.log(menu);

multiplyNumeric(menu);

console.log(menu);

