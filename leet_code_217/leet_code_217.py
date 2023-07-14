# LeetCode 217: Contains Duplicates
# Dustin Yansberg

# Given an integer array numsList, return true if any value appears at least twice in the array,
# and return false if every element is distinct.

# Test cases:
numsList1 = [1, 2, 3, 4]
numsList2 = [1, 2, 3, 1]
numsList3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]


def contains_duplicate(numsList) -> bool:
    found = {}
    for num in numsList:
        if num in found:
            return True
        else:
            found.update({num: True})
    return False


# Should print False, True, True
print(contains_duplicate(numsList1))
print(contains_duplicate(numsList2))
print(contains_duplicate(numsList3))
