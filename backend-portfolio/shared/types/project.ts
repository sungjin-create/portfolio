export type ProjectTechGroup = {
  category: string;
  items: string[];
};

export type ProjectDetail = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  period: string;
  role: string;
  techStack: string[];
  techGroups?: ProjectTechGroup[];

  githubUrl?: string;

  overview: string[];
  features: {
    title: string;
    description: string;
  }[];
  troubleshooting: {
    title: string;
    problem: string;
    cause: string;
    solution: string;
    result: string;
  }[];
  performance?: {
    testTool: string;
    scenario: string;
    results: string[];
  };
  learned: string[];
};