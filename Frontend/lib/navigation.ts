import fs from "fs";
import path from "path";

export interface NavRoute {
  path: string;
  name: string;
}

export function getAvailableRoutes(): NavRoute[] {
  const appDir = path.join(process.cwd(), "app");
  const routes: NavRoute[] = [];

  const excludePaths = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ];

  function traverse(dir: string, currentPath: string) {
    if (!fs.existsSync(dir)) return;

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const folderName = entry.name;
        // Skip route groups
        if (folderName.startsWith("(") && folderName.endsWith(")")) {
          traverse(path.join(dir, folderName), currentPath);
        }
        // Skip private folders
        else if (folderName.startsWith("_")) {
          continue;
        }
        // Skip dynamic routes since they don't have a single public route
        else if (folderName.startsWith("[") && folderName.endsWith("]")) {
          continue;
        }
        else {
          traverse(path.join(dir, folderName), `${currentPath}/${folderName}`);
        }
      } else if (entry.name === "page.tsx" || entry.name === "page.js") {
        const routePath = currentPath || "/";
        if (!excludePaths.includes(routePath)) {
          routes.push({
            path: routePath,
            name: formatRouteName(currentPath),
          });
        }
      }
    }
  }

  traverse(appDir, "");

  // Sort routes: Home first, then alphabetically
  return routes.sort((a, b) => {
    if (a.path === "/") return -1;
    if (b.path === "/") return 1;
    return a.name.localeCompare(b.name);
  });
}

function formatRouteName(routePath: string): string {
  if (!routePath || routePath === "/") return "Home";
  const lastSegment = routePath.split("/").pop() || "";
  return lastSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
