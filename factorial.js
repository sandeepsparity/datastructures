// Factorial using recurssion

//n= 5  0, 1, 2, 3, 4, 5
//      5 * 4 * 3 * 2 * 1  
function factorial(number) {
    const memo = {};
  
    function calculateFactorial(number) {
      if (number in memo) {
        return memo[number];
      }
  
      if (number <= 1) {
        return 1;
      }
  
      memo[number] = number * calculateFactorial(number - 1);
      return memo[number];
    }
  
    return calculateFactorial(number);
  }
  
  console.log(factorial(10));


  function factorial2(number){
    let result = 1;
    for (let i = 2; i <= number; i++){
        result *= i
    }
    return result;
  }
  
  console.log(factorial2(5))



  
