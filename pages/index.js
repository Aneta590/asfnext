import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h3>Home page</h3>
      <Link href="/blog">
        <a>BLOG</a>
      </Link>
      <br/>
    <Link href="/api/:id" replace> 
        <a>ID</a>
      </Link>
    </div>
  );
}
