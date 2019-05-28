/*
Window_Manager.js
Pegasus v2.0 
Aniket Chaudhari
*/

//display containers without animation
function show(e){
	var css = e.style;
	css.animation = '';
	css.display = 'block';
}
//hide containers without animation
function cut(e){
	var css = e.style;
	css.animation = '';
	css.display = 'none';
}
//display containers with animation
function display(e){
	var css = e.style;
	css.display = 'block';
	
	css.animation = 'bubble 0.45s 1';	
	
if(e.id=="terminal"){
	$('#terminalInput').focus();
	$('#terminalOutput').innerHTML = '> ' + localStorage.name +'@pegasus';
}
if(e.id=="notepadWindow"){
	initNotepad();
}
}
//hide containers with animation
function hide(e){
	var css = e.style;
	css.animation = 'closeapp 0.45s 1';
	setTimeout(function(){
		css.display = 'none';
	},440)
}
function destroy(e){
	$(e).remove();
}
//toggle function for settings window
	function toggle(e){
		var css = e.style;
		var panels = ['accountPanel','bgPanel','timePanel','personifyPanel','aboutPanel','stopwatch','alarm','timer'];
		for(var i=0;i<panels.length;i++){
			document.getElementById(panels[i]).style.display = 'none';
			
		}
		cut(defaultPanel);
		cut(defaultClockPanel);
		css.display = 'block';
		css.animation = 'fadeInUp 0.45s 1';
	}
//anim setter function
function setAnim(anim){
	var keyframe;
	switch(anim){
		case'Candy':
		var keyframe = 'res/css/anim/theme_candy.css';
		break;
		case'Pegasus':
		var keyframe = 'res/css/anim/theme_pegasus.css';
		break;
		case'Materialize':
		var keyframe = 'res/css/anim/theme_materialize.css';
		break;
		case'No Animations':
		var keyframe = 'res/css/anim/no_anim.css';
		break;
	}
	localStorage.anim = keyframe;
	$('#animSetter').href = keyframe;
	msg('"' + anim + '" set as animation theme.');
}