export interface NavItem {
  label: string;
  href: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
}

export interface AutomationUseCase {
  title: string;
  description: string;
  status: 'dev' | 'poc' | 'flagship';
}
