import { create } from 'zustand';

type FilterState = {
	activeFilter: string;
	setActiveFilter: (filter: string) => void;
};

export const useFilterStore = create<FilterState>((set) => ({
	activeFilter: 'all',
	setActiveFilter: (filter) => set({ activeFilter: filter }),
}));
