export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  tech_stack: string[];
  project_url: string;
  created_at: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  start_year: number;
  end_year: number | null;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  start_date: string;
  end_date: string | null;
  description: string;
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  icon_url: string;
}
