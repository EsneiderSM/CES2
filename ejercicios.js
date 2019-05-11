

//Grados a Fahrenheit
let convert = gr => {
  let result = (gr * 9/5) + 32;
  console.log(`${gr} Grados celsius son = ${result} fahrenheit`)
}
convert(10)
////////////////////////

// Tabla de multiplicar
let multiply = num => {
  for(let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num*i}`);
  }
}
multiply(5);
////////////////////////

// Total de para<metros
let nParams = (...param) => console.log(param.length);
nParams(1, 2, 3, 4, 5, 10);
///////////////////////

// Promedio de arreglo
let average = arrg => {
  let sum = 0;
  arrg.forEach(n => sum = sum+n);
  console.log(sum/arrg.length);
}
average([2,3,5,7,8]);
///////////////////////

// Save los primeros 20 numeros pares
let savePairs = () => {
  let pairs = [];
  for(let i = 0; i <= 100; i++){
    if(i%2 == 0) { 
      pairs.push(i)
    }

    if(pairs.length == 20){
      break
    } 
  }
  console.log(pairs);
}
savePairs();
///////////////////////


