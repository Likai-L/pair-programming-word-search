const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  let vertical = [];
  for (let x in letters[0]) {
    let str = '';
    for (let y in letters) {
      // console.log(`letters[y][x]${letters[y][x]}`);
      str += letters[y][x];
    }
    vertical.push(str);
  }
  
  for (let l of vertical) {
    if (l.includes(word)) return true;
  }
  return false;
};
  
module.exports = wordSearch;