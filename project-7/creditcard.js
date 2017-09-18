//BACKUP REFERENCE: https://jsbin.com/rexugu/edit?html,css,js,console,output

var validator = {};

(function(window){
    //Checks if the input parameter is an email address, consisting of three parts: An email address consists of two strings combined by an @ symbol.
    validator.isEmailAddress = function(input) {
        var inputVar = input;
        var a = inputVar.lastIndexOf('@');
        var b = inputVar.lastIndexOf('.');
        var c = inputVar.indexOf('@');
        if (c > 1 && a == c && b < inputVar.length -2 && inputVar.length < 65){
            return true;
        } else {
            return false;
        }
    };

    /*The proper format for a phone number is (XXX)XXX-XXXX, and as such, the form input shall be under that format.*/
    validator.isPhoneNumber = function(input) {
        var a = input.indexOf('(');
        var b = input.indexOf(')');
        var c = input.indexOf('-');
        if (input.length == 13 && a === 0 && b == 4 && c == 8){
            return true;
        } else {
            return false;
        }
    };
    //Returns the input parameter text with all symbols removed. Symbols refer to any non-alphanumeric character. A character is considered alphanumeric if it matches one of the following: a—z, A—Z, or 0—9. Ignore whitespace.
    validator.withoutSymbols = function(input){
        var a = input;
       for(var i=0; i < a.length; i++){
           var b = a.charAt(i);
           var c = b.charCodeAt(0);
           if((c > 47 && c < 58) ||
               (c > 64 && c < 91) ||
               (c > 96 && c < 123) ||
               (c == 32) ||
               (c > 191 && c < 215)||
               (c > 215 && c < 247)||
               (c > 247 && c < 448)){}
           else {
               return false;
                }
       }
       return true;
    };
//Checks if the input parameter text is a valid date. For your purposes, a valid date is any string that can be turned into a JavaScript Date Object.
    validator.isDate = function(input){
        var a = input.indexOf("/");
        var b = input.lastIndexOf("/");
        var c = input.charAt(0);
        var d = input.charAt(3);
        var e = input.charAt(6);
        //if (a == 2 && b == 5 &&
        //    c <= 1 && d <= 1 &&
        //    e <= 1 && input.length < 11){
        //    console.log('true');
        //    return true;
        //}
        if(input.length === 10) {
            return true;
        } else {
            return false;
        }
    };
//Checks if the input parameter is a date that comes after the reference date. Both the input and the reference can be strings or Date Objects. This function relies on two valid dates; if two are not found, it should throw a new error.
    validator.isBeforeDate = function(input, reference){
        var a = reference;
        var b = Date.parse(a);
        var c = input;
        var d = Date.parse(c);
        if (a < d){
            return true;
        }
        else {
            return false;
        }
    };
//Checks if the input parameter is a date that comes before the reference date. Both the input and the reference can be strings or Date Objects. This function relies on two valid dates; if two are not found, it should throw a new error.
    validator.isAfterDate = function(input, reference){
        var a = reference;
        var b = Date.parse(a);
        var c = input;
        var d = Date.parse(c);
        if (a > d){
            return true;
        }
        else {
            return false;
        }
    };
//Checks if the input parameter is a date that comes before today. The input can be either a string or a Date Object. This function relies on one valid date; if one is not found, it should throw a new error.
    validator.isBeforeToday = function(input, today){
        today = new Date();
        var a = today.toLocaleDateString();
        var b = Date.parse(a);
        var c = input;
        var d = Date.parse(c);
        if (a < d){
            return true;
        }
        else {
            return false;
        }
    };
//Checks if the input parameter is a date that comes after today. The input can be either a string or a Date Object. This function relies on one valid date; if one is not found, it should throw a new error.
    validator.isAfterToday = function(input, today){
        today = new Date();
        var a = reference.toLocaleDateString();
        var b = Date.parse(a);
        var c = input;
        var d = Date.parse(c);
        if (a > d){
            return true;
        }
        else {
            return false;
        }
    };
//Checks the input parameter and returns true if it is an empty string–a string with no length or characters that is represented as "" or only contains whitespace(s).
//checks to see if the string is empty, no matter the length
    validator.isEmpty = function(input){
        var ctrl = 0;
        for (var i = 0; i < input.length; i++){
            var a = input.split("");

            if (a[i] == " "){
                ctrl ++;
            }
        }
        if(input.length <=1 &&input.charAt(0) === "" || ctrl === input.length){
            return true;
        }
        else{
            return false;
        }
    };
//Checks if the input text parameter contains one or more of the words within the words array. A word is defined as the following: having undefined, whitespace, or punctuation before and after it. The function should be case-insensitive.
//checks that the words array contains a word, whatever the input it, and is case-insensitive
    validator.contains = function(input, words){
        var word = [];
        var input2 = input.toLowerCase();
        var words2 = word.toString().toLowerCase();
        if (words2.includes(input2)){
            return true;
        }
        else {
            return false;
        }
    };
//checks that the words array DOES NOT contain the word, whatever the input is, and is case-insensitive
//Checks if the input text parameter does not contain any of the words within the words array. Use the “word” definition used in the above .contains description. The function should be case-insensitive. A function like this could be used for checking blacklisted words.
    validator.lacks = function(input, words){
        var word = [];
        var input2 = input.toLowerCase();
        var words2 = word.toString().toLowerCase();
        if (words2.includes(input2)){
            return false;
        }
        else {
            return true;
        }
    };
//Checks that the input text parameter contains only strings found within the strings array. Note that this function doesn’t use a strong word definition the way .contains and .lacks does. The function should be case-insensitive.
    validator.isComposedOf = function(input, strings){
        strings = [];
        var a = strings.indexOf(input);
        if (a < 0){
            return false;
        }
        else {
            return true;
        }
    };
    var isLength = function(input, n){
        if (input <= n){
            return true;
        }
        else {
            return false;
        }
    };

    var isOfLength = function(input, n){
        if (input >= n){
            return true;
        }
        else {
            return false;
        }
    };
//Counts the number of words in the input parameter.
//Refer to the definition of word used in the description
//of the .contains function above.
    validator.countWords = function(input){
        var whiteSpace = (" ");
        var period = (".");
        var exclamationMark = ("!");
        var questionMark = ("?");
        var comma = (",");
        var exclamationPointSpace = ("! ");
        var questionMarkSpace = ("? ");
        var periodSpace = (". ");
        var commaSpace = (", ");
        var inputArray = input.split("");
        var wordCount = [];
        for (var i = 0; i < inputArray.length; i++){
            if(whiteSpace === inputArray[i]){
                wordCount.push(whiteSpace);
            }
            if(period === inputArray[i]){
                wordCount.push(period);
            }
            if(questionMark === inputArray[i]){
                wordCount.push(questionMark);
            }
            if(exclamationMark === inputArray[i]){
                wordCount.push(exclamationMark);
            }
            if(comma === inputArray[i]){
                wordCount.push(comma);
            }
        }
        var ans = wordCount.length;
        if(inputArray[0] === whiteSpace){
            ans--;
        }
        for (var j = 0; j < wordCount.length; j++){
            if (exclamationPointSpace === wordCount[i]){
                ans --;
            }
            if (questionMarkSpace === wordCount[i]){
                ans --;
            }
            if (periodSpace === wordCount[i]){
                ans --;
            }
            if (commaSpace === wordCount[i]){
                ans --;
            }
        }
        return ans;
    };
//
//Checks if the input parameter has a word count less than or equal to the n parameter.
//
    validator.lessWordsThan = function(input,n){
        var whiteSpace = (" ");
        var period = (".");
        var exclamationMark = ("!");
        var questionMark = ("?");
        var comma = (",");
        var exclamationPointSpace = ("! ");
        var questionMarkSpace = ("? ");
        var periodSpace = (". ");
        var commaSpace = (", ");
        var inputArray = input.split("");
        var wordCount = [];
        for (var i = 0; i < inputArray.length; i++){
            if(whiteSpace === inputArray[i]){
                wordCount.push(whiteSpace);
            }
            if(period === inputArray[i]){
                wordCount.push(period);
            }
            if(questionMark === inputArray[i]){
                wordCount.push(questionMark);
            }
            if(exclamationMark === inputArray[i]){
                wordCount.push(exclamationMark);
            }
            if(comma === inputArray[i]){
                wordCount.push(comma);
            }
        }
        var ans = wordCount.length;
        if(inputArray[0] === whiteSpace){
            ans--;
        }
        for (var j = 0; j < wordCount.length; j++){
            if (exclamationPointSpace === wordCount[i]){
                ans --;
            }
            if (questionMarkSpace === wordCount[i]){
                ans --;
            }
            if (periodSpace === wordCount[i]){
                ans --;
            }
            if (commaSpace === wordCount[i]){
                ans --;
            }
        }
        if(ans <= n){
            return true;
        }
        else{
            return false;
        }
    };
//
//Checks if the input parameter has a word count greater than or equal to the n parameter.
//
    validator.moreWordsThan = function(input,n){
        var whiteSpace = (" ");
        var period = (".");
        var exclamationMark = ("!");
        var questionMark = ("?");
        var comma = (",");
        var exclamationPointSpace = ("! ");
        var questionMarkSpace = ("? ");
        var periodSpace = (". ");
        var commaSpace = (", ");
        var inputArray = input.split("");
        var wordCount = [];
        for (var i = 0; i < inputArray.length; i++){
            if(whiteSpace === inputArray[i]){
                wordCount.push(whiteSpace);
            }
            if(period === inputArray[i]){
                wordCount.push(period);
            }
            if(questionMark === inputArray[i]){
                wordCount.push(questionMark);
            }
            if(exclamationMark === inputArray[i]){
                wordCount.push(exclamationMark);
            }
            if(comma === inputArray[i]){
                wordCount.push(comma);
            }
        }
        var ans = wordCount.length;
        if(inputArray[0] === whiteSpace){
            ans--;
        }
        for (var j = 0; j < wordCount.length; j++){
            if (exclamationPointSpace === wordCount[i]){
                ans --;
            }
            if (questionMarkSpace === wordCount[i]){
                ans --;
            }
            if (periodSpace === wordCount[i]){
                ans --;
            }
            if (commaSpace === wordCount[i]){
                ans --;
            }
        }
        if(ans >= n){
            return true;
        }
        else{
            return false;
        }
    };
//Checks that the input parameter matches all of the following:
//   input is greater than or equal to the floor parameter
//   input is less than or equal to the ceil parameter.
    validator.isBetween = function(input, floor, ceil){
        var whiteSpace = (" ");
        var period = (".");
        var exclamationMark = ("!");
        var questionMark = ("?");
        var comma = (",");
        var exclamationPointSpace = ("! ");
        var questionMarkSpace = ("? ");
        var periodSpace = (". ");
        var commaSpace = (", ");
        var inputArray = input.split("");
        var wordCount = [];
        for (var i = 0; i < inputArray.length; i++){
            if(whiteSpace === inputArray[i]){
                wordCount.push(whiteSpace);
            }
            if(period === inputArray[i]){
                wordCount.push(period);
            }
            if(questionMark === inputArray[i]){
                wordCount.push(questionMark);
            }
            if(exclamationMark === inputArray[i]){
                wordCount.push(exclamationMark);
            }
            if(comma === inputArray[i]){
                wordCount.push(comma);
            }
        }
        var ans = wordCount.length;
        if(inputArray[0] === whiteSpace){
            ans--;
        }
        for (var j = 0; j < wordCount.length; j++){
            if (exclamationPointSpace === wordCount[i]){
                ans --;
            }
            if (questionMarkSpace === wordCount[i]){
                ans --;
            }
            if (periodSpace === wordCount[i]){
                ans --;
            }
            if (commaSpace === wordCount[i]){
                ans --;
            }
        }
        if(ans >= floor && ans <= ceil){
            return true;
        }
        else{
            return false;
        }
    };
//
//Checks that the input parameter string is only composed of the following characters: a—z,
//A—Z, or 0—9. Unicode characters are intentionally disregarded.
//
    validator.isAlphaNumeric = function(input){
        var acceptableCharacters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
        var inputCheck = input.split("");
        var chars = acceptableCharacters.split("");
        var totalRights = 0;
        for (var j =0; j < chars.length; j++){
            for (var i = 0; i < inputCheck.length; i++){
                if(inputCheck[i] === chars[j]){
                    totalRights++;
                }
            }
        }
        if (totalRights === input.length){
            return true;
        }
        else{
            return false;
        }
    };
//
//Checks if the input parameter is a credit card or bank card number. A credit card number will be defined
//as four sets of four alphanumeric characters separated by hyphens (-), or a single string of alphanumeric characters (without hyphens).
//
    validator.isCreditCard = function(input){
        var good = false;
        console.log(input);
        if (input.length < 16 || input.length > 19){
            good = false;
        }
        if (input.indexOf("-") == 4 && input.lastIndexOf("-") == 14
            && input.length == 19 || input.length == 16){
            console.log("I'll bet it's here");
            good = true;
        }
        var acceptableCharacters = "qwertyuiopasdfghjklzxcvbnm1234567890-";
        var inputCheck = input.split("");
        var chars = acceptableCharacters.split("");
        var totalRights = 0;

        for (var j =0; j < chars.length; j++){
            for (var i = 0; i < inputCheck.length; i++){
                if(inputCheck[i].toLowerCase() === chars[j].toLowerCase()){
                    totalRights++;
                }
            }
        }
        if (totalRights === input.length){
            good = true;
        }
        else{
            good = false;
        }
        return good;
    };
//Checks if the input string is a hexadecimal color, such as #3677bb. Hexadecimal colors are strings with a length of 7 (including the #), using the characters
//0—9 and A—F. isHex should also work on shorthand hexadecimal colors, such as #333.
//The input must start with a # to be considered valid.
    validator.isHex = function(input){
        var aux = input.split("");
        var valids = "1234567890abcdefABCDEF";
        var validList = valids.split("");

        var cond1 = false;
        var cond2 = false;
        var validity = 0;

        for(var i=0; i < validList.length; i++ ){
            for(var j=1; j < aux.length; j++){
                if(validList[i]===aux[j]){
                    validity++;
                }
            }
        }

        if(validity === input.length -1 ){
            cond2 = true;
        }

        if(aux[0] === "#" && input.length < 8 && input.length >= 3){
            cond1 = true;
        }

        if(cond1 === true && cond2 === true){
            return true;
        }
        else{
            return false;
        }
    };
//Checks if the input string is an RGB color, such as rgb(200, 26, 131). An RGB color consists of:
//
//   Three numbers between 0 and 255
//   A comma between each number
//   The three numbers should be contained within “rgb(” and “)“.

    validator.isRGB = function(input){
        var valids = "rgbRGB";
        var validList = valids.split("");

        var cond1 = false;
        var cond2 = false;
        var cond3 = false;
        var validity = 0;

        var posPar1 = input.indexOf("(");
        var posPar2 = input.indexOf(")");

        if(input.lastIndexOf("(") === posPar1 && input.lastIndexOf(")") === posPar2){
            cond3 = true;
        }

        var numbers = input.slice(posPar1+1,posPar2);
        var rgb = input.slice(0,posPar1);

        var aux = rgb.split('');

        for(var j = 0; j < validList.length ; j++){
            for(var i = 0; i < aux.length ; i++){
                if(validList[j] === aux[i]){
                    validity++;
                }
            }
        }
        if(validity < 4 && validity === aux.length){
            cond1 = true;
        }

        aux = numbers.split(",");
        validity = 0;


        for(var k = 0; k < aux.length ; k++){
            aux[k] = parseInt(aux[k]);
            if(0 <= aux[k] && aux[k] <= 255){
                validity++;
            }
        }
        if(validity === 3 ){
            cond2 = true;
        }

        if(cond1 === true && cond2 === true && cond3 === true){
            return true;
        }
        else{
            return false;
        }
    };
//Checks if the input string is an HSL color, such as hsl(122, 1, 1). An HSL color consists of:3
//
//Three numbers:
//the first number, Hue, is between 0 and 360
//the second and third numbers, Saturation and Lightness, are between 0 and 1
//A comma between each number
//The three numbers should be contained within “hsl(” and “)“.
//
    validator.isHSL = function(input){
        var cond1 = false;
        var cond2 = false;
        var cond3 = false;
        var HSLchecker = false;

        if (input.slice(0,4) === "hsl(" && input.slice(-1) === ")" ){
            cond1 = true;
        }

        var inputArr = input.slice(4, -1);
        inputArr = inputArr.split(",");

        for (var i = 0; i < inputArr.length; i++){
            inputArr[i] = parseInt(inputArr[i]);
        }

        var percent1 = inputArr.indexOf("%");
        var percent2 = inputArr.lastIndexOf("%");

        if (inputArr[0] >= 0 && inputArr[0] <= 360 &&
            inputArr[1] >= 0 && inputArr[1] <= 1 &&
            inputArr[2] >= 0 && inputArr[2] <= 1 ||
            inputArr[0] >= 0 && inputArr[0] <= 360 &&
            percent1 === -1 && percent2 === -1){
            cond2 = true;
        }

        var str = inputArr.toString();
        if (str.length === 5 || str.length >= 7 && str.length <= 11){
            cond3 = true;
        }

        if (cond1 === true && cond2 === true && cond3 === true){
            HSLchecker = true;
        }

        return HSLchecker;

    };
//Checks if the input parameter is a hex, RGB, or HSL color type.
    validator.isColor = function(input) {
        var hex_Check = isHex(input);
        var RGB_Check = isRGB(input);
        var HSL_Check = isHSL(input);

        var color_Check = false;

        if (hex_Check === true ||
            RGB_Check === true ||
            HSL_Check === true){
            color_Check = true;
        }
        return color_Check;
    };

//Checks if the input parameter has leading or trailing whitespaces
//or too many spaces between words. Leading refers to before while
//trailing refers to after. This function will help validate cases where
//extra spaces were added accidentally by the user.

    validator.isTrimmed = function(input){
        var cond1 = false;
        var cond2 = true;
        var lengthCheck = false;

        var doubleSpace = input.indexOf("  ");
        if (doubleSpace === -1){
            cond1 = true;
        }

        var str_init = input;
        var str_trim = str_init.trim();

        if (str_init.length === str_trim.length){
            cond2 = true;
        }

        console.log(doubleSpace);
        console.log("cond1 is " + cond1);
        console.log("cond2 is " + cond2);

        if (cond1 === true && cond2 === true){
            lengthCheck = true;
        }

        return lengthCheck;
    };

//Checks if the input string is an HSL color, such as hsl(122, 1, 1). An HSL color consists of:3
//
//Three numbers:
//the first number, Hue, is between 0 and 360
//the second and third numbers, Saturation and Lightness, are between 0 and 1
//A comma between each number
//The three numbers should be contained within “hsl(” and “)“.
//
    validator.isHSL = function(input){
        var cond1 = false;
        var cond2 = false;
        var cond3 = false;
        var HSLchecker = false;

        if (input.slice(0,4) === "hsl(" && input.slice(-1) === ")" ){
            cond1 = true;
        }

        var inputArr = input.slice(4, -1);
        inputArr = inputArr.split(",");

        for (var i = 0; i < inputArr.length; i++){
            inputArr[i] = parseInt(inputArr[i]);
        }

        var percent1 = inputArr.indexOf("%");
        var percent2 = inputArr.lastIndexOf("%");

        if (inputArr[0] >= 0 && inputArr[0] <= 360 &&
            inputArr[1] >= 0 && inputArr[1] <= 1 &&
            inputArr[2] >= 0 && inputArr[2] <= 1 ||
            inputArr[0] >= 0 && inputArr[0] <= 360 &&
            percent1 === -1 && percent2 === -1){
            cond2 = true;
        }

        var str = inputArr.toString();
        if (str.length === 5 || str.length >= 7 && str.length <= 11){
            cond3 = true;
        }

        if (cond1 === true && cond2 === true && cond3 === true){
            HSLchecker = true;
        }

        return HSLchecker;

    }
//Checks if the input parameter is a hex, RGB, or HSL color type.
    validator.isColor = function(input) {
        var hex_Check = isHex(input);
        var RGB_Check = isRGB(input);
        var HSL_Check = isHSL(input);

        var color_Check = false;

        if (hex_Check === true ||
            RGB_Check === true ||
            HSL_Check === true){
            color_Check = true;
        }
        return color_Check;
    }

//Checks if the input parameter has leading or trailing whitespaces
//or too many spaces between words. Leading refers to before while
//trailing refers to after. This function will help validate cases where
//extra spaces were added accidentally by the user.

    validator.isTrimmed = function(input){
        var cond1 = false;
        var cond2 = true;
        var lengthCheck = false;

        var doubleSpace = input.indexOf("  ");
        if (doubleSpace === -1){
            cond1 = true;
        }

        var str_init = input;
        var str_trim = str_init.trim();

        if (str_init.length === str_trim.length){
            cond2 = true;
        }

        console.log(doubleSpace);
        console.log("cond1 is " + cond1);
        console.log("cond2 is " + cond2);

        if (cond1 === true && cond2 === true){
            lengthCheck = true;
        }

        return lengthCheck;
    }

    window.validator = validator;

})(window);

var fullName = document.getElementById("fullName");
var creditCard = document.getElementById("creditCard1");
var CSV = document.getElementById("csv");

function validateName(){
  if (validator.withoutSymbols(fullName.value) === false || 
      validator.isEmpty(fullName.value) === true){
    fullName.setCustomValidity("Please enter your full name, without symbols or extra spaces.")
  }
  else{
    fullName.setCustomValidity("");
  }
}

function validateCreditCard(){
  if (validator.isCreditCard(creditCard.value) === false){
    creditCard.setCustomValidity("Please enter a valid credit card number, without symbols or spaces.")
  }
  else{
    creditCard.setCustomValidity("");
  }
}

function validateCSV(){
  if (validator.withoutSymbols(CSV.value) === false ||
      validator.isEmpty(CSV.value) === true &&
      CSV.length !== 3){
    CSV.setCustomValidity("Please enter a valid CSV number.")
  }
  else {
    CSV.setCustomValidity("");
  }
}

window.onload = function(){
  fullName.onchange = validateName;
  creditCard.onchange = validateCreditCard;
  CSV.onchange = validateCSV;
};
