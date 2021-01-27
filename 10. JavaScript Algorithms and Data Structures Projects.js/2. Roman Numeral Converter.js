// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  let romans = [
      { numeral: "I", value: 1 },
      { numeral: "IV", value: 4 },
      { numeral: "V", value: 5 },
      { numeral: "IX", value: 9 },
      { numeral: "X", value: 10 },
      { numeral: "XL", value: 40 },
      { numeral: "L", value: 50 },
      { numeral: "XC", value: 90 },
      { numeral: "C", value: 100 },
      { numeral: "CD", value: 400 },
      { numeral: "D", value: 500 },
      { numeral: "CM", value: 900 },
      { numeral: "M", value: 1000 },
    ],
    result = [],
    valRemaining = num,
    prevFound, // previously found value
    repeated = 1;

  do {
    let roman =
      valRemaining < 1000
        ? romans.findIndex((i) => i.value > valRemaining) - 1
        : romans.length - 1;

    roman == prevFound ? repeated++ : (repeated = 1);
    prevFound = roman;

    if (repeated < 4) {
      result.push(romans[roman].numeral);
    } else {
      result.splice(result.length - 2);
      result.push(romans[roman + 1].numeral);
    }

    valRemaining -= romans[roman].value;
  } while (valRemaining != 0);

  return result.join("");
}

convertToRoman(1000); //
