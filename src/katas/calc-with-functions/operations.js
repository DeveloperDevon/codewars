const plus = n => p => p + n;
const minus = n => p => p - n;
const times = n => p => p * n;
const dividedBy = n => p => Math.floor(p / n);

module.exports = { plus, minus, times, dividedBy }