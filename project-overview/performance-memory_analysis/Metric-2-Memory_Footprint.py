# Metric 2: Memory Footprint (sys.getsizeof)
import sys

names_list = process_with_comprehension(members_data)
names_generator = (item["StudName"] for item in members_data if item["Rating"] > 1400)

print(f"\nMemory Footprint:")
print(f"Names List (Full list in memory): {sys.getsizeof(names_list)} bytes")
print(f"Names Generator (Lazy evaluation): {sys.getsizeof(names_generator)} bytes")