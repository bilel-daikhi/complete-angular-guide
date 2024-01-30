import { ProjectImage } from "./projectImage.model";

export interface SBSAProject {
  client: string;
  description_en: string;
  description_fr: string;
  developers: string;
  functionalities_en: string[];
  functionalities_fr: string[];
  icons: string[];
  id: number;
  landing: ProjectImage;
  languages: string[];
  name: string;
  project_type: string[];
  subName_en: string;
  subName_fr: string;
  time: string;
}
