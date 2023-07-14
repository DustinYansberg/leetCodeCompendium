# LeetCode 1 Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Source: https://leetcode.com/problems/two-sum/description/

The solution I used for this problem involves building a hashmap where the key is the complement between the target
and the current each number in the list of nums. The value of the pair is the index where that number's compliment is.

The for loop I use runs through the list of nums at most one time, so this solution is O(n)