import "./globals.css";
import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import mjLogo from "@/public/images/heart-code-logo.svg";
import gitHubIcon from "@/public/icon-github.png";
import linkedinIcon from "@/public/icon-linkedin.png";

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
        <header className="grid grid-flow-col gap-2 mx-2">
          <Image src={mjLogo} alt="logo" width="168" className="m-auto mr-2" />
          <div className="flex flex-col self-center mb-1 mx-2">
            <h1 className={`${libreB.className}`}>michelle</h1>
            <h1 className={`${libreB.className} mt-[-.4rem] mb-[.4rem]`}>
              janay
            </h1>
            {/* <caption className="uppercase text-left text-[.875rem] leading-5">
              software developer
            </caption> */}
          </div>
        </header>
        <nav className="flex justify-evenly lg:max-w-[90%] m-auto">
          <Link href={"/"}>home</Link>
          <Link href={"about"}>about</Link>
          <Link href={"projects"}>projects</Link>
          <Link href={"contact"}>contact</Link>
          <Link href={"https://github.com/michellejanay"} target="_blank">
            <Image src={gitHubIcon} alt="github icon" width={20} />
          </Link>
          <Link href={"https://linkedin.com/in/michelle-janay"} target="_blank">
            <Image src={linkedinIcon} alt="linkedin icon" width={20} />
          </Link>
        </nav>
        <main className="mx-4 my-16">{children}</main>
      </body>
    </html>
  );
}
