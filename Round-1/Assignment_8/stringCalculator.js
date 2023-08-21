function stringCalculator() {
    var inputString1 = document.getElementById("inputString1").value;
    var inputString2 = document.getElementById("inputString2").value;
    // Perform operations on the first string
   // var slicedStr = inputString1.slice(2, 5); // Slicing characters from index 2 to 4 (exclusive)
    var lowerCaseStr = inputString1.toLowerCase(); // Convert to lowercase
    var upperCaseStr = inputString1.toUpperCase(); // Convert to uppercase
    var Concatenate = inputString1 + inputString2;
   // var charAtIndex = inputString1.charAt(0); // Get the character at index 0
    
    

    document.getElementById("lower").textContent = "LowerCase String : " + lowerCaseStr;
    document.getElementById("upper").textContent = "UpperCase String : " + upperCaseStr;
    document.getElementById("concatenate").textContent = "Concatenation of Strings : " + Concatenate;
}
