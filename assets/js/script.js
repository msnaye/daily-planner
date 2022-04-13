var todaysDate = moment().format("dddd[,] MMMM Do YYYY");
//console.log(todaysDate)

var currentDayBlock = $("#currentDay")
currentDayBlock.text(todaysDate)

var currentHour = moment().hour()
//console.log(currentHour)
$(".description").each(function(){
    var blockTime = $(this).attr("id")
    //console.log(blockTime)
    if (parseInt(blockTime)===currentHour){
        $(this).addClass("present")
    }
    else if (parseInt(blockTime)>currentHour){
        $(this).addClass("future")
    }
    else {
        $(this).addClass("past")
    }
})

$(".saveBtn").on("click", function(){
    //console.log("button clicked")
    var timeKey = $(this).siblings("textArea").attr("id")
    var userInput = $(this).siblings("textArea").val()
    localStorage.setItem(timeKey, userInput)
})

function getItem (){
    for(var i=0;i<localStorage.length; i++){
        var timeKey=localStorage.key(i)
        var userInput=localStorage.getItem(timeKey)
        //console.log(userInput)
        $("#"+timeKey).val(userInput)
    }
}
getItem()