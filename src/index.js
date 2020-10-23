module.exports = function check(str, bracketsConfig) {
 let stack = []; 
 let arr = str.split('');
 for(let a of arr){
  for (let i = 0; i < bracketsConfig.length; i++){
      if(a == bracketsConfig[i][0]){
        if(bracketsConfig[i][0] === bracketsConfig[i][1] && stack.length != 0 && stack[stack.length-1] == a){
            stack.pop()
        } else {
          stack.push(bracketsConfig[i][1])
        }
      } else {
      if(a == bracketsConfig[i][1]){
        if(stack.pop() !== a ){
          return false;
        }
      }
    }
  } 
 }
 return stack.length === 0; 
}
