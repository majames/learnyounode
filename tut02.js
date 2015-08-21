// program sums integers provided in the cmd line

var ans = process.argv.reduce(function(prev, curr) {
  if (isFinite(curr)) {
    return prev + parseInt(curr);
  }
  return prev;
}, 0);

console.log(ans);