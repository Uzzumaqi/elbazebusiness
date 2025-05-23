import { Geist, Geist_Mono, Fustat} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const arabic = Fustat({
  variable: "--font-arabic",
  subsets: ["arabic"],
});

export const metadata = {
  title: "elbazebusiness",
  description: "elbazebusiness is a company that will help you to improve your project",
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${arabic.variable}`}>
        {children}
      </body>
    </html>
  );
}
