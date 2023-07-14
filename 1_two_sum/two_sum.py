from typing import List

"""
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to
target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Constraints:

    2 <= nums.length <= 10^4
    -10^9 <= nums[i] <= 10^9
    -10^9 <= target <= 10^9
    Only one valid answer exists.
"""


def two_sum(nums: List[int], target: int) -> List[int]:
    """
    Time complexity: O(n)
    Space complexity: O(n)

    :param nums: a list of numbers where exists exactly one solution in which two numbers in the list add to the
    value of 'target'

    :param target: the value that os is used as a target for this solution. Two numbers and only two numbers in 'nums'
    will add to this value.

    :return: a list that expresses the pair of indices in the list nums where the two numbers that add to our
    target number exist
    """

    # for finding the compliment between a given number and the target
    compliment_map = {}

    # use iterator to easily track index value
    for i in range(len(nums)):

        # if curr number is in compliment_map, that is the solution.
        if nums[i] in compliment_map:

            # return index value of the compliment, and the index value of the current number expressed as a list
            return [compliment_map[nums[i]], i]
        else:

            # no solution yet, so add the compliment of the current number to the map, and its index value
            compliment_map[target - nums[i]] = i

    # just in case no solution is found
    return []
