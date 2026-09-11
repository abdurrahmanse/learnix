import { create } from "zustand";

interface CourseState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedLevel: string | null;
  setSelectedLevel: (level: string | null) => void;
  clearFilters: () => void;
}

export const useCourseStore = create<CourseState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  selectedLevel: null,
  setSelectedLevel: (level) => set({ selectedLevel: level }),
  clearFilters: () => set({ searchQuery: "", selectedLevel: null }),
}));
