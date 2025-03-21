/**
 * About page entry interface
 */
export interface IAbout {
  id: string;
  sections: IAboutSection[];
}

export interface IAboutSection {
  id: string;
  title: string;
  description: string;
}
