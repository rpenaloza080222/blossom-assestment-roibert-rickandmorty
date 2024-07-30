"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { connection } from "./modules/shared/request-connection";
import { ApolloProvider } from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });




const apolloClient = connection()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}  
      </body>
    </html>
  );
}
