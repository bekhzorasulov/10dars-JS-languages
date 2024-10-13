import country from "./country.js";

const getToplanguages = country.reduce((acc, curVal) => {
  if (curVal.languages) {
    const getLanguages = Object.values(curVal.languages);
    getLanguages.forEach((languages) => {
      if (acc[languages]) {
        acc[languages]++;
      } else {
        acc[languages] = 1;
      }
    });
  }
  return acc;
}, {});
// console.log(getToplanguages);
const sortedLanguages = Object.entries(getToplanguages).sort(
  (a, b) => b[1] - a[1]
);
const top5Languages = sortedLanguages
  .slice(0, 5)
  .map(([languageName, languagesNum]) => `${languageName}: ${languagesNum}`);
console.log(top5Languages);
