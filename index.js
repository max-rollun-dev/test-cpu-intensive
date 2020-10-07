console.log('CPU intensive task');


let hugeArray = [{date: '123123'}];
while (true) {
  hugeArray = hugeArray.concat(hugeArray)
}

console.log('CPU task end');
