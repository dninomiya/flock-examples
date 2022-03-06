import { Category } from '../types/category';
import { AccessibilityCategory } from './accessibility-category';
import { AuthCategory } from './auth-category';
import { CommunityCategory } from './community-category';
import { FormCategory } from './form-category';
import { InstallationCategory } from './installation-category';
import { MediaCategory } from './media-category';
import { OtherCategory } from './other-category';
import { SearchCategory } from './search-category';
import { SeoCategory } from './seo-category';
import { UiCategory } from './ui-category';

export const Categories: Category[] = [
  InstallationCategory,
  AuthCategory,
  FormCategory,
  UiCategory,
  SearchCategory,
  SeoCategory,
  AccessibilityCategory,
  MediaCategory,
  CommunityCategory,
  OtherCategory,
];

export const Features = Categories.map((cat) => cat.features).flat();
