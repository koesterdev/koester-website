export interface Position {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  projects: Project[];
}

export interface Project {
  name: string;
  content: string[];
}
