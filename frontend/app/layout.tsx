import type {Metadata} from "next";
import "./globals.css";
import {interTightSans} from "@/config/fonts";
import React from "react";
import {siteConfig} from "@/config/site";
import {Header} from "@/components/organisms/header";
import {SearchProvider} from "@/contexts/search-context";

export const metadata: Metadata = {
    title: {
        default: `${siteConfig.title} • ${siteConfig.description}`,
        template: `%s • ${siteConfig.title}`,
    },
    description: siteConfig.description,
    // icons: {icon: "/icon.png"},
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={`${interTightSans.className} antialiased no-scrollbar scroll-smooth`}>
        <SearchProvider>
            <Header/>
            {children}
        </SearchProvider>
        </body>
        </html>
    );
}