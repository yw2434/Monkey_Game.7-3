var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


$(document).ready(initialize);

function initialize(){
    console.log("APP: Initialized....");
    $("#yun").on("click", touchYun);
    $("#eyeR, #eyeL").on("click", touchEye);
    $("#bodyy").on("click", touchBody);
    $("#head").on("click", touchHead);
}


function touchYun(){
    var back = ["red","orange","yellow","green","cyan","blue","purple"];
    var rand = back[Math.floor(Math.random() * back.length)];
    $('#yun').css('fill',rand);
}

function touchEye() {
    $("#eyeR, #eyeL").toggleClass("blink");
    $('#question').html("Ahh, do not poke my eyes!! Click again to stop my blinking.");
    $('#answer').html("");
}

function touchBody() {
    $('#question').html("Seriously, I don't like others to touch my body...");
    $('#answer').html("");
}

function touchHead() {
    $('#question').html("Hey bro, this is your last warning...I will not forgive you unless you calculate all the questions correctly!!");
    $('#answer').html("");
}


var content={
    "title":"Math Quiz",
    "author":"Ya Wang",
    "questions":[
        {"question":"What's two plus two?",
            "score":10,
            "options":[{
                "answer":"Four",
                "correct":true
            },{
                "answer":"Five",
                "correct":false
            }]
        },
        {"question":"What's seven plus three?",
            "score":10,
            "options":[{
                "answer":"Ten",
                "correct":true
            },{
                "answer":"Five",
                "correct":false
            }]
        },
        {"question":"What's two times six?",
            "score":10,
            "options":[{
                "answer":"Twelve",
                "correct":true
            },{
                "answer":"Eight",
                "correct":false
            }]
        },
        {"question":"What's eleven minus two?",
            "score":10,
            "options":[{
                "answer":"Nine",
                "correct":true
            },{
                "answer":"Five",
                "correct":false
            }]
        },
        {"question":"What's five minus four?",
            "score":10,
            "options":[{
                "answer":"One",
                "correct":true
            },{
                "answer":"Zero",
                "correct":false
            }]
        },
        {"question":"What's four devided by two?",
            "score":10,
            "options":[{
                "answer":"Two",
                "correct":true
            },{
                "answer":"Six",
                "correct":false
            }]
        },
        {"question":"What's three times three?",
            "score":10,
            "options":[{
                "answer":"Nine",
                "correct":true
            },{
                "answer":"Five",
                "correct":false
            }]
        },
        {"question":"What's five plus two?",
            "score":10,
            "options":[{
                "answer":"Five",
                "correct":false
            },{
                "answer":"Seven",
                "correct":true
            }]
        },{"question":"What's two plus seven?",
            "score":10,
            "options":[{
                "answer":"Nine",
                "correct":true
            },{
                "answer":"Five",
                "correct":false
            }]
        },{"question":"What's three plus three?",
            "score":10,
            "options":[{
                "answer":"Six",
                "correct":true
            },{
                "answer":"Seven",
                "correct":false
            }]
        }
    ]
};

var indexQ=0;
var total=0;
var selectQ=content.questions[indexQ];
var selectA=content.questions[indexQ].options;
var displayQ=document.querySelector("#question");
var displayA=document.querySelector("#answer");
var displayF=document.querySelector("#feedback");
var scores=document.querySelector("#number");
var begin=document.querySelector("#quiz");
var clicked="false";


begin.addEventListener("click",function () {
    displayQ.textContent=selectQ.question;
    changeAnswers();
});



function changeAnswers(){
    displayA.innerHTML="";
    for(var i=0; i<selectA.length; i++) {
        displayA.innerHTML+="<li id="+i+">"+selectA[i].answer+"</li>";
    }
}


displayA.addEventListener("click",function myFunction(e) {
    if(e.target && e.target.nodeName == "LI") {
        var listNum=e.target.id;
        displayF.innerHTML=selectA[listNum].correct;
        if(displayF.textContent=="true"&&clicked=="false") {
            displayF.style.backgroundColor="green";
            total += 10;
            scores.innerHTML = total;
            clicked = "true";
        }
        else{
            scores.innerHTML=total;
            displayF.style.backgroundColor="darkred";
        }
    }
});



next.addEventListener("click",function () {
    indexQ += 1;
    selectQ = content.questions[indexQ];
    selectA = content.questions[indexQ].options;
    displayQ.textContent = selectQ.question;
    changeAnswers();
    clicked="false";
})

