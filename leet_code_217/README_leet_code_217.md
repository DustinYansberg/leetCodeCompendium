# leetCode217
LeetCode 217 Contains Duplicates

In this task, LeetCode is asking the developer to identify whether a list contains duplicate integers.

The provided prompt is as follows:
"Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct."

For my solution...

1. I first create an empty dictionary. 
2. Then I loop through the provided list of integers and examine each one.
3. If the integer is inside the dictionary, I return True.
4. If the integer is not inside the dictionary, the integer will be added to the dictionary.
5. If the loop completes without findiong any integers, I return False since no duplicates were found.
