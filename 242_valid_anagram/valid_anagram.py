"""
LeetCode 242: Valid Anagram
Dustin Yansberg
"""

# Given two strings string_1 and string_2, return true if t is an anagram of s, and false otherwise.
#
# An Anagram is a word or phrase formed by rearranging the letters of a different word
# or phrase, typically using all the original letters exactly once.


def is_anagram(string_1: str, string_2: str) -> bool:
    """Time complexity : O(n * m) Space Complexity : O(1)"""

    # If string are not same length, then no anagram is possible
    if len(string_1) != len(string_2):
        return False

    # for each character in string_1, if it exists in string_2, delete one instance of it.
    for character in string_1:
        string_2 = string_2.replace(character, '', 1)

    # if string_2 is empty, it matched string_1 perfectly
    if string_2 == '':
        return True

    # if this statement is reached, the strings do not match.
    return False


def faster_is_anagram(string_1: str, string_2: str) -> bool:
    """Time complexity : O(n + m) Space Complexity : O(n + m)"""

    # If string are not same length, then no anagram is possible
    if len(string_1) != len(string_2):
        return False

    # create empty dictionaries of the strings
    string_1_hash, string_2_hash = {}, {}

    # add each character to their respective dictionary, but use an iterable in case they are not anagrams
    for i in range(len(string_1)):
        string_1_hash[string_1[i]] = 1 + string_1_hash.get(string_1[i], 0)
        string_2_hash[string_2[i]] = 1 + string_2_hash.get(string_2[i], 0)

    # compare the instance count of each character. If any mismatch is present, then they are not anagrams
    for character in string_1_hash:
        if string_1_hash[character] != string_2_hash[character]:
            return False
    # if all conditions have been met, they are anagrams. yay!
    return True
