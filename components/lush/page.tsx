import Image from "next/image";
import Link from "next/link";
import Me from "./profile-pic.png";
import DesignProcessDiagram from "./Design-Process-Diagram.png";
import LushNovemberPromotion from "./Lush-November-2023-Promotion.png";
import LeanCanvas from "./Lean-Canvas.png";
import LushMovileNav from "./Lush-Mobile-Nav.png";
import LushUserJourney from "./User-Journey-Map.png";
import IconQuestionMark from "@/components/icons/Icon-QuestionMark.png";
import IconInfo from "@/components/icons/Icon-Informational.png";
import BestMergeMethod from "@/components/lush/best-merge-method-dendrogram.png";

const Header = ({ title, emphasis }) => {
  return (
    <header className="py-16">
      <a href="https://schoolofux.com/">The School of UX</a>
      <h1>{title}</h1>
      <p className="m-0 p-0">
        <em className="text-sm text-[grey]">{emphasis}</em>
      </p>
    </header>
  );
};

const Hypothesis = ({ n, thesis }) => {
  return (
    <li className="my-4 p-0">
      <p className="m-0 p-0">
        <em className="m-0 p-0">Hypothesis {n}</em>
      </p>
      <p className="m-0 p-0">{thesis}</p>
    </li>
  );
};

const HypothesisCheck = ({ n, thesis, bool }) => {
  return (
    <div className="m-0 p-4 border rounded">
      <div className="m-0 p-0 flex">
        <div>
          <p className="m-0 p-0">
            <em>Hypothesis {n}</em>
          </p>
          <p className="m-0 p-0">{thesis}</p>
        </div>
        <p className="mx-4 p-4">
          <strong>{bool}</strong>
        </p>
      </div>
    </div>
  );
};

const Info = ({ text }) => {
  return (
    <div className="flex">
      <div className="border">
        <Image src={IconInfo} alt="Info Icon" className="border" />
      </div>
      <p className="italic border mx-2 p-0 text-[grey]">{text}</p>
    </div>
  );
};

export default function LushIsLush() {
  return (
    <div>
      {/*         CREDIT          */}
      <div>
        <p className="m-0">
          <em className="text-sm text-[grey]">
            Portfolio template courteosuy of
            <Link href="https://schoolofux.com/"> School of UX </Link>
          </em>
          ✨
        </p>
      </div>
      <iframe
        // style="border: 1px solid rgba(0, 0, 0, 0.1);"
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDvgLmnpoSWxEFW8ZC7cxPu%2FUntitled%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-7%26viewport%3D247%252C195%252C0.15%26t%3DAKGp5Kr8BEE3duEj-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A7%26mode%3Ddesign"
        allowfullscreen
      ></iframe>

      {/*        Bio          */}
      <div>
        <div className="md:flex">
          <Image
            src={Me}
            alt="a photo of Michelle"
            className="object-contain w-1/2"
          />
          <h1>
            Hi, I'm <span>Michelle Janay Bennett</span> UX Designer and Full
            Stack Developer living in Birmingham
          </h1>
        </div>
        <div className="md:flex">
          <p>
            A recent graduate of CodeYourFuture, and a recent successful
            Software Developer at Who Targets Me, I decided to learn more about
            UX/UI to become more skilled in my trade.{" "}
          </p>
          <p>
            I have a particular interest in research, analytics and JavaScript.
            Having worked in hospitality, charity and education companies, I’m
            keen to explore opportunities in evidence based design, where I can
            also build your products.
          </p>
        </div>
        <div>
          <div className="border md:flex md:justify-evenly">
            <div className="flex md:flex-auto md:grid md:text-center">
              <ol className="flex flex-col py-8 px-4">
                <li>List thumbnail</li>
                <li>list title</li>
              </ol>
              <ol className="border border-black"></ol>
              <ol className=""></ol>
              <ol className="py-8 px-4">
                <li>List item</li>
              </ol>
            </div>
            <div className="flex md:grid md:flex-auto md:grid md:text-center">
              <ol className="flex flex-col py-8 px-4">
                <li>List thumbnail</li>
                <li>list title</li>
              </ol>
              <ol className="border border-black"></ol>
              <ol className=""></ol>
              <ol className="py-8 px-4">
                <li>List item</li>
              </ol>
            </div>
            <div className="flex md:grid md:flex-auto md:grid md:text-center">
              <ol className="flex flex-col py-8 px-4">
                <li>List thumbnail</li>
                <li>list title</li>
              </ol>
              <ol className="border border-black"></ol>
              <ol className=""></ol>
              <ol className="py-8 px-4">
                <li>List item</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/*           DESIGN PROCESS           */}
      <div className="bg-[#333333] text-white md:flex">
        <div>
          <h1>Design Process</h1>
          <p>
            I’ve created a process to have a solid foundation for my work as a
            designer/developer within different organisations.
          </p>
          <p>
            Ideally, I’m following the same flow when I’m walking through my
            case studies in this portfolio.
          </p>
        </div>
        <Image src={DesignProcessDiagram} alt="Design Process Diagram"></Image>
      </div>

      {/*            PROJECT BRIEF            */}
      <div>
        <Header
          title="Lush"
          emphasis="My case study of working as a UX designer at an educational
              organisation in London."
        />
        <div className="md:flex">
          <div>
            <h5 className="uppercase">Background</h5>
            <p>
              I joined The School of UX to upskill as a Designer/Developer in
              2023. They are a private educational institution in London
              offering short and accessible User Experience and User Interface
              design courses as well as career advice.
            </p>
          </div>
          <hr />
          <div>
            <h5 className="uppercase">My Responsibilities</h5>
            <p>
              I joined The School of UX to upskill as a Designer/Developer in
              2023. They are a private educational institution in London
              offering short and accessible User Experience and User Interface
              design courses as well as career advice.
            </p>
          </div>
          <div>
            <Image
              src={LushNovemberPromotion}
              alt="Lush November 2023 Promotion"
            />
          </div>
        </div>
      </div>

      {/*           BUSINESS RESEARCH            */}
      <div>
        <Header
          title="Business Research"
          emphasis="I started by understanding the business requirements"
        />
        <div className="md:flex">
          <div>
            <h5 className="uppercase">Business Goal</h5>
            <p>
              The company has a Secret Master Plan to
              <ol>
                <li>1. Make products for every need,</li>
                <li>2. Be number one in every category, and </li>
                <li>3. Create a cosmetic revolution to save the planet</li>
              </ol>
            </p>
          </div>
          <hr />
          <div>
            <h5 className="uppercase">Problem Definition</h5>
            <div>
              <p>
                Lush has a huge variety of products. What is the best way for
                new and old customers to be able to see them? Based off of the
                search functionality, it’s not clear what products or services
                Lush offers.
              </p>
              <p>
                <em className="text-small text-[gray]">Hypothesis 0</em>
              </p>
            </div>
            <Image src="" alt="" />
          </div>
          <div>
            <Image src={LeanCanvas} alt="Lean Canvas - Business Research" />
          </div>
        </div>
        <div></div>
      </div>

      {/*           DESIGN REVIEW           */}
      <div>
        <Header
          title="Design Review"
          emphasis="I researched the current website to evaluate what works and what doesn't - assumptions from my professional point of view."
        />
        <div className="md:flex">
          {/* what works */}
          <div>
            <h5 className="uppercase">What works</h5>
            <ol className="m-0 p-0">
              <Hypothesis
                n={1}
                thesis="Most current promotions on the landing display and scrolling
                  the information architecture makes sense"
              />
              <Hypothesis
                n={2}
                thesis="Most current promotions on the landing display and scrolling
                  the information architecture makes sense"
              />
              <Hypothesis
                n={3}
                thesis="Most current promotions on the landing display and scrolling
                  the information architecture makes sense"
              />
              <Hypothesis
                n={4}
                thesis="Most current promotions on the landing display and scrolling
                  the information architecture makes sense"
              />
              <Hypothesis
                n={5}
                thesis="Most current promotions on the landing display and scrolling
                  the information architecture makes sense"
              />
            </ol>
          </div>
          {/* what could be improved */}
          <div>
            <h5 className="uppercase">What Could be improved?</h5>
            <ol>
              <Hypothesis
                n={6}
                thesis=" Not certain what products/services Lush offers based on
                shop/search functionality"
              />
              <Hypothesis
                n={7}
                thesis="No way to browse all of Lush’s products for anyone looking for
                purchase inspiration"
              />
              <Hypothesis
                n={8}
                thesis="No in house way to exit the search functionality after a
                search has been run."
              />
              <Hypothesis
                n={9}
                thesis="Load time is sometimes slow, which could affect bounce rates"
              />
              <Hypothesis
                n={10}
                thesis="Not a lot of Lush’s personality or company culture on the Shop
                website"
              />
            </ol>
          </div>
        </div>
        <div>
          <Image src={LushMovileNav} alt="Lush current mobile navigation" />
        </div>
      </div>

      {/*           USER RESEARCH           */}
      <div>
        <Header
          title="User Research"
          emphasis="I want to understand the average user’s profile based on the current customer base, and prove my & business’ hypotheses."
        />
      </div>

      {/*           USER JOURNEY          */}
      <div>
        <Header
          title="User Journey"
          emphasis="I’d like understand what are the current steps it takes for users to complete a search for a product and if it could be optimised"
        />
        <div>
          <section>
            <h5>Current Product Search</h5>
            <p className="w-[30%]">
              I've mapped using <Link href="https://figma.com">Figma</Link> a
              detailed flow of booking for a course:
            </p>
          </section>
          <Image
            src={LushUserJourney}
            alt="Lush Product Search User Journey"
            className="mt-[-8em] md:max-w-[80%] md:mx-auto"
          />
          <section className=" py-2">
            <h5 className="uppercase">Unhappy Paths and Error States</h5>
            <p>
              It's important not to neglext those scenarios when things go wrong
              - ther's when users get frustrated most and drop off. I've mapped
              using <Link href="https://figma.com">Figma</Link> those unhappy
              scenarios such as seach not returning the correct products.
            </p>
          </section>
          <HypothesisCheck
            n={1}
            thesis="Easy to search for products, especially if the customer knows
                exactly what they are looking for"
            bool="Pass"
          />
        </div>
      </div>

      {/*           INFORMATION ARCHITECHTURE          */}
      <div>
        <Header
          title="Information Architecture"
          emphasis="I want to ensure the website's content is well organised to make it easy to discover and navigate through."
        />
        <section>
          <h5>Card Sorting</h5>
          <p>
            Lush has many different procuts that could be sorted into many
            different categories.
          </p>
          <p>
            I’ve run card sorting in
            <Link href="https://optimalworkshop.com">OptimalSort</Link> with
            past random professional participants to validate the product
            listing is well grouped and labelled:
          </p>
          <Info text="71% of respondents agreed on where categories would likely be listed in product descriptions." />
          <Image
            src={BestMergeMethod}
            alt="Optimal Sort Card Sorting Results - Best merge method dendrogram"
          />
        </section>
        <section>
          <HypothesisCheck
            n={1}
            thesis="Most current promotions on the landing display and scrolling the information architecture makes sense"
            bool="Pass"
          />
        </section>
      </div>

      {/*           ACCESSIBILITY          */}
      <div></div>

      {/*           USABILITY TESTING         */}
      <div></div>

      {/*           A/B TESTING         */}
      <div></div>

      {/*           ANALYTICS        */}
      <div></div>

      {/*           USER FEEDBACK        */}
      <div></div>

      {/*           HIRE ME        */}
      <div>
        <footer className="bg-[#333333] text-white p-4">
          <h1>
            Hire me<span className="text-[#FF68BA]">.</span>
          </h1>

          <p className="m-0">
            <strong>Michelle Bennett</strong>
          </p>
          <p className="p-0">UX Researcher && Full Stack Developer</p>
          <p className="p-0">
            <strong>+44 7908432915</strong>
          </p>
          <div className="flex flex-col text-[#FF68BA]">
            <Link href="mailto: michelle.janay.dev@gmail.com">
              michelle.janay.dev@gmail.com
            </Link>
            <Link href="https://linkedin.com/in/michelle-janay">
              linkedin.com/in/michelle-janay
            </Link>
            <Link href="https://github.com/michellejanay">
              github.com/michellejanay
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
