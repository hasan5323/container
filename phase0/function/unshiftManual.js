let idols = "sasa, tika, fida, nana";
function seplit(str) {
  let arr = [];
  let temp = "";
  for (let i = 0; i < str.length; ) {
    temp += str[i];
    if (str[i] !== ",") {
      arr.push(temp);
      temp = "";
    }
  }
  return arr
}