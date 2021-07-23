// Listen for Submit
document.querySelector('#love-form').addEventListener('submit', function(e){
    // Hide Results
    document.querySelector('#results').style.display = 'none';
    
    // Show Loader
    document.querySelector('#loading').style.display = 'block';
  
    setTimeout(calculateResults, 2000);
  
    e.preventDefault();
  });

  document.querySelector('#results').style.display = 'none';

  document.querySelector('#loading').style.display = 'none';

  function calculateResults() {
    document.querySelector('#results').style.display = 'block';

    document.querySelector('#loading').style.display = 'none';
      const yourName = document.querySelector('#your_name');
      const yourCrushName = document.querySelector('#your_crush_name');
      const calcBtn = document.querySelector('#calc_btn');

      yourNameValue = yourName.value;
      yourCrushNameValue = yourCrushName.value;
    //   console.log(yourCrushNameValue, yourCrushNameValue)


    const rand = Math.random() * 100;
    const randomNumber = Math.floor(rand) + 1; 
    
    //   displaying results
    const loveScore = document.querySelector('.love_score');
    loveScore.style.color = 'black';
    // loveScore.innerHTML = `hi ${yourNameValue}, your crush name is ${yourCrushNameValue}`;
  

    if (randomNumber > 70) {
        loveScore.innerHTML = `The love rate of ${yourNameValue} and ${yourCrushNameValue} is ${randomNumber}%, Your relationship would be match made in heaven!❤💕💑`;  
    } else if(randomNumber > 30 && randomNumber <= 70 ) {
        loveScore.innerHTML = `The love rate of ${yourNameValue} and ${yourCrushNameValue} is ${randomNumber}%, You would match better but your relationship would be shaking🤪❤`;
    }else{
        loveScore.innerHTML = `The love rate of ${yourNameValue} and ${yourCrushNameValue} is ${randomNumber}%, You would match like water and oil🤣😂`;
    }
      
      calcBtn.style.display = 'none';
      
  }

  


// function love_score() {
    
//   
//   if(loveScore > 30 || loveScore <= 70) {
//       return `Your love score is ${loveScore}% `
//   } else {
//       return `Your love score is ${loveScore}%, you go togrther like oil and water`
//   }


//  love_score();
