import Link from "next/link";
export default function Home() {
  return (
    <>
      <h2 className={"font-libre"}>{`Hi, I'm a`}</h2>
      <h2 className={"font-libre"}>{`software developer`}</h2>
      <p>
        {`Based in Birmingham, with dual citizenship (US/UK), who loves to travel.
        An ever curious and analytical bubbly personality. Loves writing
        algorithms in JavaScript and working with different JavaScript
        frameworks`}
      </p>
      <Link
        href="/MB-Software-Developer.pdf"
        download={true}
        target="_blank"
        className="py-2 px-6 m-auto bg-black m-auto my-4 text-white rounded"
      >
        CV Download
      </Link>
    </>
  );
}
