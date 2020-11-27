# Info from https://www.fec.gov/resources/cms-content/documents/federalelections2016.pdf
# 2016 Presidential Election
import json

year = "2016"
with open(year + "/results.json") as f:
	data = f.read()
data = json.loads(data)
electoral = 0
popular = 0
for key in data:
	state = data[key]
	electoral += state["electoral votes"]
	popular += state["total"]

min_amount = [1 for i in range(electoral + 1)]
state_combination = [[] for i in range(electoral + 1)]
min_amount[0] = 0

for key in data:
	state = data[key]
	min_amount_before = min_amount.copy()
	state_combination_before = state_combination.copy()
	for i in range(electoral + 1):
		new_votes = state["electoral votes"] + i 
		if new_votes <= electoral and min_amount_before[i] + (state["total"]//2 + 1)/popular < min_amount[new_votes]:
			min_amount[new_votes] = min_amount_before[i] + (state["total"]//2 + 1)/popular
			state_combination[new_votes] = state_combination_before[i].copy()
			state_combination[new_votes].append(key)

for i in range(electoral, 0, -1):
	if (min_amount[i] < min_amount[i - 1]):
		min_amount[i - 1] = min_amount[i]
		state_combination[i - 1] = state_combination[i]

win = electoral//2 + 1
for i in range(electoral + 1):
	print(i, "%.4f" % (100 * min_amount[i]) + "%")
print("It is possible to win the election with", "%.4f" % (100 * min_amount[win]) + "% of the popular vote using these " + str(len(state_combination[win])) + " states:")
print(state_combination[win])
