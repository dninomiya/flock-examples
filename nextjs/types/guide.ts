export type Guide = {
  id: string;
  title: string;
  sources?: string[];
  libraries?: {
    title: string;
    url: string;
  }[];
  docs?: {
    title: string;
    url: string;
  }[];
  ready?: boolean;
};
