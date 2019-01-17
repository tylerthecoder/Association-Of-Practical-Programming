# this program both computes the answer for the input file and checks if it is correct
# to run the program run the command `python tylertSolution.py` in the terminal while in the directory

filename = "input.txt"
inputFile = open(filename, "r")

filename = "output.txt"
outputFile = open(filename, "r")

def hasDuplicate(str):
  seen = set()
  for c in str:
    if c in seen:
      return True
    else:
      seen.add(c)
  return False

def isCorrect(result):
  output = []
  for line in outputFile:
    output.append(line)

  for i in range(len(result)):
    str1 = str(result[i]).lower()
    str2 = output[i].lower().strip()
    if not str1 == str2:
      return False
  return True

result = []
for line in inputFile:
  res = hasDuplicate(line)
  result.append(res)

res = isCorrect(result)
if res:
  print("Correct")
else:
  print("Inncorrect")
