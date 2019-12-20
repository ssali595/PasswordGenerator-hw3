

//This function creates and stores my variables, then returns an array 
var textLength
var wantUpperCase
var upperCase = ["A","B","C","D","E","F","G"]
var numberArray = [1,2,3,4,5,6,7,8,9,10]
var specialsArray = ["!","@","#","$","%","^","&","*","(",")"]
var lowerCase = ["a","b","c","d","e","f","g"]
var wantNumber 
function passPrompt() {

    textLength= prompt("How many characters should your password be? (between 8 and 128)");
    var wantSpecialChar= confirm("Do you want Special Characters?");
    wantNumber= confirm("Do you want numbers?");
    var wantLowerCase= confirm("Do you want lowercase letters?");
    wantUpperCase= confirm("Do you wannt uppercase letters?");
    console.log(textLength,wantUpperCase);
    validation(textLength,wantUpperCase,wantNumber,wantSpecialChar,wantLowerCase);
    // var userSelectionArray = [textLength, wantSpecialChar, wantNumber, wantLowerCase, wantUpperCase];
    // console.log(userSelectionArray);
    // return userSelectionArray;
}
passPrompt();

//this function is going to validate the array that I have created 

function validation(textLength,wantUpperCase,wantNumber,wantSpecialChar,wantLowerCase) {
    console.log(textLength,wantUpperCase)
    var passwordArray = []
    if (wantUpperCase === true) {
    passwordArray.push(upperCase)
        
    }


    if (wantNumber === true) {
        passwordArray.push(numberArray)
    }

    if (wantSpecialChar === true) {
        passwordArray.push(specialsArray)
    }

    if (wantLowerCase === true) {
        passwordArray.push(lowerCase)
    }

    console.log(passwordArray)

    generatePassword(passwordArray,textLength)
}

//this function will generate a password based on the user created criteria 
function randomPicker(array) {
    var randomNum = Math.floor(Math.random()*array.length)
    var randomChoice = array[randomNum]
    console.log(randomChoice)
    return randomChoice 

}

function generatePassword(passwordArray,textLength) {
    var howManyEach = Math.floor(textLength / passwordArray.length);
    console.log(howManyEach)
    var passwordString = ""
   
    for(var k = 0;k<passwordArray.length;k++) {
        console.log("Looping", k);
    
        for(var i = 0;i < howManyEach;i++) {
            // console.log("Looping?", i);
            passwordString += randomPicker(passwordArray[k])
            
        }
    }
    console.log(passwordString)
    // var userSelectionArray = passPrompt();
    
    // var isValid = validation(userSelectionArray);

  
    

} 