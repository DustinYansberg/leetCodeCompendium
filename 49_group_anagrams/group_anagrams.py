from typing import List
from collections import Counter, defaultdict

# Given an array of strings, group the anagrams together. You can return the answer in any order.
#
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
# typically using all the original letters exactly once.

strs1 = ["eat","tea","tan","ate","nat","bat"]
strs2 = [""]
strs3 = ["a"]


def fast_group_anagrams(strs: List[str]) -> List[List[str]]:
    """
    After reading through some material I have come to the understanding that it would be simpler and faster to create
     a dictionary of the solution first using the sorted value of the words as the key, and the values being those
     words which match the key when they are sorted.

    For instance, 'eat' sorted will be 'aet', and this would be true for all anagrams of 'eat', so all anagrams of 'eat'
     will fall into the 'aet' key

    Once the strings are all placed into their appropriate dictionary sections, I can return the values of the dict as
     lists.

    Time Complexity: O(n * m log m)
    Space complexity: O(nm) where n is the number of strings and m is the length of the strings.

    :param strs: a list of unsorted strings whose anagrams we want to find
    :return: out: a list of lists where each sublist is a grouping of anagrams found within strs
    """

    anagram_dict = defaultdict(list)

    for word in strs:
        sorted_word = ''.join(sorted(word))
        anagram_dict[sorted_word].append(word)

    return list(anagram_dict.values())


def naive_group_anagrams(strs: List[str]) -> List[List[str]]:
    """
    This solution is my first naive attempt at the problem. This works, but is way too slow to run in a realistic
     scenario.

    Time complexity: O(n^2 * m) where n is the number of strings in list_of_strings and m is the number of counter
     comparisons. Effectively, this is o(n^3), which is wholly unacceptable in my book. I am going to do some research
     into a faster solution.


    :param strs: a list of unsorted strings whose anagrams we want to find
    :return: out: a list of lists where each sublist is a grouping of anagrams found within strs
    """
    out = [[strs.pop(0)]]
    while strs:
        temp = strs.pop(0)
        for curr_list in out:
            if Counter(temp) == Counter(curr_list[0]):
                curr_list.append(temp)
                temp = None
                break
        if temp is not None:
            out.append([temp])

    return out


print(fast_group_anagrams(strs1))
