import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { getuser } from "@/lib/getuser";

type User = {
  id: string;
  name: string;
  email: string;
};

export const metadata: Metadata = {
  title: "JobHawk — Stop Searching. Start Getting Hired.",
  description:
    "JobHawk automatically monitors 5+ top hiring platforms and delivers verified, high-match opportunities directly to your inbox every morning at 9:00 AM sharp.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-icon.png", type: "image/png" },
    ],
    apple: [{ url: "/logo-icon.png" }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getuser();
  const user: User | undefined = session?.user
    ? {
        id: session.user.id || "",
        name: session.user.name || "Unknown",
        email: session.user.email || "",
      }
    : undefined;

  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
}
