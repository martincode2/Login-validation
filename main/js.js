const name = document.getElementById("name");
const address = document.geElementById("address");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password1 = document.getElementById("password1");

//Here is data submitting if unsual the user seen the validation
//get start

form.addEventListener('submit', e=>{
	e.preventDefault();
	validateInput();
});

//here is setting error message after action
const setWrong (element, message) => {
	const inputControl = element.parentElement;
	const wrongDisplay = inputControl.querySelector(".wrong");
	wrongDisplay.innerText = message;
	inputControl.classList.add("wrong");
	inputControl.classList.remove("usual");
}

// Set usual meassage validation

const setUsual = element =>{
	const inputControl = element.parentElement;
	wrongDisplay = inputControl.querySelector(".wrong");
	wrongDisplay = innerText ='';
	inputControl.classList.remove(usual);
	inputControl.classList.add("wrong");
	
}
const NtabwoArimail = email => {
	 const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	 return re.test(String(email).toLowerCase());
}

//error message displayed //
const validateInput = () => {
	const nameValue = name.value.trim();
	const addressValue = address.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password1Value = password1.value.trim();
	
	
	// if condition error message entered by the user
	if (nameValue === '')
	{
		setWrong(name, 'Please Name Is Require');
	}
	else
	{
		setUsual(name);
	}
	if (addressValue === '')
	{
		setWrong(address, 'Please Address is Require');
	}
	else
	{
		setUsual(address);
	}
	if (emailValue === '')
	{
		setWrong(email, 'Please Email Is Require ');
	}
	else if (!NtabwoArimail(emailValue))
	{
		setWrong(email, 'Please Provide Usual Email');
	}
	else
	{
		setUsual(email);
	}
	if (passwordValue === '')
	{
		setWrong(password, 'Please Password is Rquere');
		
	}
	else
	{
		setUsual(password);
		
	}
	if (password.length <8)
	{
		setWrong(password, 'Please password Must At least 8 charter');
	}
	else if (passwordValue !== password1Value)
	{
		setWrong(password1,'Check Well Your Password is not match');
	}	
else
{
	setUsual(password1);
}	
};
