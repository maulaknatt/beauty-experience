import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
import styles from "./Footer.module.css";

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.79a8.25 8.25 0 0 0 4.83 1.56V6.91a4.85 4.85 0 0 1-1.06-.22z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Wave top */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#2D1B1B"/>
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Image
            src="/images/logo.jpeg"
            alt="Pure Beauty Experience Logo"
            width={72}
            height={72}
            className={styles.logo}
          />
          <div>
            <div className={styles.brandName}>Pure Beauty Experience</div>
            <div className={styles.brandTagline}>&ldquo;Bloom With Confidence&rdquo;</div>
            <p className={styles.brandDesc}>
              Exclusive beauty class yang menggabungkan edukasi skincare,
              makeup, dan networking dalam suasana yang menyenangkan.
            </p>
          </div>
        </div>

        <div className={styles.links}>
          <div>
            <h4 className={styles.linkTitle}>Navigasi</h4>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={styles.linkTitle}>Info Event</h4>
            <ul className={styles.linkList}>
              <li>Beauty Class × Emina</li>
              <li>21 Juni 2026</li>
              <li>Tomoro Coffee, Bekasi</li>
              <li>Speaker: Alifia Safa</li>
            </ul>
          </div>
        </div>

        <div className={styles.socials}>
          <h4 className={styles.linkTitle}>Ikuti Kami</h4>
          <div className={styles.socialBtns}>
            <a
              href="https://www.instagram.com/beautyexperience.id/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialBtn} ${styles.instagram}`}
              aria-label="Instagram Beauty Experience"
            >
              <InstagramIcon />
              <span>@beautyexperience.id</span>
            </a>
            <a
              href="https://www.tiktok.com/@beautyexperience.id"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialBtn} ${styles.tiktok}`}
              aria-label="TikTok Beauty Experience"
            >
              <TikTokIcon />
              <span>@beautyexperience.id</span>
            </a>
            <a
              href="https://wa.me/6285939242672"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialBtn} ${styles.whatsapp}`}
              aria-label="WhatsApp Beauty Experience"
            >
              <MessageCircle size={18} />
              <span>085939242672</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© 2026 Pure Beauty Experience. All rights reserved.</p>
          <p className={styles.bottomSub}>Made with 🌸 by Maulana Bagus</p>
        </div>
      </div>
    </footer>
  );
}
