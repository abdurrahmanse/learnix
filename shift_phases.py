import re

with open("Docs/03-development-roadmap.md", "r") as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Function to replace numbers in Phase X or Phase X.Y
    def replacer(match):
        prefix = match.group(1) # e.g. "Phase "
        num = int(match.group(2))
        suffix = match.group(3) # e.g. "" or ".1"
        
        if num >= 2:
            return f"{prefix}{num+1}{suffix}"
        return match.group(0)
    
    # Matches "Phase 2", "Phase 2.1", "Phase 15", etc.
    # Exclude Phase X
    new_line = re.sub(r'(Phase )(\d+)((?:\.\d+)?(?:[^\w]|$))', replacer, line)
    new_lines.append(new_line)

with open("Docs/03-development-roadmap-shifted.md", "w") as f:
    f.writelines(new_lines)
print("Done")
