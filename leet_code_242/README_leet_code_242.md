# leetCode242

LeetCode 242 Valid Anagram

In this task, LeetCode is asking the developer to identify whether two strings are anagrams of one another.

The provided prompt is as follows:

"""Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."""

Two solutions are provided in this file for this prompt. I provided two solutions because I wanted to be able to focus on time complexity for one, and space complexity for the other.

## Solutions
### is_anagram
This solution is more space efficient than it is time efficient.

- **Space complexity**: O(1)
- **Time complexity**: effectively it is O(n^2), more accurately it is O(n*m)

This solution is more appropriate when lower memory usage is a higher priority than speed

### faster_is_anagram
Like the name implies, this solution is faster than the first solution

- **Space Complexity** : O(n + m)
- **Time complexity** : O(n + m) 

This solution is more balanced in its use of resources overall. It is more suited for a scenario where speed is a priority over lower memory usage.