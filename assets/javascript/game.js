var content = [
    {
        question: "1.lorem",
        answer: "1A.Lorm",
        choices: ["1A.Lorm", "2 lore", "3 lore", "4 lorea"]
    },
    {
        question: "2.lorem",
        answer: "2A.Lorm",
        choices: ["2A.Lorm", "2 lore", "3 lore", "4 lorea"]
    }, {
        question: "3.lorem",
        answer: "3A.Lorm",
        choices: ["3A.Lorm", "2 lore", "3 lore", "4 lorea"]
    }, {
        question: "4.lorem",
        answer: "4A.Lorm",
        choices: ["4A.Lorm", "2 lore", "3 lore", "4 lorea"]
    },

]

var answer;
var winCount = 0;
var lossCount = 0;
var timeCount = 15;
var timeUpCount = 0;
var isStart = false;
var questionCount = 0;
var timerId;
function getRandomArray(arr) {
    for (var i = arr.length; i > 0; i--) {
        var j = Math.floor(Math.random() * arr.length);
        var t = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = t;
    }
    return arr;
}


function reload(i) {
    $("#timer").text("15");
    timer();
    if (i < content.length) {//questions not answer 
        var obj = content[i];
        $(".question").text(obj.question);
        answer = obj.answer;
        var buttons = getRandomArray(obj.choices);
        for (var i = 0; i < 4; i++) {
            $(".choice" + i).text(buttons[i]);
        }
        questionCount++;
        
    } else {//no more question
        loadResult();//load result page
        questionCount = 0;
    }
}

function loadResult(){
    clearInterval(timerId);
    $(".my-2").css("display","none");
    $(".result-content").empty();

    var a = $("<p>").text("wins "+winCount);
    var b = $("<p>").text("losses "+lossCount);
    var c = $("<p>").text("time up  "+timeUpCount);

    $(".result-content").append(a);
    $(".result-content").append(b);
    $(".result-content").append(c);
    $(".result").css("display","block");
    isStart = false;
}

function countDown(){

    if(timeCount>=0){
        $("#timer").text(timeCount);
        timeCount--;
        
    }else{
        timeUpCount++;
        reload(questionCount);
    }
}

function timer(){
   if(timerId != ""){
    clearInterval(timerId);
    timeCount = 14;
   }
   timerId = setInterval(countDown,1000);
}



$("button").on("click", function () {
    console.log("click");

    if (!isStart) {//not start
        content = getRandomArray(content);
        isStart = true;
        //change display
        $(".start").css("display","none")
        $(".my-2").css("display","flex");
        $(".result").css("display","none");
        winCount =0;
        lossCount = 0;
        timeUpCount =0;
    } else {//start to answer and countDown
        var input = $(this).text();
        if (input == answer) {//correct
            winCount++;
        } else {//wrong
            lossCount++;
        }
    }
    //as long as the button is clicked there should be a reloaded page
    reload(questionCount);
    timer();
});