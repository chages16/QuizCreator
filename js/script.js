var beginningbutton = document.querySelector("#beginning");
var question = document.querySelector("#textdisplay");
var multiplechoice = document.querySelector("#multiplechoice");
var timer = document.querySelector("#yourscore");
var inserthere = document.querySelector("#buttonshere");
var initialsEl = document.getElementById("yourinitials");
var answeredEl = document.getElementById("youranswered");
var resultsEl = document.getElementById("yourresults");


var buttoncreate = document.createElement("button");
console.log(question.textContent)

var answer = ["a","b","c","d"];
var correctanswer = ["a","d","b","a"]
var questiontext = ["Question 1 Answer is A!",
"Question 2 Answer is D!",
"Question 3 Answer is B!",
"Question 4 Answer is A!"
];

var round = 0
var ioutput = [];
var qoutput = [];
var soutput = [];

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
  
      if(secondsLeft < 0.1) {
        clearInterval(timerInterval);
        alert("Too late");
        var totalscore = 0
        var totalscore= secondsLeft+round;  
        alert("Your Score (Questions answered + time left) is " + totalscore);
        clearInterval(timerInterval);  
        insertinitials()    
        location=location
      }
  
      if(round == correctanswer.length) {  
        var totalscore = 0
        var totalscore= secondsLeft+round;  
        alert("Your Score (Questions answered + time left) is " + totalscore);
        clearInterval(timerInterval);  
        insertinitials()    
      }

    }, 1000);
  }
    

    function insertinitials() {
      var totalscore= secondsLeft+round;
      var initials = prompt("Please type your initials here");
      if (initials === null || initials =="") {
        alert("Please enter initials");
        insertinitials();
    }
      if (initials.length> 3){
        alert("too long- less then 3 initials please");
        insertinitials();
      }
      else {
        ioutput.push(initials);
        qoutput.push(round);
        soutput.push(totalscore);
        console.log(initials);
        console.log(ioutput)
        localStorage.setItem("initials", JSON.stringify(initials));
        localStorage.setItem("answered", JSON.stringify(round));
        localStorage.setItem("totalscore", JSON.stringify(totalscore));
        for (var i = 0; i < ioutput.length; i++) {
          var li1 = document.createElement("h4");
          console.log("ioutput= " + ioutput[i]);
          li1.textContent = ioutput[i];
          console.log("Li1 = " + li1.textContent);
          initialsEl.appendChild(li1);
          var li2 = document.createElement("h4");
          console.log("qoutput= " + qoutput[i]);
          li2.textContent = qoutput[i];
          console.log("Li2 = " + li2.textContent);
          answeredEl.appendChild(li2);
          var li3 = document.createElement("h4");
          console.log("soutput= " + soutput[i]);
          li3.textContent = soutput[i];
          console.log("Li3 = " + li3.textContent);
          resultsEl.appendChild(li3);
      }
    }
      
  }

    inserthere.addEventListener("click", function(event) {
    if (event.target.matches("button")) {
    event.preventDefault();
    var index = event.target.getAttribute("data-index");
    console.log(index)
    console.log(correctanswer[round])
    if (index == correctanswer[round]){
    // alert("Correct");
    round++;
    question.textContent= questiontext[round];

    }
    else {
      alert("Wrong- lose 15 seconds!!!");
      secondsLeft = secondsLeft-15;      
    }
    console.log("Here we index " + index)
    
    }})