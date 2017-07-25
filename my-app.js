
$(document).ready(initialize);

function initialize(){
    console.log("APP: Initialized....");
    $("#yun").on("click", touchYun);
    $("#eyeR, #eyeL").on("click", touchEye);
    $("#bodyy").on("click", touchBody);
    $("#head").on("click", touchHead);
    $("#quiz").on("click", showQuiz);
}


function touchYun(){
    var back = ["red","orange","yellow","green","cyan","blue","purple"];
    var rand = back[Math.floor(Math.random() * back.length)];
    $('#yun').css('fill',rand);
}

function touchEye() {
    $("#eyeR, #eyeL").toggleClass("blink");
    $('.bubble').html("Ahh, do not poke my eyes!! ");
}

function touchBody() {
    $('.bubble').html("Seriously, I don't like others to touch my body!!");
}

function touchHead() {
    $('.bubble').html("Hey bro, this is your last warning...I will not forgive you unless you answer all the questions correctly!!");
}


 var i=0;
function showQuiz(){
    var quizs=[
        "Was I borned in the U.S.?",//0
        "Did I travel to the Western for saving the Princess?",//1
        "Did I have any other companies during the long journey?",//2
        "Do I have a good temper?",//3
        "Am I good at fighting?",//4
        "Do you like me?"//5
    ];
    if(i<6){
        $('.bubble').html(quizs[i]);
        if(i===0){
            $("#yes").on("click",function () {
                $("#answer").html("Actually I was born in China.");
                $("#answer").show();
                $("#quiz").html("Continue");
            })
            $("#no").on("click",function () {
                $("#answer").html("Yeah~~you are right!");
                $("#answer").show();
                $("#quiz").html("Continue");
            })
        }
        if(i===1){
            $("#yes").on("click",function () {
                $("#answer").html("No, I went to the West for Buddhist Sutra. ");
                $("#answer").show();
                $("#quiz").html("Continue");
            })
            $("#no").on("click",function () {
                $("#answer").html("Yeah~~you are right!");
                $("#answer").show();
                $("#quiz").html("Continue");
            })
        }
        if(i===2){
            $("#yes").on("click",function () {
                $("#answer").html("Yeah~~you are right! I followed my master and other three disciples. ");
                $("#answer").show();
                $("#quiz").html("Continue");
            })
            $("#no").on("click",function () {
                $("#answer").html("No, you got the wrong answer.");
                $("#answer").show();
                $("#quiz").html("Continue");
            })
        }
        if(i===3){
            $("#yes").on("click",function () {
                $("#answer").html("No, you got the wrong answer. I am angry now!!");
                $("#answer").show();
                $("#quiz").html("Continue");
            })
            $("#no").on("click",function () {
                $("#answer").html("Yes, you are right! And you'd better remember this!!");
                $("#answer").show();
                $("#quiz").html("Continue");
            })
        }
        if(i===4){
            $("#yes").on("click",function () {
                $("#answer").html("Yes,you are right, I am a super hero!!");
                $("#answer").show();
                $("#quiz").html("Continue");
            })
            $("#no").on("click",function () {
                $("#answer").html("No, you got the wrong answer.");
                $("#answer").show();
                $("#quiz").html("Continue");
            })
        }
        if(i===5){
            $("#yes").on("click",function () {
                $("#answer").html("Haha, I like you too.");
                $("#answer").show();
                $("#quiz").html("Continue");
            })
            $("#no").on("click",function () {
                $("#answer").html("Why?!! I am soooo sad...");
                $("#answer").show();
                $("#quiz").html("Continue");
            })
        }
        i++;
    }else{
        $('.bubble').html("Well done, we are friends now.");
        $("#answer").hide();
        $("#yes,#no").hide();
        $('.bubble').css('background', 'yellow');
        $("#quiz").html("Congradulations!");
    }

}
