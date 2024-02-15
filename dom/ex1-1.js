console.log(document.querySelector("#age-table"));
console.log(document.querySelector("table").querySelectorAll("label"));
console.log(document.querySelector("table").querySelectorAll("td")[0]);
console.log(document.querySelector("form[name=search]"));
document.querySelectorAll("form")
    .forEach(node => console.log(node.querySelectorAll("input")[0]));
document.querySelectorAll("form")
    .forEach(node => console.log(node.querySelectorAll("input")[node.length - 1]));