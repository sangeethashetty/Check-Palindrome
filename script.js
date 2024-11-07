const { JSDOM } = require('jsdom');

// Create a virtual HTML document with jsdom
const { window } = new JSDOM(`
<!DOCTYPE html>
<html>
<body>
    <input type="text" id="text-input">
    <button id="check-btn">Check Palindrome</button>
    <div id="result"></div>
</body>
</html>
`);

const { document } = window;

const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultElm = document.getElementById("result");

// Add an event listener to the button
checkBtn.addEventListener('click', () => {
    console.log("Main");
    let text = textInput.value;
    console.log(text);

    if (!text) {
        console.log("Please input a value");
        return;
    }

    let result = text;
    result += isPalindrome(cleanText(text)) ? " is a palindrome." : " is not a palindrome.";
    addHtmlResult(result);
});

// Reverse the string
function reverseString(text) {
    if (typeof text !== "string") {
        console.log("[f] reverseString Error: text is not a string");
        return;
    }

    text = text.split("");
    text = text.reverse();
    return text.join("");
}

// Check if the text is a palindrome
function isPalindrome(text) {
    console.log("isPalindrome");
    // Return boolean
    text = text.toLowerCase();
    let reversedText = reverseString(text);
    return text === reversedText;
}

// Add the result to the HTML
function addHtmlResult(text) {
    console.log("result");
    let elmHtml = document.createElement("p");
    elmHtml.innerText = text;
    resultElm.innerHTML = "";
    resultElm.appendChild(elmHtml);
}

// Clean the text by removing non-alphanumeric characters
function cleanText(text) {
    if (typeof text !== "string") {
        console.log("[f] cleanText Error: text is not a string");
        return text;
    }

    return text.replaceAll(/[^a-zA-Z0-9]/g, "");
}

