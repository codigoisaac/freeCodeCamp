// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      i != str.length - 1 && // not the last
      str.charCodeAt(i) != str.charCodeAt(i + 1) - 1
    ) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
}

fearNotLetter("abcefgh");
// fearNotLetter("stvwx");
