"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/data-deletion", label: "Data Deletion" },
  { href: "#", label: "Terms of Use" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#faf8f3]/80 border-b border-gray-200/50">
        <div className="px-4 py-4 md:px-8 flex items-center justify-between max-w-5xl mx-auto">
          <Link href="/" className="flex items-center justify-center gap-2">
            <div className="text-2xl">
              <Image
                src="/brandlogo.png"
                width={100}
                height={158}
                alt="Ar-rashad brandlogo image"
                priority
                className="h-12 w-auto"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              />
            </div>
            <span className="font-semibold text-gray-800">
              Ar-rashad Academy
            </span>
          </Link>
          <div className="hidden md:flex gap-6 text-sm text-gray-600">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-emerald-700 font-medium"
                    : "hover:text-gray-800"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </>
  );
}
