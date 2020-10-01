/*
Backbone.js
Pegasus v2.0 
Aniket Chaudhari
main file, runs on initialization
*/
window.onload = initOS;
window.onblur = function(){
	window.focus();
};
window.onkeydown = checkShortcut;
var isConnected;
function initOS(){
	checkBrowser();
	setTime();
	checkData();
	lockOS();
	//cut(lockScreen);
	checkNet();
	}
function launchFullscreen(element) {
    if(element.requestFullscreen) {
        element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}
function $(e){
	return document.querySelector(e);
}


function disableAll(){
	var containers = ['#topPanel','#desktop','#taskbar'];
	for(var i=0;i<containers.length;i++){
		cut($(containers[i]));
	}
}
function enableAll(){
	var containers = ['#topPanel','#desktop','#taskbar'];
	for(var i=0;i<containers.length;i++){
		show($(containers[i]));
	}
}
function checkBrowser(){
	var ba = ["Chrome","Firefox","Safari","Opera","MSIE","Trident","Edge"];
var b, ua = navigator.userAgent;
for(var i=0; i < ba.length; i++){
    if( ua.indexOf(ba[i]) > -1 ){
        b = ba[i];
        break;
    }
}
if(b == "MSIE" || b == "Trident" || b == "Edge" || b=="Safari"){
    b = "Internet Explorer";
	var err = '<font color="red" size="30px">Error!</font><br><h3>Error parsing browser.<br>Please use a modern browser like Chrome,Mozilla,Opera</h3>';
	document.write(err);
	}
if(b=="Firefox"){
	document.body.style.font = 'menu';
	msg('Mozilla does not support certain features<br>Chrome browser is recommended.');
}
if(b=="Chrome"){
	document.body.style.fontFamily = 'Segoe ui light';
}
}
function checkShortcut(e){

		if(e.ctrlKey && e.shiftKey && e.keyCode==69){
			display(appsDrawer);
			e.preventDefault();
		}
		//F5 disabled
		if(e.keyCode==116){
			refreshOS();
			e.preventDefault();
			
		}
		if(e.keyCode==112){
			refreshOS();
			e.preventDefault();
			
		}
		//Ctrl + U disabled
		if(e.ctrlKey && e.keyCode==85){
			e.preventDefault();
		}
		//Ctrl + F disabled
		if(e.ctrlKey && e.keyCode==70){
			e.preventDefault();
		}
		//Ctrl + S disabled
		if(e.ctrlKey && e.keyCode==83){
			findSearch();
			e.preventDefault();
		}
		//Ctrl + J disabled
		if(e.ctrlKey && e.keyCode==74){
			e.preventDefault();
		}
		/*Refresh disabled
		if(e.ctrlKey && e.keyCode==82){
			e.preventDefault();
		}
		*/
		//Ctrl + Shift + S triggers Search function
		if(e.ctrlKey && e.shiftKey && e.keyCode==83){
			
			e.preventDefault();
		}
		if(e.keyCode==91){
			display(appsDrawer);
			e.preventDefault();
			return false;
		}
		if(e.keyCode==192){
			display(terminal);
			e.preventDefault();
			return false;
		}
}
function checkData(){
	var name  = localStorage.name;
	var bg  = localStorage.bg;
	var anim = localStorage.anim;
	var welcome = localStorage.welcome;
	//bg
	if(bg===undefined){
		localStorage.bg = 'res/assets/background.png';
		document.body.background = localStorage.bg;
		$('#previewer').src = document.body.background;
	}
	else{
		bg = localStorage.bg;
		document.body.background = localStorage.bg;
		$('#previewer').src = document.body.background;
	}
	//anim
	if(localStorage.anim===undefined){
		localStorage.anim = 'res/css/anim/theme_pegasus.css';
	}
	else{
		$('#animSetter').href = localStorage.anim;
	}
	//name
	if(name===undefined){
		localStorage.name = 'User';
	}
	else{
		name = localStorage.name;
		$('#username').innerHTML = localStorage.name;
	}
	if(welcome===undefined){
		localStorage.welcome = false;
		msg('Go to : <br> <i class="fa fa-home"></i> > Settings > Animations > set animations');
	}
	else{
		localStorage.welcome = true;
	}
	
}
function confExit(){
	var conf = confirm("Shutdown OS?");
	if(conf===true){
		window.close();
	}
	else{
		return false;
	}
}
