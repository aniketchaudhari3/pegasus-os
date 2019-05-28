/*
notepad.js
Pegasus v2.0
Aniket Chaudhari
*/
function initNotepad(){
	$('#notepad').value='';
	var initFontSize = parseInt(window.getComputedStyle($('#notepad'),null).getPropertyValue('font-size'));
	$('#fontSizeOut').innerHTML = initFontSize + 'px';
	$('#notepad').focus();
	var infobars = ["fileName","fileSize","fileType"];
	for(var i=0;i<infobars.length;i++){
		document.getElementById(infobars[i]).innerHTML = '';
		}
	$('#fileMenu').value = 'File';
}
function toNotepad(){
	$('#notepad').style.display = 'block';
}
function changeFont(family){
	if(family=="Custom"){
		var fontName = prompt("Enter Font Name:");
		$('#notepad').style.fontFamily = fontName;
	}
	else{
	$('#notepad').style.fontFamily = family;
}
}

function incFont(){
	var initFontSize = parseInt(window.getComputedStyle($('#notepad'),null).getPropertyValue('font-size'));
	$('#notepad').style.fontSize  = initFontSize + 1 + 'px';
	$('#fontSizeOut').innerHTML = initFontSize + 1 + 'px';
}
function decFont(){
	var initFontSize = parseInt(window.getComputedStyle($('#notepad'),null).getPropertyValue('font-size'));
	$('#notepad').style.fontSize  = initFontSize - 1 + 'px';
	$('#fontSizeOut').innerHTML = initFontSize - 1 + 'px';
}
function setCustomSize(){
	var initFontSize = parseInt(window.getComputedStyle($('#notepad'),null).getPropertyValue('font-size'));
	var fontSize = parseFloat(prompt("Enter Font size:",initFontSize));
	if(fontSize == "NaN"){
		return false;
	}
	else{
		$('#notepad').style.fontSize  = fontSize;
	$('#fontSizeOut').innerHTML = fontSize+'px';
	}
	
}
function openFile(event){
	$('#msgBox').style.display = 'block';
	cut(notepadWindow);
    var f = event.target.files[0]; 

function writeDetails(){
	var size = f.size;
	var name = f.name;
	var type = f.type;
	var isize,iname,itype;
	iname = $('#fileName');
	itype = $('#fileType');
	isize = $('#fileSize');
	
	switch(type){
		case'text/html':itype.innerHTML="HTML file";
		break;
		case'text/css':itype.innerHTML='CSS file';
		break;
		case'text/plain':itype.innerHTML='Text file';
		break;
		case'application/javascript':itype.innerHTML='JavaScript file';
		break;
		default:itype.innerHTML = type;
		break;
	}
	iname.innerHTML = name;
	if(size < 1024){
			isize.innerHTML = "Size : "+Math.floor(size)+ "B";
	}
	if(size > 1024){
	isize.innerHTML = "Size : "+Math.floor(size/1024)+ "KB";
	}
	if(size >  1048576){
		isize.innerHTML = "Size : "+Math.floor(size/1048576)+ "MB";
	}
}
    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
	      var contents = e.target.result;
        
		$('#notepad').value = contents;
		writeDetails();
		}
      r.readAsText(f);
	
    } 
	else{
		
	}
	cut(msgBox);
	show(notepadWindow);
	$('#fileMenu').value = 'File';
  }	
	

function saveNote(){
	var noteContent = $('#notepad').value;
	
		var filename = prompt("Save as:","*.txt");
		
		if(filename===false || filename=="*.txt"){
			return false;
		}
		else{
		var textBLOB = new Blob([noteContent], {type:"text/plain"});
		if(filename == "" || filename===undefined){
		filename=="Untitled"
		}
		var link = document.createElement('a');
		link.download = filename;
		link.innerHTML = "Download File";
		if(window.URL !=null){
		link.href = window.URL.createObjectURL(textBLOB);
	
		}
		else{
		link.href = window.URL.createObjectURL(textBLOB);
		link.onclick = destroy;
		link.style.display = 'none';
		document.body.appendChild(link);
		}
		link.click();
		$('#fileName').innerHTML = filename
		;
		}
		function destroy(e){
			document.body.removeChild(e.target);
		}
}
function printNote(){
	var noteContent = $('#notepad').value;
	
	//getting the initial content
	
	var initHTML = document.body.innerHTML;
	//setting global innerHTML as noteContent
	document.body.innerHTML = noteContent;
	window.print();
	//initializing the document
	document.body.innerHTML = initHTML;
}
function exitNotepad(){
	$('#notepad').value='';
	hide(notepadWindow);
}

function file(order){
	switch(order){
		case'File':return false;
		break;
		case'New':$('#notepad').value='';initNotepad();
		break;
		case'Save':saveNote();
		break;
		case'Open':openFile();
		break;
		case'Print':printNote();
		break;
		case'Exit':exitNotepad();
		break;
	}
}
function changeFontColor(shade){
	$('#notepad').style.color = shade.toString();
}