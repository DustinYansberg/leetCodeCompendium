const isValid = function (s) {
  const bracketStack = [];
  const pairs = { ")": "(", "]": "[", "}": "{" };

  for (const char of s) {
    if (Object.values(pairs).includes(char)) {
      bracketStack.push(char);
      continue;
    }
    if (!Object.hasOwn(pairs, char)) {
      continue;
    }
    if (bracketStack[bracketStack.length - 1] !== pairs[char]) {
      return false;
    }
    bracketStack.pop();
  }

  //   const openBrackets = ["(", "[", "{"];
  //   const closeBrackets = [")", "]", "}"];
  //   for (const char of s) {
  //     if (openBrackets.includes(char)) {
  //       bracketStack.push(char);
  //       continue;
  //     }
  //     if (!closeBrackets.includes(char)) {
  //       continue;
  //     }

  //     const i = closeBrackets.indexOf(char);
  //     if (bracketStack[bracketStack.length - 1] !== openBrackets[i]) {
  //       return false;
  //     }
  //     bracketStack.pop();
  //   }

  return bracketStack.length === 0;
};

const s = "()[]{}";
console.log(isValid(s));
