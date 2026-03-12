// const text =document.getElementById("name");
// const checkbox = document.getElementById("checkbox");
// const form = document.getElementById("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     if(checkbox.checked){
//         alert("hello" + text.value);

//     }
// })

// reverse a sring
const str = "hello";
const reversed = str.split("").reverse().join("");
console.log(reversed);

function reverseString(string){
    let reversed="";
    for(let i=string.length-1; i>=0; i--){
        reversed +=string[i];

    }
    return reversed;
}
console.log(reverseString("world"));
let word = "suriya";
word+= " rajarajesh";
console.log(word);

// sum numbers
let sum = 0;
for (let i=1; i<10; i++){
    sum +=i;
}
console.log(sum);