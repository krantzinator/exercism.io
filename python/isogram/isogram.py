def is_isogram(string):
    string = string.lower()
    for x in range(len(string)):
        count = string.count(string[x])
        if count > 1:
            return False
        continue
    return True
