// BEGIN: Test Cases
const testCases = [
  {
    nums: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    expected: [1, 4, 2, 7, 5, 3, 8, 6, 9],
  },
  {
    nums: [[1, 2, 3, 4], [5, 6], [7], [8, 9, 10]],
    expected: [1, 5, 2, 8, 6, 3, 7, 9, 4, 10],
  },
  {
    nums: [[1, 2, 3], [4], [5, 6, 7]],
    expected: [1, 4, 2, 5, 3, 6, 7],
  },
];

for (const testCase of testCases) {
  const { nums, expected } = testCase;
  const result = findDiagonalOrder(nums);
  console.log(
    `Input: ${JSON.stringify(nums)}\nExpected: ${JSON.stringify(
      expected
    )}\nResult: ${JSON.stringify(result)}\n`
  );
}
// END: Test Cases
