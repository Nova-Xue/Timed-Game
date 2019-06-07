// var content = [
//     {
//         question: "1.lorem",
//         answer: "1A.Lorm",
//         meme : "assets/images/meme0.gif",
//         choices: ["1A.Lorm", "2 lore", "3 lore", "4 lorea"]
//     },
//     {
//         question: "2.lorem",
//         answer: "2A.Lorm",
//         meme : "assets/images/meme1.gif",
//         choices: ["2A.Lorm", "2 lore", "3 lore", "4 lorea"]
//     }, {
//         question: "3.lorem",
//         answer: "3A.Lorm",
//         meme : "assets/images/meme2.gif",
//         choices: ["3A.Lorm", "2 lore", "3 lore", "4 lorea"]
//     }, {
//         question: "4.lorem",
//         answer: "4A.Lorm",
//         meme : "assets/images/meme3.gif",
//         choices: ["4A.Lorm", "2 lore", "3 lore", "4 lorea"]
//     },

// ]

// var answer;
// var winCount = 0;
// var lossCount = 0;
// var timeCount = 14;
// var timeUpCount = 0;
// var isStart = false;
// var questionCount = 0;
// var timerId;
// var memeId;
// function getRandomArray(arr) {
//     for (var i = arr.length; i > 0; i--) {
//         var j = Math.floor(Math.random() * arr.length);
//         var t = arr[i - 1];
//         arr[i - 1] = arr[j];
//         arr[j] = t;
//     }
//     return arr;
// }


// function reload(i) {
//     clearInterval(memeId);
//     $(".meme").hide();
//     $(".my-2").css("display","flex");
//     $(".result").hide();
//     $("#timer").text("15");
//     timer();
//     if (i < content.length) {//questions enough
//         var obj = content[i];
//         $(".question").text(obj.question);
//         answer = obj.answer;
//         var buttons = getRandomArray(obj.choices);
//         for (var i = 0; i < 4; i++) {
//             $(".choice" + i).text(buttons[i]);
//         }
//         questionCount++;

//     } else {//no more question
//         loadResult();//load result page
//         questionCount = 0;
//     }   
// }

// function loadResult(){
//     clearInterval(timerId);
//     $(".my-2").css("display","none");
//     $(".result-content").empty();

//     var a = $("<p>").text("wins "+winCount);
//     var b = $("<p>").text("losses "+lossCount);
//     var c = $("<p>").text("time up  "+timeUpCount);

//     $(".result-content").append(a);
//     $(".result-content").append(b);
//     $(".result-content").append(c);
//     $(".result").css("display","block");
//     isStart = false;
// }

// function countDown(){

//     if(timeCount>=0){
//         $("#timer").text(timeCount);
//         timeCount--;

//     }else{
//         //time up and load meme
//         displayMeme("time is up");
//         timeUpCount++;
//         reload(questionCount);
//     }
// }

// function timer(){
//    if(timerId != ""){
//     clearInterval(timerId);
//     timeCount = 14;
//    }
//    timerId = setInterval(countDown,1000);
// }

// function displayMeme(display){
//         //change display
//         $(".my-2").css("display","none");
//         $(".meme").css("display","flex");
//         $(".meme").text("");
//         let h2 = $("<h2>").text(display);
//         let h3 = $("<h2>").text("the answer is "+content[questionCount].answer);
//         let img = $("<img>").attr("src",content[questionCount].meme);
//         $(".meme").append(h2,h3,img);
//     clearInterval(timerId);
//     memeId = setInterval(reload,3000);

// }

// $("button").on("click", function () {
//     console.log("click");

//     if (!isStart) {//not start
//         content = getRandomArray(content);
//         isStart = true;
//         //change display
//         $(".start").css("display","none")
//         $(".my-2").css("display","flex");
//         $(".result").css("display","none");
//         winCount =0;
//         lossCount = 0;
//         timeUpCount =0;

//     } else {//start to answer and countDown
//         var input = $(this).text();
//         if (input == answer) {//correct

//             winCount++;
//             displayMeme("correct");
//         } else {//wrong
//             lossCount++;
//             displayMeme("wrong");
//         }
//     }
//     //as long as the button is clicked there should be a reloaded page
//     //clearTimeout(memeId);

// });


$(document).ready(function () {

    var content = [
        {
            question: "1.lorem",
            answer: "1A.Lorm",
            meme: "assets/images/meme0.gif",
            choices: ["1A.Lorm", "2 lore", "3 lore", "4 lorea"]
        },
        {
            question: "2.lorem",
            answer: "2A.Lorm",
            meme: "assets/images/meme1.gif",
            choices: ["2A.Lorm", "2 lore", "3 lore", "4 lorea"]
        }, {
            question: "3.lorem",
            answer: "3A.Lorm",
            meme: "assets/images/meme2.gif",
            choices: ["3A.Lorm", "2 lore", "3 lore", "4 lorea"]
        }, {
            question: "4.lorem",
            answer: "4A.Lorm",
            meme: "assets/images/meme3.jpg",
            choices: ["4A.Lorm", "2 lore", "3 lore", "4 lorea"]
        },

    ]

    var answer;
    var winCount = 0;
    var lossCount = 0;
    var timeCount = 14;
    var timeUpCount = 0;
    var isStart = false;
    var questionCount = 0;
    var timerId;
    var memeId;
    function getRandomArray(arr) {
        for (var i = arr.length; i > 0; i--) {
            var j = Math.floor(Math.random() * arr.length);
            var t = arr[i - 1];
            arr[i - 1] = arr[j];
            arr[j] = t;
        }
        return arr;
    }
    function displayMeme(display) {
        clearInterval(timerId);
        //change display
        $(".my-2").hide();
        $(".meme").css("display", "flex");
        $(".meme").text("");
        let h2 = $("<h2>").text(display+" the answer is " + content[questionCount].answer);
        let img = $("<img>").attr("src", content[questionCount].meme);
        $(".meme").append(h2, img);
        questionCount++;//next question 
        memeId = setInterval(reload, 3000);


    }
    function loadResult() {
        $(".my-2").hide();
        $(".meme").hide();
        $(".result-content").empty();

        var a = $("<p>").text("wins " + winCount);
        var b = $("<p>").text("losses " + lossCount);
        var c = $("<p>").text("time up  " + timeUpCount);

        $(".result-content").append(a);
        $(".result-content").append(b);
        $(".result-content").append(c);
        $(".result").css("display", "block");
        isStart = false;
        questionCount = 0;
    }

    function countDown() {

        if (timeCount >= 0) {
            $("#timer").text(timeCount);
            timeCount--;

        } else {
            //time up and load meme
            displayMeme("time is up");
            timeUpCount++;
        }
    }

    function timer() {
        if (timerId != "") {
            clearInterval(timerId);
            timeCount = 14;
        }
        timerId = setInterval(countDown, 1000);
    }
    function reload() {
        if (memeId != "") {
            clearInterval(memeId);
        }
        if (questionCount < content.length) {//questions enough //show page
            $(".meme").hide();
            $(".my-2").css("display", "flex");
            $(".result").hide();
            $("#timer").text("15");
            //initialize the game page

            timer();//begin count down
            var obj = content[questionCount];
            $(".question").text(obj.question);
            answer = obj.answer;
            var buttons = getRandomArray(obj.choices);//different order for choices
            for (var i = 0; i < 4; i++) {
                $(".choice" + i).text(buttons[i]);
            }
            

        } else {//no more question
            loadResult();//load result page
            
        }
    }
    $("button").on("click", function () {//button click

        if (!isStart) {//not start
            content = getRandomArray(content);// different order every time
            isStart = true;
            //change display
            $(".start").hide();
            $(".result").hide();
            $(".meme").hide();
            $(".my-2").css("display", "flex");
            winCount = 0;
            lossCount = 0;
            timeUpCount = 0;
            reload(questionCount);
        } else {//start to answer and should begin countdown

            var input = $(this).text();
            if (input == answer) {//correct

                winCount++;
                displayMeme("correct");//click to display meme and meme setinterval to reload
            } else {//wrong
                lossCount++;
                displayMeme("wrong");//click to display meme and meme setinterval to reload
            }
        }


    });//end of button click

});//end of document ready