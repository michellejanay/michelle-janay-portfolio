import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col">
      <article className="mb-4">
        <h2 className={"font-libre"}>{`Hi, I'm a`}</h2>
        <h2 className={"font-libre"}>{`software developer`}</h2>
        <p>
          {`Based in Birmingham, with dual citizenship (US/UK), who loves to travel.
        An ever curious and analytical bubbly personality. Loves writing
        algorithms in JavaScript and working with different JavaScript
        frameworks`}
        </p>
      </article>
      <Link
        href="/MB-Software-Developer.pdf"
        download={true}
        target="_blank"
        className="py-2 px-6 bg-black text-white rounded self-center"
      >
        CV Download
      </Link>
    </div>
  );
}
