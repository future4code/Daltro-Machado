export const stringCompression = (string: any) => {
  const substrings = [];
  let lastChar = string[0];
  let charCount = 0;

  for (const char of string) {
    if (char !== lastChar) {
      substrings.push(lastChar + charCount);
      lastChar = char;
      charCount = 0;
    }
    charCount++;
  }

  substrings.push(lastChar + charCount);
  let result = "";
  for (const key of substrings) {
    result += key;
  }

  return result.length > string.length ? string : result;
};