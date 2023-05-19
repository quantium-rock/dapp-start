// TODO: Middleware functions to increase server security and privacy

function encodeString(str: string, size: number): string {
  let encoded = "";
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    const encodedCharCode = charCode + size; // Example encoding logic: add size to charCode
    const encodedChar = String.fromCharCode(encodedCharCode);
    encoded += encodedChar;
  }

  const paddingSize = 555 - encoded.length;
  const paddingChar = String.fromCharCode(size); // Use a character based on the size parameter as padding

  if (paddingSize > 0) {
    const padding = paddingChar.repeat(paddingSize);
    encoded += padding;
  } else if (paddingSize < 0) {
    encoded = encoded.substr(0, 555);
  }

  return encoded;
}

function decodeString(encodedStr: string, size: number): string {
  const encodedSubstring = encodedStr.substr(0, 555);
  let decoded = "";

  for (let i = 0; i < encodedSubstring.length; i++) {
    const encodedCharCode = encodedSubstring.charCodeAt(i);
    const decodedCharCode = encodedCharCode - size; // Example decoding logic: subtract size from encodedCharCode
    const decodedChar = String.fromCharCode(decodedCharCode);
    decoded += decodedChar;
  }

  return decoded;
}

const encoded = encodeString("helloworld", 125);
const decoded = decodeString(encoded, 125);

console.log("encode", encoded);
console.log("decode", decoded);
