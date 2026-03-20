export function PhiFabricFootnote({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="rounded-lg p-6 my-8" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="flex items-start gap-4">
        <span
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-headline font-bold"
          style={{ backgroundColor: "#F0EBE3", color: "#2D2A26" }}
        >
          &Phi;
        </span>
        <div>
          <p className="font-headline font-semibold mb-1" style={{ color: "#2D2A26" }}>
            {title}
          </p>
          <p className="text-sm mb-2" style={{ color: "#3D3A36" }}>
            {description}
          </p>
          <a
            href={href}
            className="text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: "#4A7B8C" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read on PhiFabric &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
