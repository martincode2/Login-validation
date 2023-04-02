//declaration const string object function

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//on submit process for the user entering thier creditails
form.addEventListener('submit', e=> {
    e.preventDefault();
    validateInputs();
});

//set error massage validation if the need to without fell form
const setError = (element, message) => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');
errorDisplay.innerText = message;
inputControl.classList.add('error');
inputControl.classList.remove('success');


}

//set success element after user entering data form
const setSuccess  = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
//email validation for the user
const isValidEmail = email => {
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//string error massage user must change

const validateInputs = () => {
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();

//if condition logic for the user
if (usernameValue === '')
{
    setError(username, 'username is require');

}
else{
setSuccess(username);
}
if(emailValue === '')
{
    setError(email, 'Email is Require');
}
else if(!isValidEmail(emailValue))
{
    setError(email, 'Provide a Valid Email Address');
}
else
{
setSuccess(email);
}
if (passwordValue ==='')
{
    setError(password, 'Password is Require');
}
else
{
    setSuccess(password);
}
if(passwordValue.length < 6 )
{
setError(password, 'Password at Least 6 Charcter');
}
if(password2Value === '')
{
    setError(password2, 'Comfarm Password in Require');
}
else if (passwordValue !== password2Value)
{
setError(password2, 'Password is not  Match');
}
else
{
    setSuccess(password2);
}
};
