import "./globals.css";
import { Metadata } from "next";
import { gotham } from "@/fonts";
import { MechanismCategory } from "@/types/mechanism-category";
import Providers from "@/components/providers";
import { cn } from "@/utils/shadui";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// this is needed because otherwise the tailwind JIT compiler will not be able to find the dynamic classes
// the type is to ensure every category is covered
const backgroundVariants: Record<MechanismCategory, string> = {
  "value-capture": "bg-orange",
  market: "bg-purple",
  "value-transfer": "bg-yellow",
  fundraising: "bg-green",
  governance: "bg-brown",
  signaling: "bg-pink",
};

export const metadata: Metadata = {
  title: "Mechanism Institute",
  description:
    "Mechanism Institute is a think tank that advances building blocks for digital-age institutions. We bring together builders and researchers to study, develop, simulate, and apply mechanisms to solve coordination problems.",
  icons: [
    {
      url: "/favicon.ico",
      sizes: "any",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          gotham.variable,
          "font-gotham flex h-[100vh] flex-col px-4 lg:px-20 bg-gray-200",
        )}
      >
        <Providers>
          <Navbar />
          <main className="flex flex-col flex-1 pb-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
