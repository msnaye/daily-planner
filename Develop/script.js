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