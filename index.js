// Add your functions here

function map(array, fn){
    let newArray = []
    for(let i =0; i<array.length; i++){
        newArray.push(fn(array[i]))
    }
    return newArray
}



function reduce(array, fN, startingValue) {
    let value = null;
    if (startingValue === undefined) {
      value = array[0];
    } else {
      value = startingValue;
    }
    let i = startingValue ? 0 : 1;
    while (i < array.length) {
      value = fN(array[i], value);
      i++;
    }
    return value;
  }