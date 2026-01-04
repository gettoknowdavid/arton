export interface NavItemT {
    id: number;
    title: string;
    slug: string;
}

export interface ActionItemT {
    id: number;
    title: string;
    slug: string;
}

export interface SiteConfigT {
    title: string;
    description: string;
    navItems: NavItemT[];
    actionItems: ActionItemT[];
}