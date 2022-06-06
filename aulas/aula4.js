
for (let i = 1; i <= 10; i++){
  console.log("olá, pela " + i + "ª vez!");
};

let a = 0;
let b = 1;

while (a + b < 10000){
  let c = b;
  b = a + b;
  a = c;
  console.log(b);
}
