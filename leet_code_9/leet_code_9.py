# Given an integer x, return true if x is a palindrome and false otherwise.


def is_palindrome(self, x: int) -> bool:
    # negative numbers cannot be a palindrome
    if x < 0:
        return False

    # by converting the int to a string and seeing if its reverse matches, we know if the int is a palindrome
    if str(x) == str(x)[::-1]:
        return True

    return False
