let ucFirst = (str) => str[0].toUpperCase() + str.slice(1);

let checkSpam = (str) => str.toLowerCase().includes("cash") || str.toLowerCase().includes("money");

let truncate = (str,maxlength) => str.length > maxlength ? str.slice(0,maxlength-1) + "\u{2026}" : str;

let extractCurrencyValue = (str) => Number(str.slice(1));
 
console.log(ucFirst("john"));;
console.log(checkSpam("borrow CaSh now"));
console.log(checkSpam("free MoneY"));
console.log(checkSpam("innocent rabbit"));
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));
console.log( extractCurrencyValue('$120') === 120 );
