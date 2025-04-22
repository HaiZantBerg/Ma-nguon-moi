import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Main/Navbar";
import { Inter } from "next/font/google";
import QueryProvider from "@/components/Others/QueryProvider";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Ethems",
    description:
        "This app's purpose is for students to understand more about the history of maths",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} overflow-auto`}>
                <QueryProvider>
                    <Navbar />
                    <div>{children}</div>
                </QueryProvider>
            </body>
        </html>
    );
}
