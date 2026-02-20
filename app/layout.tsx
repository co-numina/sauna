import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "$SAUNA — The Most Finnish Thing Ever, Tokenized",
  description: "3.3 million saunas. 5.5 million people. One token. Löyly.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='20' y='50' width='60' height='40' rx='4' fill='%238B6914'/><rect x='25' y='55' width='50' height='30' rx='2' fill='%23A07818'/><path d='M40 50 Q40 30 42 20' stroke='%23fff' stroke-width='3' fill='none' opacity='0.6'><animate attributeName='d' values='M40 50 Q40 30 42 20;M40 50 Q38 28 43 15;M40 50 Q40 30 42 20' dur='3s' repeatCount='indefinite'/></path><path d='M55 50 Q55 28 57 18' stroke='%23fff' stroke-width='3' fill='none' opacity='0.5'><animate attributeName='d' values='M55 50 Q55 28 57 18;M55 50 Q53 25 58 12;M55 50 Q55 28 57 18' dur='2.5s' repeatCount='indefinite'/></path></svg>",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
