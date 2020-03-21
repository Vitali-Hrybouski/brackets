module.exports = function check(str, bracketsConfig) {

  function delBrackets(str, bracketsConfig) {
    const testString = str;
    for (let i = 0; i < bracketsConfig.length; i++) {
      const element = bracketsConfig[i].join("");
      while (~str.indexOf(element)) str = str.replace(element, "");
    }
    if (str !== testString) return delBrackets(str, bracketsConfig);
    else return str;
  }
  if (delBrackets(str, bracketsConfig) == 0) return true;
  else return false;
}
