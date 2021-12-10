export interface Movies {
  results: Movie[];
  count: number;
  previous: string | null;
  next: string | null;
  CurrentPage: number;
}

export interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  creator: string;
}
