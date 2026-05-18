# Metric 1 Execution Time (%timeit)
# Example Comparing a list comprehension vs. a standard for-loop
import sys
import timeit

# Mock data simulating a list of member profiles from the database
members_data = [
    {UserID i, StudName fMember {i}, Rating 1200 + (i % 500)}
    for i in range(1000)
]

# --- Metric 1 Execution Time (%timeit equivalent) ---

def process_with_loop(data)
    Traditional for-loop approach.
    result = []
    for item in data
        if item[Rating]  1400
            result.append(item[StudName])
    return result

def process_with_comprehension(data)
    List comprehension approach (Pythonic equivalent of JS mapfilter).
    return [item[StudName] for item in data if item[Rating]  1400]

t1 = timeit.timeit(lambda process_with_loop(members_data), number=1000)
t2 = timeit.timeit(lambda process_with_comprehension(members_data), number=1000)

print(fExecution Time (1000 runs))
print(fStandard Loop {t1.4f}s)
print(fList Comprehension {t2.4f}s)