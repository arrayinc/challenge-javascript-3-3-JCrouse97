// *** YOUR ANSWER BELOW ***

function divBySixOrSeven(x){
  let str = "";
  for(let i = x; i > 0; i--){
    if(i % 7 === 0){
      str += `${i}, `;
    } else if(i % 6 === 0){
      str += `${i}, `;
    }
  }
  return str;
}

divBySixOrSeven(100);
