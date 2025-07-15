
from collections import deque, defaultdict
from typing import List

class Solution:
    def findLadders(self, begin_word: str, end_word: str, word_list: List[str]) -> List[List[str]]:
        def dfs(path: List[str], current_word: str):
            if current_word == begin_word:
                ans.append(path[::-1])
                return
            for precursor_word in predecessors[current_word]:
                path.append(precursor_word)
                dfs(path, precursor_word)  # Recursive DFS call
                path.pop()  # Remove the last word to backtrack

        ans = []  # List to store all the shortest transformation sequences
        words = set(word_list)  # Convert the word list to a set for O(1) look-ups
      
        if end_word not in words:
            return ans
      
        words.discard(begin_word)  # Remove the begin word from the set of words
        distance_from_begin = {begin_word: 0}  # Dictionary to store distance of words from beginWord
        predecessors = defaultdict(set)  # Dictionary to store predecessors of each word
      
        queue = deque([begin_word])
        found = False
        step = 0  # Number of steps taken

        while queue and not found:
            step += 1
            for _ in range(len(queue)):
                current_word = queue.popleft()
                word_chars = list(current_word)

                # Try changing each character in the current word
                for char_index in range(len(word_chars)):
                    original_char = word_chars[char_index]

                    for letter in range(26):
                        word_chars[char_index] = chr(ord('a') + letter)
                        new_word = ''.join(word_chars)

                        if distance_from_begin.get(new_word, 0) == step:
                            predecessors[new_word].add(current_word)

                        if new_word in words:
                            predecessors[new_word].add(current_word)
                            words.discard(new_word)  # Mark the new word as visited
                            queue.append(new_word)  # Add the new word to the queue

                            distance_from_begin[new_word] = step

                            if end_word == new_word:
                                found = True
                    word_chars[char_index] = original_char

        if found:
            dfs([end_word], end_word)  # Initial call to dfs to start path reconstruction

        return ans  # Return the list of all shortest transformation sequences
