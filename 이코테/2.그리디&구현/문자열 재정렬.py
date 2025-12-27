input_data = input()

number = 0
string = []

for i in input_data:
    if i.isnumeric():
        number += int(i)
    else:
        string.append(i)

string.sort()
if number != 0:
    string.append(str(number))

print(''.join(string))