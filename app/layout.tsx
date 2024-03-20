import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const font = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tax Accountant Support Service",
  description: "税理士支援サービス",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`
        ${font.className}
        text-sm
        text-gray-700
      `}>
        <div className="relative z-20">
          <Header />
        </div>
        <div className="relative z-10">
          <div className="m-2">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
