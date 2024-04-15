import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
// import ClientSideProviderTest from "@/components/clientSideProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Our Next JS App",
    template: "%s | NextJS 14"
  },
  description: "This one our first nextjs demo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="container">
          {/* <ClientSideProviderTest> */}
          <NavBar />
          {children}
          <Footer />
          {/* </ClientSideProviderTest> */}
        </div>
      </body>
    </html>
  );
}
