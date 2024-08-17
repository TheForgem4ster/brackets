module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketsMap = {};
  const openBrackets = [];

  bracketsConfig.forEach(([open, close]) => {
    bracketsMap[close] = open;
    openBrackets.push(open);
  });

  for (let char of str) {
    if (openBrackets.includes(char)) {
      if (stack.length > 0 && stack[stack.length - 1] === char && bracketsMap[char] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      if (stack.length === 0 || stack.pop() !== bracketsMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
