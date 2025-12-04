export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
}

export interface Photo {
  id: string;
  url: string;
  caption: string;
  heightClass: string; // TailWind class for height to simulate masonry
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}