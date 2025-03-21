/**
 * Hygraph API response interface
 */
export interface HygraphResponse {
  data: {
    page: IAbout;
  };
}

/**
 * About page entry interface
 */
export interface IAbout {
  id: string;
  title: string;
  sections: IAboutSection[];
}

export interface IAboutSection {
  id: string;
  title: string;
  description: string;
  items: (IAboutValue | IAboutMember)[];
}

export interface IAboutValue {
  id: string;
  title: string;
  description: string;
}

export interface IAboutMember {
  id: string;
  name: string;
  job: string;
  bio: string;
  links: IAboutMemberLink[];
}

export interface IAboutMemberLink {
  id: string;
  title: string;
  url: string;
  icon?: string;
}
