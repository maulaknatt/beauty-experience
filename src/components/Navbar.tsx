"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.jpeg"
              alt="Pure Beauty Experience Logo"
              width={48}
              height={48}
              className={styles.logoImg}
              priority
            />
            <div className={styles.logoText}>
              <span className={styles.logoBrand}>Pure Beauty</span>
              <span className={styles.logoSub}>Experience</span>
            </div>
          </Link>

          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className={`btn btn-primary ${styles.navCta} hide-mobile`}>
            Hubungi Kami
          </Link>

          <button
            className={styles.menuBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.open : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.open : ""}`}>
        <div className={styles.mobileDrawerInner}>
          <div className={styles.mobileLogoRow}>
            <div className={styles.mobileLogoLeft}>
              <Image
                src="/images/logo.jpeg"
                alt="Logo"
                width={56}
                height={56}
                className={styles.logoImg}
              />
              <div className={styles.logoText}>
                <span className={styles.logoBrand}>Pure Beauty</span>
                <span className={styles.logoSub}>Experience</span>
              </div>
            </div>
            <button
              className={styles.mobileCloseBtn}
              onClick={() => setMobileOpen(false)}
              aria-label="Tutup menu"
            >
              <X size={28} />
            </button>
          </div>
          <ul className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className={`btn btn-primary ${styles.mobileCta}`}>
            Hubungi Kami
          </Link>
        </div>
      </div>
    </>
  );
}
