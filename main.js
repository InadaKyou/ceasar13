import {digitCheck, includesSpecChar} from './pack';
let input = 'Przeprogramowani';
const charSet = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';


const ceasar13 = function(input, source) {
    if(typeof(input) !== 'string' || input == '') {
        throw Error(`${input} is not a valid type`)
        };
    const arr = [...input];
    for (let i = 0; i < arr.length; i++) {
        if(!digitCheck(arr[i]) && !includesSpecChar(arr[i])) {
            const newIndex = (source.indexOf(arr[i]) + 26) % source.length;
            arr[i] = source[newIndex];
    }
          }
       
     return arr.join('')
 }

//weryfikacja

function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  verify(ceasar13(input, charSet), 'Cemrcebtenzbjnav13123')