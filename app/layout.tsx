import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Main/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
            <body className={`${inter.className} bg-white text-black`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
