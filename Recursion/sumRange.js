const sumRange = (rangeNum) => {
   if (rangeNum === 1) {
    return rangeNum;
  }
  const res = rangeNum + sumRange(rangeNum - 1);

  return res;
};

const res = sumRange(5);

console.log(res);
