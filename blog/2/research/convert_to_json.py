import json

filename = input("Filename: ")

states = {}
rep = {"electoral vote" : 0, "popular vote" : 0, "states" : 0}
dem = {"electoral vote" : 0, "popular vote" : 0, "states" : 0}
with open(filename) as f:
	data = f.readlines()
	for line in data:
		line = line.split()
		for i in range(1, len(line)):
			line[i] = int(line[i].replace(',', ''))
		state = {}
		state["electoral votes"] = line[1]
		state["republican"] = line[2]
		state["democrat"] = line[3]
		state["other"] = line[4]
		state["total"] = line[5]
		rep["popular vote"] += line[2]
		dem["popular vote"] += line[3]
		if state["republican"] > state["democrat"]:
			rep["electoral vote"] += state["electoral votes"]
			rep["states"] += 1
			state["winner"] = "republican"
		elif state["republican"] < state["democrat"]:
			dem["electoral vote"] += state["electoral votes"]
			dem["states"] += 1
			state["winner"] = "democrat"
		else:
			state["winner"] = "tie"
		assert state["total"] == state["republican"] + state["democrat"] + state["other"], "error in data parsing in " + line[0]
		states[line[0]] = state

with open("results.json", "w") as f:
	f.write(json.dumps(states))
print("Republican: " + str(rep))
print("Democrat: " + str(dem))
print("Total: " + str(rep["electoral vote"] + dem["electoral vote"]))
