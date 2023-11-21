from typing import List


def topKFrequent(nums: List[int], k: int) -> List[int]:
    nums_dict = {}

    for num in nums:
        if num in nums_dict:
            nums_dict[num] += 1
        else:
            nums_dict[num] = 1
    out = []
    sorted_nums_dict = sorted(nums_dict)

    while k > 0:
        out.append(sorted_nums_dict[k-1])
        k -= 1
    return out


print(topKFrequent([1, 1, 1, 2, 2, 3], 2))
