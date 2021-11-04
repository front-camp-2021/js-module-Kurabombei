export const cutStrings = (arr = []) => {
  // It should find minimal string length
  let minimalLength = Infinity;
  arr.forEach((str, index, arr) => (str.length < minimalLength) ? minimalLength = str.length : null);

  // Then it should cut strings with map to that minimal length
  return arr.map((str) => str.slice(0, minimalLength));
};

