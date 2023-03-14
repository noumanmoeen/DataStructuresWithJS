const averagePair = (arr) => {
  let arrValues = {};
  let avgPairs = [];
  const output = arr.reduce((o, val) => ((o[val] = 0), o), {});
  arrValues = output;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const avg = Math.floor((arr[i] + arr[j]) / 2);
      const exists = Boolean(arrValues[avg]) || arrValues[avg] === 0;

      if (exists) {
        arrValues[avg]++;
        avgPairs.push([arr[i], arr[j]]);
      }
    }
  }

  const pairCount = avgPairs.length;
  return { avgPairs, pairCount };
};
const arr1 = [-1, 2, 5, -3, 8, 10];

const result = averagePair(arr1);

console.log(result);
