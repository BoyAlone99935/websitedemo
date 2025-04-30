

// Retrieve stored quiz data
const right = sessionStorage.getItem('score') 
    ? parseInt(sessionStorage.getItem('score')) 
    : 0;


// Update result page elements
document.getElementById("final-score").textContent = `${right}%`;
 const attempted = document.getElementById("attempted-questions").textContent = `${right / 5}/20`;

 

  const motivation = document.getElementById('performance-text')

      if (right >= 90) {
        motivation.textContent = "🔥 Incredible! You are a true quiz master!";
    } else if (right >= 70) {
        motivation.textContent = "😃 Great job! You are well on your way!";
    } else if (right >= 50) {
        motivation.textContent = "👍 Not bad! Keep trying and aim higher.";

          }
          else if (right < 50) {
            motivation.textContent = '😉 Dont Let It Weigh You Down'
          }
        
     