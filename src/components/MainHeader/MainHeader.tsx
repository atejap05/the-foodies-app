"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import classes from "./main-header.module.css";
import MainHeaderBackground from "@/components/MainHeader/MainHeaderBackground/MainHeaderBackground";
import logo from "@/assets/logo.png";
import NavLink from "./NavLink/NavLink";
import { usePathname } from "next/navigation";

type Props = {};

function MainHeader({}: Props) {
  const pathname = usePathname();

  const activeLink = (href: string) => {
    return pathname.startsWith(href) ? classes.active : "";
  };

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image priority src={logo} alt="A plate with food on it" />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Explore Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
