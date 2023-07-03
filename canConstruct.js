//The "canConstruct" problem involves determining whether it is possible 
//to construct a target string using elements from a given array of strings, 
//with repetition allowed. You need to return a boolean value indicating whether 
//the target string can be constructed or not.


function canConstruct(target, wordBank){ 
    if(target === ''){
        return true;
    }

    for(let word of wordBank){
        if(target.startsWith(word)){
            let suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank)){
                return true
            }
        }

    }
    return false;
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // Output: true









// function canConstruct(target, wordBank, memo = {}) {
//     if (target in memo) {
//       return memo[target];
//     }
  
//     if (target === '') {
//       return true; // Base case: target string is constructed
//     }
  
//     for (let word of wordBank) {
//       if (target.startsWith(word)) {
//         const suffix = target.slice(word.length);
//         if (canConstruct(suffix, wordBank, memo)) {
//           memo[target] = true;
//           return true;
//         }
//       }
//     }
  
//     memo[target] = false;
//     return false;
//   }
  
//   console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // Output: true
//   console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // Output: false
//   console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // Output: true
//   console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee'])); // Output: false