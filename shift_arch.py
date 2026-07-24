import re

with open("Docs/architecture.md", "r") as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    def replacer(match):
        prefix = match.group(1)
        num = int(match.group(2))
        if num >= 2:
            return f"{prefix}{num+1}"
        return match.group(0)
    
    # Matches "# Phase 2", "Phase 2:" etc
    new_line = re.sub(r'(Phase )(\d+)', replacer, line)
    new_lines.append(new_line)

with open("Docs/architecture.md", "w") as f:
    f.writelines(new_lines)
print("Done")
