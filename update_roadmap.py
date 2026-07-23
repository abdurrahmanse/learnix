import re

file_path = "Docs/03-development-roadmap.md"
with open(file_path, "r") as f:
    content = f.read()

phases = content.split('### Phase ')

new_phases = [phases[0]]

for phase in phases[1:]:
    lines = phase.split('\n')
    title_line = lines[0]
    
    is_frontend_ui = "Frontend" in title_line or "UI" in title_line
    is_api_integration = "API Integration" in title_line

    if is_frontend_ui:
        # Inject Frontend UI standards
        req_idx = -1
        for i, line in enumerate(lines):
            if line.startswith("Requirements:"):
                req_idx = i
                break
        
        if req_idx != -1:
            end_req_idx = req_idx + 1
            while end_req_idx < len(lines) and (lines[end_req_idx].strip().startswith("-") or lines[end_req_idx].strip() == ""):
                if lines[end_req_idx].strip() == "" and end_req_idx > req_idx + 1:
                    break
                end_req_idx += 1
            
            injections = [
                "- Adhere to Phase X Folder Structure and Shared Components standards.",
                "- Enforce strict TypeScript, ESLint compliance, and Code Optimization.",
                "- Apply Phase X Forms & Validation standardization."
            ]
            lines = lines[:end_req_idx] + injections + lines[end_req_idx:]
    
    elif is_api_integration:
        # Fix buggy API Integration phase to be Frontend API Integration
        req_idx = -1
        for i, line in enumerate(lines):
            if line.startswith("Requirements:"):
                req_idx = i
                break
        
        if req_idx != -1:
            end_req_idx = req_idx + 1
            while end_req_idx < len(lines) and (lines[end_req_idx].strip().startswith("-") or lines[end_req_idx].strip() == ""):
                if lines[end_req_idx].strip() == "" and end_req_idx > req_idx + 1:
                    break
                end_req_idx += 1
            
            # Replace backend requirements with frontend integration requirements
            lines = lines[:req_idx+1] + [
                "- Connect frontend UI to backend APIs.",
                "- Apply Phase X TanStack Query and Axios API layer standardization.",
                "- Integrate Zustand State Management for data flow.",
                "- Handle loading, success, and error states globally."
            ] + lines[end_req_idx:]
            
            # Also replace the "Do not implement frontend" line
            for i in range(len(lines)):
                if "Do not implement frontend." in lines[i]:
                    lines[i] = "Implement frontend API connection logic."
                elif "Stop after API implementation." in lines[i]:
                    lines[i] = "Stop after API integration is verified."
                    
    new_phases.append('\n'.join(lines))

with open(file_path, "w") as f:
    f.write('### Phase '.join(new_phases))
