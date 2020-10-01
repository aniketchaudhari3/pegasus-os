/*
terminal.js
Pegasus v2.0
Aniket Chaudhari
Desc: Terminal JS code
*/

function out(msg){
	$('#terminalOutput').innerHTML = ""+msg+"<br>";
	$('#terminalInput').value = "";
	
}
function listenCmd(command){
	 if(command=="help"){
		var helpmenu = '<h3>Commands:</h3><b>help</b>:displays command menu<br><b>echo text</b>:prints text<br><b>time</b>:shows current time<br><b>restart</b>:restarts operating system<br><b>clear</b>:clears terminal<br><b>sysinfo</b>:displays system info<br><b>die</b>:kills master process<br><b>exit</b>:exits terminal window<br><b>eval</b>:execute calculator<br><b>lock</b>:Locks OS<br>';
		out(helpmenu);
	}
	
	else if(command.search('echo') > -1){
		var msg = command.replace('echo','');
		out(msg);
	}
	else if(command=="time"){
		var date = new Date();
		out(date);
	}
	else if(command=="eval"){
		out('Calculator Executed');
		display(calculatorApp);
	}
	else if(command=="clear"){
		$('#terminalOutput').innerHTML = '';
		//$('#terminalInput').value = "";
	}
	
	else if(command=="exit"){
		hide(terminal);
		clrTerminal();
	}
	else if(command=="sysinfo"){
		var ua = navigator.userAgent;
		var os,platform;
		if(ua.indexOf('Windows') > -1){
			os="Windows";
		}
		if(ua.indexOf('Macintosh') > -1){
			os="Macintosh";
		}
		if(ua.indexOf('Linux') > -1){
			os="Linux";
		}
		var info = "<br>System administrator: "+localStorage.name + "<br>System detected: "+ os + "<br>Platform detected: "+navigator.platform + "<br> Internet connection available: "+navigator.onLine;
		out(info);
	
	
	}
	else if(command=="restart"){
		restart();
		function restart(){
			var count = 3;
			setInterval(function(){
				out('Restarting... '+count--);
			},1000);
			setTimeout(function(){
			location.reload();
		},3500);
		}
	}
	else if(command=="die"){
		var ask = confirm("Kill master process?\nDoing this will delete the main document");
		if(ask===true){
			document.body.remove();
			document.write('<b style="color:red">Fatal Error: </b>document object not found.');
		}
		else{
			return false;
		}
	}
	else if(command=="lock"){
		lockOS();
	}
	
	else if(command=="reset os"){
		localStorage.clear();
		localStorage.welcome = false;
		location.reload();
	}
	else{
		out('Command: "'+ command + '" not recognised <br><br>type "help" for command menu');
	}
}
