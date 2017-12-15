var template = {
	
	character: {
		level: {
			title: "Level",
			type: "number"
		},
		class: {
			title: "Class",
			 type: "text" 
		},
		race: {
			title: "Race",
			 type: "text" 
		},
		background: {
			title: "Background",
			 type: "text" 
		},
		alignment: {
			title: "Alignment",
			 type: "text" 
		},
	},
	other1: {
		armor: {
			title: "Armor",
			 type: "number" 
		},
		initiative: {
			title: "Initiative",
			 type: "number" 
		},
		speed: {
			title: "Speed",
			 type: "number" 
		},		
		hitDice: {
			title: "Hit Dice",
			type: "text",
			style: "width: 150px;",
		},
	},
	other2: {
		experience: {
			title: "Experience",
			 type: "number" 
		},
	},
	other3: {
		inspiration: {
			title: "Inspiration",
			 type: "number" 
		},
	},
	other4: {
		proficiency: {
			title: "Proficiency",
			 type: "number" 
		},
		perception: {
			title: "Perception",
			 type: "number" 
		},
	},
	other5: {
		appearance: {
			title: "Appearance",
			type: "paragraph",
		},
		backstory: {
			title:"Back Story",
			type: "paragraph",
		}
	},
	hp: {
		current: {
			 type: "number" 
		},
		temp: {
			 type: "number" 
		},
	},
	stats: {
		str: {
			 title: "Strength",
			 type: "number",
			 background: "box-shadow: inset 0 0 10px #900;"
		},
		dex: {
			 title: "Dexterity",
			 type: "number",
			 background: "box-shadow: inset 0 0 10px #090;",
		},
		int: {
			 title: "Intelligence",
			 type: "number",
			 background: "box-shadow: inset 0 0 10px #009;",
		},
		wis: {
			 title: "Wisdom",
			 type: "number",
			 background: "box-shadow: inset 0 0 10px #909",
		},
		chr: {
			 title: "Charisma",
			 type: "number",
			 background: "box-shadow: inset 0 0 10px #990",
		},
	},
	skills: {
		str: {
			athletics: {
				title: "Athletics",
				type: "number" 
			},
		},
		dex: {
			acrobatics: {
				title: "Acrobatics",
				 type: "number" 
			},
			sleightHand: {
				title: "Sleight of Hand",
				 type: "number" 
			},
			stealth: {
				title: "Stealth",
				 type: "number" 
			},
		},
		wis: {
			animalHandling: {
				title: "Animal Handling",
				type: "number" 
			},
			insight: {
				title: "Insight",
				 type: "number" 
			},
			medicine: {
				title: "Medicine",
				type: "number" 
			},
			perception: {
				title: "Perception",
				 type: "number" 
			},
			survival: {
				title: "Survival",
				 type: "number" 
			},
		},
		int: {
			arcana: {
				title: "Arcana",
				type: "number" 
			},
			history: {
				title: "History",
				 type: "number" 
			},
			investigation: {
				title: "Investigation",
				 type: "number" 
			},
			nature: {
				title: "Nature",
				type: "number" 
			},
			religion: {
				title: "Religion",
				 type: "number" 
			},
		},
		chr: {
			deception: {
				title: "Deception",
				type: "number" 
			},
			intimidation: {
				title: "Intimidation",
				 type: "number" 
			},
			performance: {
				title: "Performance",
				 type: "number" 
			},
			persuasion: {
				title: "Persuasion",
				 type: "number" 
			},
		},
	},
	saves: {
		strength: {
			 type: "number" 
		},
		dexterity: {
			 type: "number" 
		},
		constitution: {
			 type: "number" 
		},
		intelligence: {
			 type: "number" 
		},
		wisdom: {
			 type: "number" 
		},
		charisma: {
			 type: "number" 
		},
	},
	attack: [],
	equipment: [],
	treasure: [],
	traits: [],
	allies: {},
};

function loadObject(title, varObj, appendTo){
	var system = appendTo || document.getElementById("systemPanel");
	var container = document.createElement("fieldset");
	var legend = document.createElement("legend");
	legend.innerHTML = title;
	legend.addEventListener("click", function(){
		if(container.style.maxHeight != "100%"){
			container.style.maxHeight = "100%";
		} else {
			container.style.maxHeight = "25px";
		}
	}, container);
	container.appendChild(legend);
	container.setAttribute("class", "systemObject");
	for(var key in varObj){
		var smallCont = document.createElement("div");
		var label = document.createElement("label");
		label.innerHTML = varObj[key].title || key;
		if(varObj[key].type == "paragraph"){
			var input = document.createElement("textarea");
		} else {
			var input = document.createElement("input");
			input.type = varObj[key].type;
		}
		input.id = key;
		label.for = key;
		if(varObj[key].hasOwnProperty("style")){
			input.style = varObj[key].style;
		}
		if(varObj[key].hasOwnProperty("background")){
			smallCont.style = varObj[key].background;
		}
		smallCont.appendChild(input);
		smallCont.appendChild(label);
		container.appendChild(smallCont);
	}
	system.appendChild(container);
	$(container).draggable({
		handle: legend,
		containment: "parent",
		grid: [20,20],
		snap: "true",
	});
}

function loadUserPanel(imgString){
	var panel = document.getElementById("leftPanel");
	var picture = document.createElement("img");
	var pictureFrame = document.createElement("div");
	picture.id = "user-pic";
	picture.src = imgString || "person.svg";
	pictureFrame.id = "user-frame";
	pictureFrame.appendChild(picture);
	panel.appendChild(pictureFrame);
	var titleFrame = document.createElement("div");
	titleFrame.id = "title-frame";
	var title = document.createElement("h1");
	var subtitle = document.createElement("h2");
	subtitle.id = "title";
	title.innerHTML = "Alarith, ";
	subtitle.innerHTML = "the Trickster Rogue";
	titleFrame.appendChild(title);
	titleFrame.appendChild(subtitle);
	panel.appendChild(titleFrame);
	var armor = createIconPanel("Health", "heartbeat", "health-panel");
	panel.appendChild(armor);
	var armor = createIconPanel("Temp Health", "heart-o", "tempHealth-panel");
	panel.appendChild(armor);
	var armor = createIconPanel("Armor", "shield", "armor-panel");
	panel.appendChild(armor);
	var armor = createIconPanel("Speed", "flash", "speed-panel");
	panel.appendChild(armor);
}

function createIconPanel(title, faIcon, contId){
	var cont = document.createElement("div");
	var icon = document.createElement("i");
	var input = document.createElement("input");
	var label = document.createElement("label");
	cont.setAttribute("class", "icon-panel");
	cont.id = contId;
	icon.setAttribute("class", "fa fa-"+faIcon);
	input.type = "number";
	label.innerHTML = title;
	cont.appendChild(icon);
	cont.appendChild(input);
	cont.appendChild(label);
	return cont;
}

function cascadeObjects(){
	var panels = document.getElementsByClassName("systemObject");
	for(var i=0; i<panels.length; i++){
		panels[i].style.left = 0;
		panels[i].style.top = i*40;
		panels[i].style.maxHeight = "25px";
	}
	return panels;
}


function alignObjects(){
	var panels = document.getElementsByClassName("systemObject");
	var pos = 0;
	for(var i=0; i<panels.length; i++){
		panels[i].style.maxHeight = "100%";
		panels[i].style.left = 0;
		panels[i].style.top = pos;
		pos = pos + panels[i].offsetHeight + 20;
	}
	return panels;
}

function loadObjects(){
	loadObject("Character Info", template.character);
	loadObject("Character Stats", template.other1);
	loadObject("Experience", template.other2);
	loadObject("Inspiration", template.other3);
	loadObject("Efficiency", template.other4);
	loadObject("Character Story", template.other5);
	loadObject("Stats", template.stats);
	loadObject("Strength Skills", template.skills.str);
	loadObject("Dexterity Skills", template.skills.dex);
	loadObject("Wisdom Skills", template.skills.wis);
	loadObject("Intellect Skills", template.skills.int);
	loadObject("Charisma Skills", template.skills.chr);
	loadObject("Saves", template.saves);
	return true;
}

loadObjects();
loadUserPanel();
alignObjects();