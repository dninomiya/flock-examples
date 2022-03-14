import { BasicDoc } from './basic-doc';
import { Guide } from './guide';

export type Category = {
  title: string;
  items: (Guide | BasicDoc)[];
};
