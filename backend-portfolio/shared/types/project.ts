export type ProjectTechGroup = {
  category: string;
  items: string[];
};

export type ProjectTroubleItem = {
  label: string;
  text: string;
};

export type ProjectTroubleTable = {
  title: string;
  columns: string[];
  rows: string[][];
};

export type ProjectTroubleshooting = {
  title: string;
  summary: string;
  problem: ProjectTroubleItem[];
  cause: ProjectTroubleItem[];
  solution: {
    title: string;
    description: string;
    points: string[];
    code?: {
      title: string;
      language: string;
      content: string;
    };
  }[];
  result: string[];
  resultTable?: ProjectTroubleTable;
  analysis?: string[];
  keywords: string[];
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
  troubleshooting: ProjectTroubleshooting[];
  performance?: {
    testTool: string;
    scenario: string;
    results: string[];
  };
  learned: string[];
};