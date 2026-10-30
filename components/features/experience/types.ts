export type ExperienceBulletData = {
	text: string;
};

export type ExperienceSectionData = {
	title: string;
	bullets: ExperienceBulletData[];
};

export type ExperienceItemData = {
	id: string;
	role: string;
	company: string;
	location?: string;
	startDate: string;
	endDate: string;
	summary?: string;
	sections: ExperienceSectionData[];
};
