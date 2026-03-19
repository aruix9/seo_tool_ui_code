import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ButterSwipe",
  description: "SEO tools for your website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,-25&display=optional" />
      </head>
      <AuthProvider>
        <body className={`${inter.variable}`}>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              unstyled: true,
              classNames: {
                error: "bg-rose-600",
                info: "bg-cyan-600",
                success: "bg-emerald-800",
                warning: "bg-orange-600",
                toast:
                  "text-white bg-blue-400 rounded-lg border p-3 items-center flex gap-2 w-full !h-auto",
                title: "font-semibold text-base",
                actionButton: "bg-zinc-400",
                cancelButton: "bg-orange-400",
                closeButton: "bg-lime-400",
              },
            }}
          />
        </body>
      </AuthProvider>
    </html>
  );
}
