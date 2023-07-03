let test = "abbbcdddefghijklmnopppqrsttuv";

function longestNonrepeatedSubstring(){
   let longestStr = '';
   let currentStr = '';
   for(let i = 0; i < test.length; i++){
    let letter = test[i];
     if(currentStr.includes(letter)){
        if(currentStr.length > longestStr.length){
            longestStr = currentStr;
        }
        currentStr = '';
     }
     currentStr += letter;
   }
   return currentStr.length > longestStr.length? currentStr: longestStr;
}

console.log(longestNonrepeatedSubstring())