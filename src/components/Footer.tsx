import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t mt-24 py-12" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-outer mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <Link href="/" className="font-headline text-lg font-bold" style={{ color: "var(--text)" }}>
              <span style={{ color: "var(--accent)" }}>Fi</span>Fabric
            </Link>
            <p className="text-meta mt-1" style={{ color: "var(--text-muted)" }}>
              M&A Intelligence
            </p>
          </div>
          <div className="flex gap-8 text-meta" style={{ color: "var(--text-muted)" }}>
            <Link href="/deals" className="hover:opacity-80 transition-opacity">Deals</Link>
            <Link href="/frameworks" className="hover:opacity-80 transition-opacity">Frameworks</Link>
            <Link href="/about" className="hover:opacity-80 transition-opacity">About</Link>
            <Link href="/subscribe" className="hover:opacity-80 transition-opacity">Subscribe</Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-meta" style={{ color: "var(--text-muted)" }}>
            Part of the Fabric family &middot;{" "}
            <a href="https://phifabric.com" className="hover:opacity-80 transition-opacity" style={{ color: "var(--accent)" }}>
              PhiFabric
            </a>
          </p>
          <p className="text-meta" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} FiFabric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
