export type Project = {
  slug: string;
  title: string;
  desc: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  externalUrl?: string;
};

export type Feature = {
  title: string;
  desc: string;
};
