def hasDuplicates(string):
    return not len(set(string)) == len(string)

with open('input.txt', 'r') as f1:
  with open('output.txt', 'r') as f2:
     for line in f1:
         soln = f2.readline().strip()
         print(str(soln == str(hasDuplicates(line))))
