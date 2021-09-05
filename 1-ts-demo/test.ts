let a = 4;
const b = 73;

a = 73;

//a = [73];

let c = [75, "a"];

console.log(typeof c);

// var vs let
for (var i=0; i<5; i++) {
    setTimeout(() => console.log(i), 500);
}

