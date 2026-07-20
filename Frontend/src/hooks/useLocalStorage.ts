// useLocalStorage.ts — Generic typed localStorage hook
// Reused wherever persistent client state is needed
// Props:    key, initialValue
// Returns:  [value, setValue, remove]
// Used by:  theme preference, sidebar collapsed state, last watched lesson
// Rule:     Never call localStorage directly in components — use this hook
