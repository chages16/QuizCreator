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
<<<<<<< HEAD
var correctanswer = ["a","d","b","a","d","c"]
var questiontext = ['What best decribes Javascript? <br><br> A) A programming language that supports event-driven, functional, and imperative programming styles. <br> B) Used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.<br>C) The standard markup language for Web pages<br>D)a structured set of data held in a computer, especially one that is accessible in various ways.',
"What following command will send information to the broswer console? <br><br> A) event.console <br> B) log.event <br>C) event.log <br>D)console.log",
'Which of these is an object? <br><br> A) var car = [type,car,model]<br> B) var car = {type:"Fiat", model:"500", color:"white"}; <br>C) var car = objector(fiat,model,white)<br>D) var car = function white(event {)',
'Which of these is the best for finding the element with the id type-"beginning"? <br><br> A) document.querySelector("#beginning");<br> B) document.querySelector(".beginning"); <br>C) document.getElementById("#beginning");<br>D) document.getElementById("id = beginning")',
'What would "array[4]" return for "var array = [1,2,3,4,5,6]"? <br><br> A) -1 <br>B) 4 <br>C) undefined;<br>D) 5',
'If var a ="2" and var b="1" what would b + a equal? <br><br> A) 3 <br>B) "21" <br>C) "12"<br>D) undefined'
=======
var correctanswer = ["a","d","b","a"]
var questiontext = ["Question 1 Answer is A!",
"Question 2 Answer is D!",
"Question 3 Answer is B!",
"Question 4 Answer is A!"
>>>>>>> parent of b4108cf... Created function to arrange by high score, updated media queries
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
<<<<<<< HEAD
    question.innerHTML= questiontext[round];
=======
    secondsLeft=80;
    question.textContent= questiontext[round];
>>>>>>> parent of b4108cf... Created function to arrange by high score, updated media queries
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
        localStorage.setItem("initials", JSON.stringify(ioutput));
        localStorage.setItem("answered", JSON.stringify(qoutput));
        localStorage.setItem("totalscore", JSON.stringify(soutput));
        restorescores();

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
    question.innerHTML= questiontext[round];

    }
    else {
      alert("Wrong- lose 15 seconds!!!");
      secondsLeft = secondsLeft-15;      
    }
    console.log("Here we index " + index)
    
    }})

    function restorescores() {
      resultsEl.innerHTML = "";
      answeredEl.innerHTML = "";
      initialsEl.innerHTML = "";
      var storedinitials = JSON.parse(localStorage.getItem("initials"));
      if (storedinitials !== null) {            
      var storedanswered = JSON.parse(localStorage.getItem("answered"));
      var storedtotal = JSON.parse(localStorage.getItem("totalscore"));
      ioutput = storedinitials;
      qoutput = storedanswered;
      soutput = storedtotal;
      console.log(storedanswered)
      console.log(storedinitials)
      console.log(storedtotal)
    }  
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
  restorescores();