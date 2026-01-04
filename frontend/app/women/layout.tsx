import type {Metadata} from "next";
import React from "react";
import {siteConfig} from "@/config/site";

export const metadata: Metadata = {
    title: {
        default: `Women • ${siteConfig.description}`,
        template: `%s • ${siteConfig.title}`,
    },
    description: siteConfig.description,
    // icons: {icon: "/icon.png"},
};

export default function WomenLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <section>
            {children}
        </section>
    );
}