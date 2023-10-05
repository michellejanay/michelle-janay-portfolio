import "./globals.css";
import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import mjLogo from "@/public/images/heart-code-logo.svg";
import gitHubIcon from "../public/icon-github.png";
import linkedinIcon from "../public/icon-linkedin.png";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });
export const libreB = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre",
});

export const metadata: Metadata = {
  title: "Michelle Janay Portfolio",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>
        <header className="grid grid-flow-col">
          <Image src={mjLogo} alt="logo" width="200" className="m-auto mr-0" />
          <div className="flex flex-col self-center">
            <h1 className={`${libreB.className}`}>{`michelle`}</h1>
            <h1 className={`${libreB.className}`}>{`janay`}</h1>
            <caption className="uppercase text-left py-2 tracking-widest">
              software developer
            </caption>
          </div>
        </header>
        <nav className="flex justify-evenly">
          <Link href={"/"}>home</Link>
          <Link href={"about"}>about</Link>
          <Link href={"projects"}>projects</Link>
          <Link href={"contact"}>contact</Link>
          <Link href={"https://github.com/michellejany"} target="_blank">
            <Image src={gitHubIcon} alt="github icon" width={20} />
          </Link>
          <Link href={"https://linkedin.com/in/michelle-janay"} target="_blank">
            <Image src={linkedinIcon} alt="linkedin icon" width={20} />
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
