// https://leetcode.com/problems/generate-parentheses/?envType=study-plan-v2&envId=top-interview-150

/**
*! Given n pairs of parentheses, write a function to generate all combinations of 
*! well-formed parentheses.

 

** Example 1:
** 
** Input: n = 3
** Output: ["((()))","(()())","(())()","()(())","()()()"]
** Example 2:
** 
** Input: n = 1
** Output: ["()"]
 

*? Constraints:
*? 
*? 1 <= n <= 8
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const path = new Array(n * 2).fill("L", 0, n).fill("K", n, n * 2);
  const res = [path.join("")];
  let stop = 1;
  console.log(`FROM: ${path}`);
  for (let i = n; i < path.length; i++) {
    // console.log(first);
    for (let j = i; j > stop; j--) {
      const temp = path[j - 1];
      path[j - 1] = path[j];
      path[j] = temp;
      console.log(`TO: ${path}`);
      res.push(path.join(""));
      // swap path[j] with path[j-1]
      // push new path to res
    }
    stop++;
  }

  //   const dfs = (path = new Array(n * 2).fill("(", 0, n).fill(")", n, n * 2)) => {
  //     // if (path.length === n * 2) {
  //     //   res.push(path.join(""));
  //     //   return;
  //     // }
  //       // move the first close parens up to index 1, two steps at a time
  //     }
  //     // for (let i = 0; i <= n; i++) {
  //     //   console.log(`first ${path}`);
  //     //   if (openCount < n) {
  //     //     path += "(";
  //     //     openCount++;
  //     //   }
  //     //   if (openCount > 0) {
  //     //     path += ")";
  //     //     openCount--;
  //     //   }

  //     //   console.log(`second ${path}`);
  //     //   dfs(path);

  //     //   path = path.substring(0, path.length - 1);
  //     // }
  //   };

  //   dfs();

  return res;
};

console.log(generateParenthesis(3));

/**

path = ""
                 i
           s        j
open = [(, ), (, (, ), )]   

close= [), ), )]


 */
