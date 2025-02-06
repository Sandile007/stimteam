
export enum SelectedPage {
    Home = "home",
    About = "about",
    Contact = "contact",
    Services = "services"
  }

export interface AboutType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ServiceType {
    name: string;
    description?: string;
    image: string;
}
