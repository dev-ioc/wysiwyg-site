"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface PageHeaderProps {
  navLinks: Array<{ label: string; href: string }>;
}

const PageHeader = ({ navLinks }: PageHeaderProps) => {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();

    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <div className="px-4 xl:px-0 py-8 bg-white/25 w-full">
      <nav className="container mx-auto w-full bg-white rounded-full shadow-lg flex items-center justify-between h-[64px] backdrop-blur-sm">
        <ul className="flex items-center gap-8 px-4 font-assistant text-[17px]">
          {navLinks.map((item) => {
            const isAnchor = item.href.startsWith("/#");
            const section = item.href.replace("/#", "#");

            const isActive =
              pathname === "/" && isAnchor
                ? hash === section
                : pathname === item.href;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`text-[15px] font-medium transition-colors ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-dark hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/#contact"
          className="bg-[#54BE73] text-white text-[15px] font-semibold px-8 py-[1.3rem] rounded-r-full hover:bg-green-600"
        >
          Get Free Quote
        </Link>
      </nav>
    </div>
  );
};

export default PageHeader;
