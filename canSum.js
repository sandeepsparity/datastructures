//The "canSum" problem involves determining whether it 
//is possible to generate a target sum using elements from a given array,
//with repetition allowed. You need to return a boolean value indicating 
//whether the sum can be achieved or not.

function canSum(numbers, targetSum, memo={}){
    if(targetSum in memo){
        return memo[targetSum];
    }
    if (targetSum === 0) {
        return true; // Base case: sum is achieved
    }

    if (targetSum < 0) {
        return false; // Base case: sum cannot be achieved
    }

    for(let number of numbers){
        let remainder = targetSum - number;
        if (canSum(numbers, remainder, memo)) {
            memo[targetSum] = true
            return memo[targetSum];
          }
    }
    return false
}


console.log(canSum([8, 3, 5, 4], 7));