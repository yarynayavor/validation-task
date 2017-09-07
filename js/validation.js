function createValidationForm() {
	
	createForm=document.createElement("form");
	createForm.setAttribute("name","login");
	createForm.setAttribute("action","https://www.google.com.ua");
	document.body.appendChild(createForm);

	createTextInputs=[];
	for (var i = 0; i < 4; i++) {
		createTextInputs[i]=document.createElement("input");
		createForm.appendChild(createTextInputs[i]);
	}
	for (var j = 0; j < createTextInputs.length-1 ; j++) {
		createTextInputs[j].setAttribute("type","text");
	}
	createTextInputs[0].setAttribute("name","age");
	createTextInputs[0].setAttribute("id","age");
	createTextInputs[1].setAttribute("name","username");
	createTextInputs[1].setAttribute("id","username");
	createTextInputs[2].setAttribute("name","date");
	createTextInputs[2].setAttribute("id","date");
	createTextInputs[3].setAttribute("type","submit");
	createTextInputs[3].setAttribute("id","submit");
	createTextInputs[3].setAttribute("value","Validate Me");

    var itemLabelAge = document.createElement("Label");
    itemLabelAge.setAttribute("for", createTextInputs[0]);
    itemLabelAge.innerHTML = "Enter age: ";
    createForm.insertBefore(itemLabelAge, createTextInputs[0]);

    var itemLabelUser = document.createElement("Label");
    itemLabelUser.setAttribute("for", createTextInputs[1]);
    itemLabelUser.innerHTML = "Enter user: ";
    createForm.insertBefore(itemLabelUser, createTextInputs[1]);

    var itemLabelDate = document.createElement("Label");
    itemLabelDate .setAttribute("for", createTextInputs[2]);
    itemLabelDate .innerHTML = "Enter date: ";
    createForm.insertBefore(itemLabelDate, createTextInputs[2]);
}
createValidationForm();

function checkAge() {
	checkAgeEntering=document.getElementById("age").value;
	submitOK = "true";

	if (checkAgeEntering === "") {
   	    document.getElementById("age").style.border = "3px solid red";
        alert("You entered NOTHING in Age placeholder. Go ahead and enter a positive number,not zero!");
        submitOK = "false";
    }

    else if (~checkAgeEntering.indexOf(" ")) {
 		document.getElementById("age").style.border = "3px solid red";
        alert("You entered Age with SPACE: "+checkAgeEntering+", Seriously? Enter a positive number,not zero!");
 		submitOK = "false";
	}

	else if (~checkAgeEntering.indexOf("e")) {
 		document.getElementById("age").style.border = "3px solid red";
        alert("You entered Age with EXPONENT: "+checkAgeEntering +", Seriously? Enter a positive number,not zero!");
 		submitOK = "false";
	}

    else if(parseInt(checkAgeEntering) < 0) {
   	    document.getElementById("age").style.border = "3px solid red";
        alert("You entered NEGATIVE Age: "+checkAgeEntering+", Seriously, ? Enter a positive number,not zero!");
        submitOK = "false";
    }
    else if(isNaN(checkAgeEntering)) {
    	document.getElementById("age").style.border = "3px solid red";
    	alert("You entered Age: "+checkAgeEntering+", Seriously? Enter a positive number,not zero!");
        submitOK = "false";
    }

    else if(parseInt(checkAgeEntering) >= 0) {

        document.getElementById("age").style.border = "3px solid green";
    	// alert("Age validated sucessfully!!");
		// submitOK = "true";
		submitOK = "false";
    }

    else {
    	if (submitOK == "false") {
        return false;
     }
    }
}

function checkUser() {
	checkUserEntering=document.getElementById("username").value;
	submitOK = "true";
    userStart="user_";
    userEnter=checkUserEntering[0]+checkUserEntering[1]+checkUserEntering[2]+checkUserEntering[3]+
    checkUserEntering[4];


    if (checkUserEntering==="") {
    	document.getElementById("username").style.border = "3px solid red";
    	alert("You entered NOTHING in Username placeholder. Go ahead and enter a valid username starts with user_");
        submitOK = "false";
    }

    else if ((~checkUserEntering.substr(5).indexOf(" ")) && ((userEnter)===userStart)) {
    	document.getElementById("username").style.border = "3px solid red";
    	alert("You entered USER NAME with SPACES: "+checkUserEntering+". Enter a valid username starts with user_ and no spaces!!!");
    	submitOK = "false";
    }

    else if((!(~checkUserEntering.substr(5).indexOf(" ")) && ((userEnter)===userStart)) 
    	&& (checkUserEntering.substr(5)!=="")) {
    	document.getElementById("username").style.border = "3px solid green";
    	// alert("Username validated sucessfully!");
		submitOK = "false";
    }


    else {
        document.getElementById("username").style.border = "3px solid red";
    	alert("You entered INVALID USER NAME: "+checkUserEntering+". Enter a valid username without SPACES starts with user_ + your username ");
    	submitOK = "false";
    	if (submitOK == "false") {
        return false;
     }
    }
}

function checkDate() {
	checkDateEntering=document.getElementById("date").value;
	submitOK = "true";
     
    currentDate = new Date();
	dd = currentDate.getDate();
	mm = currentDate.getMonth()+1; //January is 0!
	yyyy = currentDate.getFullYear();

	if(dd<10){
	    dd='0'+dd;
	} 
	if(mm<10){
	    mm='0'+mm;
	} 
	currentDate= dd+'/'+mm+'/'+yyyy;

	if (checkDateEntering==="") {
		document.getElementById("date").style.border = "3px solid red";
    	alert("You entered NOTHING in Date placeholder. Go ahead and enter a valid current date in format dd/mm/yyyy !");
        submitOK = "false";
	}

	else if(checkDateEntering===currentDate) {
		document.getElementById("date").style.border = "3px solid green";
		// alert("Date validated sucessfully!!");
		submitOK = "false";
	} else {
		document.getElementById("date").style.border = "3px solid red";
    	alert("You entered INVALID CURRENT DATE: "+checkDateEntering+". Enter a valid current date in format dd/mm/yyyy without spaces!");
    	submitOK = "false";
    	if (submitOK == "false") {
        return false;
     }
	}
}


function checkInputs() {
	
	checkAge();
	checkUser();
	checkDate();

	 if ((((parseInt(checkAgeEntering) >= 0) && ((!(~checkUserEntering.substr(5).indexOf(" ")) && ((userEnter)===userStart)) 
    	&& (checkUserEntering.substr(5)!==""))) && (checkDateEntering===currentDate))) {
		alert("Congratulations! Form validated sucessfully!!");
        submitOK == "true"
	}
	else {
		if (submitOK == "false") {
        return false;
    }
	}
}

createForm.setAttribute("onsubmit","return checkInputs()");
