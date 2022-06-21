//Controller
function getString(){
    let userString = document.getElementById("userString").value;
    displayString(isPalindrome(userString));
}

// takes in the string input and compares its reversed version to see if it is a palindrome
function isPalindrome(origString){
    let message = "An Error Occurred, please reset and try again.";
    let stringToCheck = origString.trim().replace(/[^a-zA-Z]/g,'').toUpperCase();
    if(stringToCheck == ""){
        message = `This app does not compare special characters`;
    }
    else if (stringToCheck == reverseString(stringToCheck)) {
        message = `Your Palindrome string is: <b>${stringToCheck}</b>`;
    }
    else{
        message = `Your string: <b class="text-danger">${stringToCheck}</b> was not a Palindrome.`;
    }
    return message;
}

//reverse the input string
function reverseString(origString){
    let reversedString = [];
    for (i=origString.length; i>0; i--) {
        reversedString += origString[i-1];
    };
    return reversedString;
}

//display the results of the app
function displayString(message){
    document.getElementById("message").innerHTML = message;
    document.getElementById("alert").classList.remove("invisible");
}

// clear form
function clearForm(){
    location.reload();
}