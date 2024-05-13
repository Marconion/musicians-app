import { Inter, Advent_Pro } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const adventPro = Advent_Pro({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Marko Zujovic",
    default: "Marko Zujovic",
  },
  description: "by Marko Zujovic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-r from-gray-950 via-blue-950/80 to-gray-950 ${adventPro.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
