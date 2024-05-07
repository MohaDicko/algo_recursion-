function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (s.length <= 1) {
        return true;
    } else if (s[0] !== s[s.length - 1]) {
        return false;
    } else {
        return isPalindrome(s.substring(1, s.length - 1));
    }
}

let string = prompt("Enter a string: ");
if (isPalindrome(string)) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}
