// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  let arr = [...str];
  for (let i = 0; i < arr.length; i++) {
    switch (str[i]) {
      case "&":
        arr.splice(i, 1, "&amp;");
        break;
      case "<":
        arr.splice(i, 1, "&lt;");
        break;
      case ">":
        arr.splice(i, 1, "&gt;");
        break;
      case '"':
        arr.splice(i, 1, "&quot;");
        break;
      case "'":
        arr.splice(i, 1, "&apos;");
        break;
    }
  }
  return arr.join("");
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
