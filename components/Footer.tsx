import { Fragment } from "react";
import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/data-deletion", label: "Data Deletion" },
  { href: "#", label: "Terms of Use" },
];

export default function Footer() {
  return (
    <footer className="px-4 md:px-8 py-12 border-t border-gray-200 max-w-5xl mx-auto">
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-4">© 2026 Ar-Rashad Academy</p>
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-gray-600 mb-4">
          {FOOTER_LINKS.map((link, i) => (
            <Fragment key={link.label}>
              {i > 0 && <span className="text-gray-400 mx-2">•</span>}
              <Link href={link.href} className="hover:text-gray-800">
                {link.label}
              </Link>
            </Fragment>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          Made with 💚 by Rasheed Olatunde
        </p>
      </div>
    </footer>
  );
}
