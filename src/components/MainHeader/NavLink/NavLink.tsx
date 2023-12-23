"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./navlink.module.css";

type TNavLink = {
  href: string;
  children: string;
};

export default function NavLink(props: TNavLink) {
  const { href, children } = props;
  const pathname = usePathname();
  const activeLink = (href: string) => {
    return pathname.startsWith(href) ? classes.active : "";
  };

  return (
    <Link href={href} className={activeLink(href)}>
      {children}
    </Link>
  );
}
