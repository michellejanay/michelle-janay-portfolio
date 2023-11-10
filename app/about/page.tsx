import Image from "next/image";
import lightBulb from "@/public/images/light-bulb.png";
import sparkles from "@/public/images/sparkles.png";
import heartCodeLogo from "@/public/images/heart-code-logo-1.png";
import Navigation from "@/components/Navigation";
export default function About() {
  return (
    <>
      <Navigation />
      <article className="flex flex-col mx-8 lg:max-w-[70%] mx-auto">
        <h2 className="font-libre">About Me</h2>
        <section className="flex flex-col md:grid grid-cols-3 gap-5 ">
          <p className="col-span-2">
            {`As someone who has 8+ years of experience in the Hospitality industry, I've had many various service-based roles. I wanted a change in my life, so I decided to retake the Myers-Briggs personality test to see what types of roles I could be suitable for. One that caught my eye was Web Development / Software Engineering. I never knew the two could be so similar.`}
          </p>
          <Image
            src={lightBulb}
            alt="light bulb idea"
            className="self-center mb-6 md:m-auto"
          />
        </section>
        <section className="md:grid grid-cols-3">
          <p className="col-span-2 order-2">
            {`Well, not that similar, really. At first, I jumped right in. I joined an intense 24-week Bootcamp, and as embarrassing as this is to say, I had no idea what I was getting myself into. HTML, CSS, great, fantastic I thought, I can do this! Then we got to JavaScript and I thought what (in the console.log('hello world')) is going on!? At the beginning of 2021, I no longer continued on that course. From there, I started self-teaching through Free Code Camp, Udemy, playing games like Grid Attack or solving kata on CodeWars, using any and every cheap/free resource I could find to practice and learn, especially in JavaScript, until in 2022, I was accepted as a Trainee in CodeYourFuture, in March 2023 I graduated with a certification in Full Stack Web Development, and in April 2023 I accepted my first contract position as a Software Developer.`}
          </p>
          <Image
            src={sparkles}
            alt="sparkles emoji"
            className="m-auto mr-0 md:mr-auto"
          />
        </section>
        <section className="flex flex-col lg:grid-cols-2">
          <p>
            {`I'm grateful that I didn't stop and I am grateful for the community I found through CodeYourFuture. Because now, two years later, I've rediscovered myself in the best of ways. I've learned how much I enjoy learning new things. I've learned how passionate I am about solving problems and helping others solve problems. I've gotten to know how great it is to be part of a development team, building solutions toward greater goals. I've rediscovered a fire, a drive, a vibrancy, but most importantly, I discovered a new and incredibly gratifying way to express my creativity; through service, solutions, and syntax. `}
          </p>
          <Image
            src={heartCodeLogo}
            alt="heart code logo"
            className="self-center mt-4 md:m-auto"
          />
        </section>
      </article>
    </>
  );
}
