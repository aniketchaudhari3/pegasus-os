/*
App_Manager.js
Pegasus v2.0 
Aniket Chaudhari

Application container creation code

Application launcher function 
/*
* @param name : Application name to be displayed in the title bar
* @param link : Application source to be displayed in the iframe
*/
function launchApp(name,link){
	
	//creating the containers
	var container = document.createElement("div");
	var controls = document.createElement("div");
	var appname = document.createElement("div");
	var cut = document.createElement("div");
	var viewer = document.createElement("iframe");
	
	//setting the attributes
	container.setAttribute("id","appPlayer");
	controls.setAttribute("id","controls");
	appname.setAttribute("id","appName");
	cut.setAttribute("id","cut");
	cut.setAttribute("onclick","$('#appPlayer').remove()");
	viewer.setAttribute("id","appViewer");
	
	//appending the children to parents
	$('#desktop').appendChild(container);
	container.appendChild(controls);
	controls.appendChild(appname);
	controls.appendChild(cut);
	container.appendChild(viewer);
	
	//rendering the input to containers
	appname.innerHTML = name;
	appname.addEventListener("mousedown",function(e){
		e.preventDefault();
	});
	cut.innerHTML = '<i class="fa fa-times-circle-o"></i>';
	viewer.src = link;
	hide(appsDrawer)
	display(container);
	
}

//Message dialog function
function msg(txt){
	
	//creating the containers
	
	var container = document.createElement("div");
	var head = document.createElement("div");
	var cut = document.createElement("div");
	var msg = document.createElement("div");
	
	//setting their attributes
	
	container.setAttribute("id","msgBox");
	head.setAttribute("id","head");
	cut.setAttribute("id","cut");
	cut.setAttribute("onclick","$('#msgBox').remove()");
	msg.setAttribute("id","msg");
	
	//appending the children to parents
	
	$('#desktop').appendChild(container);
	container.appendChild(head);
	container.appendChild(cut);
	container.appendChild(msg);
	
	//rendering input to containers
	head.innerHTML = '<i class="fa fa-info-circle"></i> &nbsp; Message';
	cut.innerHTML = '<i class="fa fa-times-circle-o"></i>';
	msg.innerHTML = txt;
	
	display(container);
}

// app_manager.js ends here
