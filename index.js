// code your solution here

function saturdayFun(target = "roller-skate") {
    return `This Saturday, I want to ${target}!`;
  }
  
  console.log(saturdayFun()); 
  console.log(saturdayFun("bathe my dog"));



  function mondayWork(target = "go to the office") {
    return`This Monday, I will ${target}.`;
  }
  console.log(mondayWork()); 
  console.log(mondayWork("work from home"));





  function wrapAdjective(flair = "*") {
    return function(msg = "special") {
        return `You are ${flair}${msg}${flair}!`;
    };
}


console.log(wrapAdjective("%")("a dedicated programmer"));
  


  