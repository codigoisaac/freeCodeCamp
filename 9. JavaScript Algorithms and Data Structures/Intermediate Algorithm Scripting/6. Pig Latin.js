// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let vowelRegex = /(?=^[aeiou])/,
    consonantsRegex = /^[^aeiou]+/g;

  if (vowelRegex.test(str)) {
    // str begins with a vowel
    return str + "way";
  } else {
    return (
      str.replace(str.match(consonantsRegex)[0], "") +
      str.match(consonantsRegex)[0] +
      "ay"
    );
  }
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("glove"));
