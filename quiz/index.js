const quizQuestions = [
  { 
      question: "What is the capital of France?", 
      options: ["Berlin", "Madrid", "Paris", "Rome"], 
      answer: "Paris" 
  },
  { 
      question: "Which language runs in a web browser?", 
      options: ["Java", "C", "Python", "Javascript"], 
      answer: "Javascript" 
  },
  { 
      question: "What is the largest internal organ in the human body?", 
      options: ["Lungs", "Heart", "Kidneys", "Liver"], 
      answer: "Liver" 
  },
  { 
      question: "What is the percentage of the Earth covered by water?", 
      options: ["51%", "61%", "71%", "81%"], 
      answer: "71%" 
  },
  { 
      question: "Which country is the band AC/DC from?", 
      options: ["New Zealand", "UK", "USA", "Australia"], 
      answer: "Australia" 
  },
  { 
      question: "What is the atomic number of Hydrogen?", 
      options: ["1", "2", "3", "4"], 
      answer: "1" 
  },
  { 
      question: "What is the equivalent of 100 Celsius in Fahrenheit?", 
      options: ["152", "182", "212", "232"], 
      answer: "212" 
  },
  { 
      question: "What is the main ingredient of gnocchi?", 
      options: ["Rice", "Potato", "Pasta", "Chocolate"], 
      answer: "Potato" 
  },
  { 
      question: "Which country commissioned the Statue of Liberty as a gift to the United States?", 
      options: ["UK", "France", "Germany", "Italy"], 
      answer: "France" 
  },
  { 
      question: "How many ribs does a human skeleton have?", 
      options: ["20", "22", "24", "26"], 
      answer: "24" 
  },
  { 
      question: "What is the best-selling book of all time?", 
      options: ["The Christian Bible", "Harry Potter", "The Lord of the Rings", "The Alchemist"], 
      answer: "The Christian Bible" 
  },
  { 
      question: "Which planet has the most volcanoes?", 
      options: ["Earth", "Mars", "Venus", "Jupiter"], 
      answer: "Venus" 
  },
  { 
      question: "How many keys does a piano have?", 
      options: ["76", "88", "92", "100"], 
      answer: "88" 
  },
  { 
      question: "Which famous Roman leader introduced the leap year?", 
      options: ["Augustus", "Julius Caesar", "Nero", "Caligula"], 
      answer: "Julius Caesar" 
  },
  { 
      question: "What arboreal marsupial is known for sleeping the vast majority of the day?", 
      options: ["Kangaroo", "Koala", "Wombat", "Possum"], 
      answer: "Koala" 
  },
  { 
      question: "What is the scientific term for a life-threatening allergic reaction?", 
      options: ["Anaphylaxis", "Asthma", "Hypoxia", "Tachycardia"], 
      answer: "Anaphylaxis" 
  },
  { 
      question: "Which musician holds the record for most GRAMMYs of all time?", 
      options: ["Michael Jackson", "Beyoncé", "Taylor Swift", "Elton John"], 
      answer: "Beyoncé" 
  },
  { 
      question: "What type of food holds the world record for being the most stolen around the globe?", 
      options: ["Wagyu beef", "Cheese", "Coffee", "Chocolate"], 
      answer: "Cheese" 
  },
  { 
      question: "What element does the chemical symbol Au stand for?", 
      options: ["Silver", "Magnesium", "Salt", "Gold"], 
      answer: "Gold" 
  },
  { 
      question: "What is the oldest university in the UK?", 
      options: ["Cambridge", "Manchester", "Bath", "Oxford"], 
      answer: "Oxford" 
  }
];
const container = document.querySelector('.container')
quizQuestions.forEach((questionobj , questionindex) => {
  const questionsContainer = document.createElement('div')
  const radioid = 'optionsid'
  questionsContainer.className ='question'
  const paragraph = document.createElement('p')
  paragraph.className = 'paragraph'
  paragraph.textContent = questionobj.question
  questionsContainer.append(paragraph)
  container.appendChild(questionsContainer)
  const form = document.createElement('form')
  const ul = document.createElement('ul')
    form.className = 'options'
  questionobj.options.forEach((optionobj, optionindex) => {
    const li = document.createElement('li')
    const input = document.createElement('input')
    const label = document.createElement('label')
    input.type = 'radio'
    input.name = `question${questionindex}`
    input.id =     `question${questionindex}-option${optionindex}`
    label.htmlFor = input.id
    label.textContent = optionobj 
    li.appendChild(input)
    li.appendChild(label)
    ul.appendChild(li)
  })
  form.appendChild(ul)
  questionsContainer.appendChild(form)
  container.appendChild(questionsContainer)
})

const startbtn = document.querySelector('.Start')

function start () {
    container.classList.add('container2')
    const time = setInterval(Countdown, 1000)

    const timespace = document.createElement('p')
    timespace.className = 'Time'
    let startTime = 5
    let  startingMunite = startTime * 60
    
    
    function Countdown() {
        const munite = Math.floor(startingMunite/60)
        const seconds = startingMunite % 60
        timespace.textContent = `Time left : ${munite < 10 ? '0' : ""}${munite} : ${seconds < 10 ? '0' : ""}${seconds}`
        const viewscore = document.getElementById('viewscore')
        const timeup = document.querySelector('.timeup')
        if (startingMunite <= 0) {
            clearInterval(time)
            timeup.classList.remove('hide')
            submit.disabled = true
            submit.onclick = null
            viewscore.onclick = () => {
                sessionStorage.setItem('score', score)
                sessionStorage.setItem('attemptedQuestions', answeredquestions)
                window.location.href = 'results.html'
            }
        }
        else {
            startingMunite--
        }
        document.body.appendChild(timespace)
    }
    
    startbtn.classList.add('hide')

    const submit = document.createElement('button')
    submit.classList.add('submit')
    submit.textContent = 'Submit Attempt'

    const hide = document.querySelector('.modal')
    const cancelbtn = document.getElementById
    ('cancel-btn')
    const comfirmbtn = document.getElementById('confirm-btn')
    submit.onclick = () => {  
        hide.classList.remove('hidden')
        timespace.style.display = 'none'
    }
    
    cancelbtn.onclick = () => {
        hide.classList.add('hidden')
        timespace.style.display = 'block'
    }

    comfirmbtn.onclick = () => {
        sessionStorage.setItem('score', score)
        sessionStorage.setItem('attemptedQuestions', answeredquestions)
        window.location.href = 'results.html'
    }
    document.body.append(submit)
}
// TRACK SCORE

let score = 0

const correctAnswer = {
    question0 : "Paris" ,
    question1 : "Javascript" ,
    question2 : "Liver" ,
    question3 : "71%" ,
    question4 : "Australia",
    question5 : "1" ,
    question6 : "212" ,
    question7 : "Potato" ,
    question8 : "France" ,
    question9 : "24" ,
    question10 : "The Christian Bible",
    question11 : "Venus" ,
    question12: "88" ,
    question13: "Julius Caesar"  ,
    question14: "Koala"  ,
    question15: "Anaphylaxis"  ,
    question16: "Beyoncé"  ,
    question17 : "Cheese" ,
    question18: "Gold" ,
 
 
 
    question19: "Oxford" ,
  }
  
  let  answeredquestions = 0

document.addEventListener('change', (event)=> {
  if (event.target.type === 'radio') {
    const selectedradio = event.target.name;
    const selectedoption = event.target.id;
    const label = document.querySelector(`label[for = "${selectedoption}"]`)
    const selectedtext = label.textContent.trim()
    console.log(selectedtext)
    if (correctAnswer[selectedradio] === selectedtext) {
        score += 5
        answeredquestions++
        console.log(answeredquestions)
        console.log(score)
    }
   
    }
  }
)



