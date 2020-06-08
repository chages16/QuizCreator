var beginningbutton = document.querySelector("#beginning");
var question = document.querySelector("#textdisplay");
var multiplechoice = document.querySelector("#multiplechoice");
var timer = document.querySelector("#yourscore");
var inserthere = document.querySelector("#buttonshere");

var buttoncreate = document.createElement("button");
console.log(question.textContent)

var answer = ["a","b","c","d"];
var correctanswer = ["a","d","b","a"]
var questiontext = ["Question 1 Answer is A!",
"Question 2 Answer is D!",
"Question 3 Answer is B!",
"Question 4 Answer is A!",
];

var round = 0

beginningbutton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event);
    document.getElementById("beginning").style="display: none;";
    alert("hello");
    secondsLeft=80;
    question.textContent= questiontext[round];
    setTime();
    
    for(i=0;i<4;i++) {
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.setAttribute("data-index", answer[i]);
    button.setAttribute("class", "btn btn-primary btn-sm selectanswer");
    console.log(button.attributes);
    button.textContent = answer[i]+") ";
    li.appendChild(button);
    inserthere.appendChild(li);
    }

    
  });

  function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("Too late");
        location=location
      }
  
    }, 1000);
  }
    

    inserthere.addEventListener("click", function(event) {
    if (event.target.matches("button")) {
    event.preventDefault();
    var index = event.target.getAttribute("data-index");
    console.log(index)
    console.log(correctanswer[round])
    if (index == correctanswer[round]){
    alert("Correct");
    round++;
    question.textContent= questiontext[round];

    }
    else {
      alert("Wrong- lose 15 seconds!!!");
      secondsLeft = secondsLeft-15;
      document.reload();
    }
    console.log("Here we index " + index)
    
    }})