import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { MessageCircle, MapPin, Clock } from "lucide-react";

const InstagramIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
import styles from "./page.module.css";

const TikTokIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.79a8.25 8.25 0 0 0 4.83 1.56V6.91a4.85 4.85 0 0 1-1.06-.22z"/>
  </svg>
);

export const metadata: Metadata = {
  title: "Contact — Hubungi Pure Beauty Experience",
  description:
    "Hubungi Pure Beauty Experience melalui WhatsApp, Instagram, atau TikTok. Kami siap menjawab pertanyaan seputar beauty class dan event kecantikan.",
  alternates: { canonical: "https://beautyexperience.my.id/contact" },
  openGraph: {
    title: "Contact | Pure Beauty Experience",
    description: "Hubungi kami melalui WhatsApp atau sosial media.",
    url: "https://beautyexperience.my.id/contact",
  },
};

const contactMethods = [
  {
    id: "whatsapp",
    icon: <MessageCircle size={28} />,
    title: "WhatsApp",
    desc: "Chat langsung untuk pertanyaan cepat",
    value: "085939242672",
    link: "https://wa.me/6285939242672?text=Halo%20Pure%20Beauty%20Experience%2C%20saya%20ingin%20bertanya%20tentang%20event%20kalian%20%F0%9F%8C%B8",
    color: "whatsapp",
    cta: "Chat Sekarang",
  },
  {
    id: "instagram",
    icon: <InstagramIcon size={28} />,
    title: "Instagram",
    desc: "Follow & DM kami di Instagram",
    value: "@beautyexperience.id",
    link: "https://www.instagram.com/beautyexperience.id/",
    color: "instagram",
    cta: "Buka Instagram",
  },
  {
    id: "tiktok",
    icon: <TikTokIcon />,
    title: "TikTok",
    desc: "Tonton konten & video behind the scene",
    value: "@beautyexperience.id",
    link: "https://www.tiktok.com/@beautyexperience.id",
    color: "tiktok",
    cta: "Buka TikTok",
  },
];

const faqs = [
  {
    q: "Apakah event ini sudah selesai?",
    a: "Ya, Pure Beauty Experience 2026 telah dilaksanakan pada 21 Juni 2026 di Tomoro Coffee, Golden City, Bekasi Utara. Terima kasih kepada seluruh peserta yang telah hadir!",
  },
  {
    q: "Di mana saya bisa melihat dokumentasi event?",
    a: "Kamu bisa melihat seluruh foto dan video dokumentasi di halaman Gallery kami. Kami juga membagikan konten di Instagram dan TikTok @beautyexperience.id.",
  },
  {
    q: "Apakah akan ada event berikutnya?",
    a: "Ikuti terus sosial media kami di Instagram dan TikTok @beautyexperience.id untuk mendapatkan informasi event terbaru dan tidak ketinggalan!",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── PAGE HEADER ── */}
        <section className={styles.pageHeader}>
          <div className={styles.pageHeaderBg} />
          <div className={`container ${styles.pageHeaderContent}`}>
            <ScrollReveal>
              <div className="section-tag">💬 Kontak</div>
              <h1 className={styles.pageTitle}>
                Hubungi<br />
                <em className="text-gradient">Kami</em>
              </h1>
              <p className={styles.pageSubtitle}>
                Ada pertanyaan atau ingin tahu info event selanjutnya? Jangan ragu
                untuk menghubungi kami melalui channel berikut.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CONTACT CARDS ── */}
        <section className="section">
          <div className="container">
            <div className={styles.contactGrid}>
              {contactMethods.map((c, i) => (
                <ScrollReveal key={c.id} delay={i * 100}>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.contactCard} ${styles[c.color]}`}
                    id={`contact-${c.id}`}
                    aria-label={`Hubungi via ${c.title}`}
                  >
                    <div className={styles.contactIconWrap}>{c.icon}</div>
                    <h2 className={styles.contactTitle}>{c.title}</h2>
                    <p className={styles.contactDesc}>{c.desc}</p>
                    <div className={styles.contactValue}>{c.value}</div>
                    <div className={`btn btn-primary ${styles.contactCta}`}>{c.cta}</div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── EVENT INFO ── */}
        <section className={`section ${styles.infoSection}`}>
          <div className="container">
            <div className={styles.infoGrid}>
              <ScrollReveal direction="left">
                <div className={styles.infoCard}>
                  <div className="section-tag">📍 Info Event</div>
                  <h2 className={styles.infoTitle}>Pure Beauty Experience 2026</h2>
                  <div className={styles.infoList}>
                    <div className={styles.infoRow}>
                      <MapPin size={18} className={styles.infoIcon} />
                      <div>
                        <div className={styles.infoLabel}>Lokasi</div>
                        <div className={styles.infoVal}>Tomoro Coffee, Golden City</div>
                        <div className={styles.infoValSub}>Bekasi Utara, Jawa Barat</div>
                      </div>
                    </div>
                    <div className={styles.infoRow}>
                      <Clock size={18} className={styles.infoIcon} />
                      <div>
                        <div className={styles.infoLabel}>Waktu</div>
                        <div className={styles.infoVal}>21 Juni 2026</div>
                        <div className={styles.infoValSub}>14.00 WIB – Selesai</div>
                      </div>
                    </div>
                    <div className={styles.infoRow}>
                      <MessageCircle size={18} className={styles.infoIcon} />
                      <div>
                        <div className={styles.infoLabel}>WhatsApp</div>
                        <div className={styles.infoVal}>085939242672</div>
                        <div className={styles.infoValSub}>Respon cepat via chat</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={100}>
                <div className={styles.logoWrap}>
                  <Image
                    src="/images/logo.jpeg"
                    alt="Pure Beauty Experience Logo"
                    width={320}
                    height={320}
                    className={styles.logoImg}
                  />
                  <div className={styles.logoBadge}>
                    <span className={styles.logoBadgeText}>Bloom With Confidence</span>
                    <span className={styles.logoBadgeEmoji}>🌸</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={`section ${styles.faqSection}`}>
          <div className="container">
            <div className={styles.faqHeader}>
              <ScrollReveal>
                <div className="section-tag">❓ FAQ</div>
                <h2 className="section-title">Pertanyaan Umum</h2>
              </ScrollReveal>
            </div>
            <div className={styles.faqList}>
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className={styles.faqItem}>
                    <h3 className={styles.faqQ}>{faq.q}</h3>
                    <p className={styles.faqA}>{faq.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
