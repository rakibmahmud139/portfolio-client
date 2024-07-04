export enum ProficiencyLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

export type TSkill = {
  _id: string;
  skillName: string;
  proficiencyLevel: ProficiencyLevel;
  bgColor?: string;
  yearsOfExperience: number;
  image: string;
};

export type TProject = {
  _id: string;
  projectTitle: String;
  description: String;
  usedTechnologiesFrontend: string[];
  usedTechnologiesBackend: string[];
  startDate: string;
  endDate: string;
  projectImage: string;
  repositoryURL: string;
  backEndGitHubLink: string;
  liveLink: string;
};

export type TBlog = {
  _id: string;
  title: string;
  publicationDate: string;
  url: string;
  summary: string;
  tags: string[];
  platform: string;
  image: string;
  content: string;
};
