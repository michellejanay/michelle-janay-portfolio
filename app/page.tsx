import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col">
      <article className="mb-4 lg:max-w-[70%] m-auto ">
        <h2 className={"font-libre"}>{`Hi, I'm a`}</h2>
        <h2
          className={"font-libre lg:mb-4"}
        >{`UX Designer && Software Developer`}</h2>
        <p className="">
          {`Driven by evidence based, great Software, based in Birmingham, with dual citizenship (US/UK), who loves to travel.
        An ever curious and analytical bubbly personality, who loves understanding the whys and hows, writing
        algorithms in JavaScript and working with different JavaScript/CSS
        frameworks`}
        </p>
      </article>
      <Link
        href="/MB-Software-Developer.pdf"
        download={true}
        target="_blank"
        className="my-4 py-2 px-6 bg-[#252131] text-white rounded self-center"
      >
        Download my CV
      </Link>
    </div>
  );
}
