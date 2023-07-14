# Group Anagrams

This one was tough for me.

I was able to quickly come up with a solution which can be found in the naive_group_anagrams() method. However, this
original solution was far too resource heavy and had a time complexity I was not happy with. I decided to begin reading 
through community sourced solutions and their explanations to better understand a cleaner approach to the problem.

Each word in 'strs' that has a matching anagram will have identical values when sorted. For instance, 'eat', 'ate', and
'tea' all have the same sorted value of 'aet'.

If we loop through 'strs', sort the current word we are examining, and add the word to a dictionary whose key is the 
sorted value of the word, we would end up with a dictionary full of anagrams grouped together.

The solution that is described above is much cleaner than my original solution, and can look like this:

```
    anagram_dict = defaultdict(list)

    for word in strs:
        sorted_word = ''.join(sorted(word))
        anagram_dict[sorted_word].append(word)

    return list(anagram_dict.values())
```

I am quite happy with my end result and really feel like I learned something valuable by attempting this solution from 
multiple angles.