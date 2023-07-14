from typing import List
from collections import Counter
# Given an array of strings, group the anagrams together. You can return the answer in any order.
#
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
# typically using all the original letters exactly once.

strs1 = ["eat","tea","tan","ate","nat","bat"]
strs2 = [""]
strs3 = ["a"]


def group_anagrams(list_of_strings: List[str]) -> List[List[str]]:
    list_of_lists = [[]]
    for string in list_of_strings:
        for curr_list in list_of_lists:

            # add the string to curr_list if an anagram is found in the list. Could use Counter to check?
            # if no anagram is found, add new list to list_of_lists with the string as the only element in it



    return list_of_lists
