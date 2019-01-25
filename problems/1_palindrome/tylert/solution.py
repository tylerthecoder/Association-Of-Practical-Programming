# Run: `python solution.py`
# Redirect output to file: `python solution.py > output.file`
# Check if correct: `diff output.file ../output.txt`

file = open("../input.txt", "r")

def is_palindrome(string):
  if len(string) <= 1: return True
  if not string[0] == string[-1]: return False
  return is_palindrome(string[1:-1])

for line in file:
  line = line.strip()
  ans = is_palindrome(line)
  if ans:
    print('true')
  else:
    print('false')