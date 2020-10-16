
function showConfirmation() {
	document.getElementById("error").classList.remove('visible');
  document.getElementById("error").classList.add('hide');
  document.getElementById("correct").classList.add('visible');
 }

function showError(errorText) {
  document.getElementById("correct").classList.remove('visible');
   document.getElementById("correct").classList.add('hide');
   document.getElementById("error").classList.add('visible');
  document.getElementById("error").innerText = errorText
}

 
function validation()								 
{ 
	console.log("Inside validation")
	var firstName = document.getElementById("firstName").value	 
	console.log(firstName)
	var lastName = document.getElementById("lastName").value	
	console.log(lastName)
	var emailAddress = document.getElementById("emailAddress").value	
	console.log(emailAddress)
	var notes = document.getElementById("notes").value
	console.log(notes)
	
	errorText = ""

	if (firstName === "" )								 
	{ 
		errorText = errorText + "First Name can not be empty\n"  
	} 

	if (lastName === "")							 
	{ 
		errorText = errorText + "Last Name can not be empty\n"
	} 
	
	if (emailAddress === "")								 
	{ 
		errorText = errorText + "Email Address can not be empty\n"
	} 

	if (notes === "")						 
	{ 
		errorText = errorText + "Notes can not be empty\n"
	} 

	console.log(errorText)

   if (errorText == "")
      { 
       showConfirmation()
      }
      
     else{
       showError(errorText)
     }
}

