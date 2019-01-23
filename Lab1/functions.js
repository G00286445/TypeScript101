// Count characters in string
function countChar(string) {
    console.log("The length of the String is: " + string.length);
}
countChar(" Test ");
// Count characters in string excluding spaces
function countCharNoSpace(string) {
    console.log("The length of the String is: " + string.replace(/\s/g, "").length);
}
countCharNoSpace(" Test ");
