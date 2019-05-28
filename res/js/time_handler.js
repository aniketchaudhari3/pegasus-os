/*
time_handler.js
Pegasus v2.0
Aniket Chaudhari
*/
//Universal Date Object
var date = new Date();

var timeObj = {
	
	hour : date.getHours(),
	min  : date.getMinutes(),
	sec  : date.getSeconds(),
   today : date.getDate(),
  weekDay: date.getDay(),
	monthNo: date.getMonth(),
    year : date.getFullYear(),
	days : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
	months : ['January','February','March','April','May','June','July','August','September','October','November','December'],
};

function setTime(){
	var date = new Date();

var timeObj = {
	
	hour : date.getHours(),
	min  : date.getMinutes().toString(),
	sec  : date.getSeconds(),
   today : date.getDate(),
  weekDay: date.getDay(),
	monthNo: date.getMonth(),
    year : date.getFullYear(),
	days : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
	months : ['January','February','March','April','May','June','July','August','September','October','November','December'],
};
	var hour = timeObj.hour;
	var min = timeObj.min;
	var sec = timeObj.sec;
	//Weekday configuration
	var weekDay = timeObj.weekDay;
	var day = timeObj.days[weekDay]; 
	//AM PM innerHTMLs
	var ampm;
	//Months configuration
	var monthIndex = timeObj.monthNo;
	var month = timeObj.months[monthIndex];
	if(hour > 12){
		ampm = "PM";
		hour = hour - 12;
		
	}
	
	else{
		ampm = "AM";
	}
	if(min.length==1){
		min = "0" + min;
		
	}
	else{
		min = min;
	}
	var time = hour + ":" + min;
	
	$('#time').innerHTML = time;
	$('#timeHolder').innerHTML = day.substr(0,3) + "&nbsp;" + time + "&nbsp;" + ampm;
	$('#dateBar').innerHTML = day + ",&nbsp;" + month.substr(0,3) + "&nbsp;"  +  timeObj.today;
}
setInterval("setTime()",500);