import { Outfit } from "next/font/google";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Abhishek Sharma - Data Science Student & Full Stack Developer",
  description: "Portfolio of Abhishek Sharma, a Data Science Student & Full Stack Developer specializing in Data Science and Full Stack Development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
