import {SiteConfigT} from "@/config/types";

export const siteConfig: SiteConfigT = {
    title: "THISISARTON®",
    description: "Discover the latest Collections and new Collaborations.",
    navItems: [
        {id: 0, title: "Women", slug: "women"},
        {id: 1, title: "Men", slug: "men"},
        {id: 2, title: "Objects", slug: "objects"},
    ],
    actionItems: [
        {id: 0, title: "Search", slug: "search"},
        {id: 1, title: "Cart", slug: "cart"},
    ]
};
