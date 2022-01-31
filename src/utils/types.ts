export type FeedData = { 
  likes: number;
  desription: string;
  user: User;
  urls: UserPhotos;
}

export type User = {
  name: string;
  portfolio_url: string;
  username: string
}

export type UserPhotos = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}